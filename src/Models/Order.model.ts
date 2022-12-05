import { Product } from "./Product.mode";

export interface Order{
    id: number;
    products : Product[];
    estimatedTime: Date;
    isFailed:boolean;
    isDelievery: boolean;
    delieveryFailed: boolean;
}