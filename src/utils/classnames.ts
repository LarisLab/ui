import { type ClassNameValue, twMerge } from 'tailwind-merge'

export function classNames(...inputs: ClassNameValue[]) {
    return twMerge(inputs)
}
