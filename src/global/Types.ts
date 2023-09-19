export type ArrElement<ArrType> = ArrType extends readonly (infer ElementType)[]
  ? ElementType
  : never;

export type ProjectType = {
    title: string,
    description: string,
    projectUrl: string,
}