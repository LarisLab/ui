import { cva } from 'class-variance-authority'
import type * as CLSX from 'clsx'

export type ClassPropKey = 'class' | 'className'
export type ClassValue = CLSX.ClassValue
export type ClassProp =
    | {
          class: ClassValue
          className?: never
      }
    | {
          class?: never
          className: ClassValue
      }
    | {
          class?: never
          className?: never
      }
export type OmitUndefined<T> = T extends undefined ? never : T
export type StringToBoolean<T> = T extends 'true' | 'false' ? boolean : T

type ConfigSchema = Record<string, Record<string, ClassValue>>
type ConfigVariants<T extends ConfigSchema> = {
    [Variant in keyof T]?: StringToBoolean<keyof T[Variant]> | null | undefined
}
type ConfigVariantsMulti<T extends ConfigSchema> = {
    [Variant in keyof T]?: StringToBoolean<keyof T[Variant]> | StringToBoolean<keyof T[Variant]>[] | undefined
}
type Config<T> = T extends ConfigSchema
    ? {
          variants?: T
          defaultVariants?: ConfigVariants<T>
          compoundVariants?: (T extends ConfigSchema
              ? (ConfigVariants<T> | ConfigVariantsMulti<T>) & ClassProp
              : ClassProp)[]
      }
    : never
type Props<T> = T extends ConfigSchema ? ConfigVariants<T> & ClassProp : ClassProp

export function createVariants<T>(
    base?: ClassValue,
    config?: Config<T> | undefined,
): (props?: Props<T> | undefined) => string {
    return cva(base, config)
}
