import {
    ArrowDownIcon,
    ArrowUpIcon,
    SortAscIcon,
    ArrowLeftIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    ArrowRightIcon,
    SlidersHorizontal,
} from 'lucide-react'
import { Column, ColumnDef, getPaginationRowModel, Table as ITable } from '@tanstack/react-table'
import { cn } from './utils'
import { Button } from './button'
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from './dropdown-menu'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select'
import { flexRender, getCoreRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './table'
import { Skeleton } from './skeleton'

interface DataTableColumnHeaderProps<TData, TValue> extends React.HTMLAttributes<HTMLDivElement> {
    column: Column<TData, TValue>
    title: string
}

export function DataTableColumnHeader<TData, TValue>({
    column,
    title,
    className,
}: DataTableColumnHeaderProps<TData, TValue>) {
    if (!column.getCanSort()) {
        return <div className={cn(className)}>{title}</div>
    }

    return (
        <div className={cn('flex items-center space-x-2', className)}>
            <Button
                variant="ghost"
                size="sm"
                className={cn('-ml-3 h-8', column.getIsSorted() && 'text-accent-foreground')}
                onClick={() => {
                    if (!column.getIsSorted()) {
                        column.toggleSorting(false)
                    } else if (column.getIsSorted() === 'asc') {
                        column.toggleSorting(true)
                    } else {
                        column.clearSorting()
                    }
                }}
            >
                <span>{title}</span>
                {column.getIsSorted() === 'desc' ? (
                    <ArrowDownIcon className="ml-2 h-4 w-4" />
                ) : column.getIsSorted() === 'asc' ? (
                    <ArrowUpIcon className="ml-2 h-4 w-4" />
                ) : (
                    <SortAscIcon className="ml-2 h-4 w-4" />
                )}
            </Button>
        </div>
    )
}

interface DataTablePaginationProps<TData> {
    table: ITable<TData>
}

export function DataTablePagination<TData>({ table }: DataTablePaginationProps<TData>) {
    return table.getPageCount() === 0 ? null : (
        <div className="flex py-4 px-6 border-t">
            <div className="flex items-center space-x-2">
                <p className="text-sm font-medium">Rows per page</p>
                <Select
                    value={`${table.getState().pagination.pageSize}`}
                    onValueChange={(value) => {
                        table.setPageSize(Number(value))
                    }}
                >
                    <SelectTrigger className="h-8 w-[70px]">
                        <SelectValue placeholder={table.getState().pagination.pageSize} />
                    </SelectTrigger>
                    <SelectContent side="top">
                        {[20, 50, 100].map((pageSize) => (
                            <SelectItem key={pageSize} value={`${pageSize}`}>
                                {pageSize}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <div className="flex w-[100px] items-center justify-center text-sm font-medium">
                Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
            </div>
            <div className="flex items-center space-x-2">
                <Button
                    variant="outline"
                    className="hidden h-8 w-8 p-0 lg:flex"
                    onClick={() => table.setPageIndex(0)}
                    disabled={!table.getCanPreviousPage()}
                >
                    <span className="sr-only">Go to first page</span>
                    <ArrowLeftIcon className="h-4 w-4" />
                </Button>
                <Button
                    variant="outline"
                    className="h-8 w-8 p-0"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    <span className="sr-only">Go to previous page</span>
                    <ChevronLeftIcon className="h-4 w-4" />
                </Button>
                <Button
                    variant="outline"
                    className="h-8 w-8 p-0"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    <span className="sr-only">Go to next page</span>
                    <ChevronRightIcon className="h-4 w-4" />
                </Button>
                <Button
                    variant="outline"
                    className="hidden h-8 w-8 p-0 lg:flex"
                    onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                    disabled={!table.getCanNextPage()}
                >
                    <span className="sr-only">Go to last page</span>
                    <ArrowRightIcon className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}

interface DataTableViewOptionsProps<TData> {
    table: ITable<TData>
}

export function DataTableViewOptions<TData>({ table }: DataTableViewOptionsProps<TData>) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="ml-auto hidden h-8 lg:flex">
                    <SlidersHorizontal className="mr-2 h-4 w-4" />
                    View
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[150px]">
                <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {table
                    .getAllColumns()
                    .filter((column) => typeof column.accessorFn !== 'undefined' && column.getCanHide())
                    .map((column) => {
                        return (
                            <DropdownMenuCheckboxItem
                                key={column.id}
                                className="capitalize"
                                checked={column.getIsVisible()}
                                onCheckedChange={(value) => column.toggleVisibility(!!value)}
                            >
                                {column.id}
                            </DropdownMenuCheckboxItem>
                        )
                    })}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export function DataTable<T>({
    data,
    columns,
    onRowClick,
}: {
    data: T[] | undefined
    columns: ColumnDef<T, any>[]
    onRowClick?(row: T): void
}) {
    const table = useReactTable({
        data: data ?? [],
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        initialState: {
            pagination: {
                pageSize: 20,
            },
        },
    })

    const isLoading = data === undefined

    return (
        <>
            <Table className="table-auto">
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead
                                        key={header.id}
                                        style={{
                                            minWidth: header.column.columnDef.minSize,
                                            width: header.column.columnDef.size,
                                        }}
                                        className="first:pl-6 last:pr-6"
                                    >
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(header.column.columnDef.header, header.getContext())}
                                    </TableHead>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && 'selected'}
                                onClick={() => onRowClick?.(row.original)}
                                className={onRowClick ? 'cursor-pointer' : ''}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell
                                        key={cell.id}
                                        style={{
                                            minWidth: cell.column.columnDef.minSize,
                                            width: cell.column.columnDef.size,
                                        }}
                                        className="first:pl-6 last:pr-6"
                                    >
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : !isLoading ? (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center text-muted-foreground">
                                No results found
                            </TableCell>
                        </TableRow>
                    ) : (
                        <>
                            {table.getHeaderGroups().map((headerGroup) =>
                                [1, 2, 3].map((index) => (
                                    <TableRow key={`${headerGroup.id}_${index}`}>
                                        {headerGroup.headers.map((header) => (
                                            <TableCell key={header.id} className="first:pl-6 last:pr-6">
                                                <Skeleton className="h-4 w-full" />
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            )}
                        </>
                    )}
                </TableBody>
            </Table>
            <DataTablePagination table={table} />
        </>
    )
}
