import { Operator } from "./operator";
import { Product } from "./product";
import { ProductVariant } from "./product-variant";
interface DefaultParams {
    _id?: string;
    eventId?: string;
    status?: string;
    operatorId?: string;
    clientName?: string;
    itemId?: string;
    variantId?: string;
}
export type EventOrderQueryableParams = DefaultParams;
export type EventOrderCreatableParams = Omit<DefaultParams, "_id">;
export type EventOrderEditableParams = Pick<DefaultParams, "status">;
export declare enum OrderStatus {
    COOKING = "ORDER_STATUS_COOKING",
    READY = "ORDER_STATUS_READY",
    PICKED_UP = "ORDER_STATUS_PICKED_UP"
}
export interface EventOrder {
    _id: string;
    event: Omit<Event, "orders">;
    status: OrderStatus;
    operator: Operator;
    client: string;
    item: Omit<Product, "variants">;
    variant?: Omit<ProductVariant, "product">;
}
export {};
