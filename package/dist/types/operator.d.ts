interface DefaultParams {
    _id?: string;
    userName?: string;
    displayName?: string;
    photo?: string;
}
export type OperatorQueryableParams = Omit<DefaultParams, "userName" | "photo">;
export type OperatorCreatableParams = Omit<DefaultParams, "_id">;
export type OperatorEditableParams = Omit<DefaultParams, "userName" | "_id">;
export interface Operator {
    _id: string;
    displayName: string;
    photo: string;
}
export {};
