export interface SheetParamsMap {
  options: undefined
}

export type TSheetName = keyof SheetParamsMap

export type Sheet<T extends TSheetName = TSheetName> = {
  name: T
  params?: SheetParamsMap[T] extends undefined ? never : SheetParamsMap[T]
}
