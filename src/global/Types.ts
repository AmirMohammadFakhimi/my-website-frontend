export type ArrElement<ArrType> = ArrType extends readonly (infer ElementType)[]
  ? ElementType
  : never;

export type MediaType = {
    title: string,
    description: string | null,
    url: string,
}