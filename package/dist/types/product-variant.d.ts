import { Product } from "./product";
interface DefaultParams {
    _id?: string;
    name?: string;
    productId?: string;
}
export type ProductVariantQueryableParams = DefaultParams;
export type ProductVariantCreatableParams = Omit<DefaultParams, "_id">;
export type ProductVariantEditableParams = Pick<DefaultParams, "name">;
export interface ProductVariant {
    _id: string;
    name: string;
    product: Omit<Product, "variants">;
}
export {};
