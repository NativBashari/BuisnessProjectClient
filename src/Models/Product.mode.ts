import { Material } from "./Material.model";

export interface Product{
    id: number;
    name: string;
    materials: Material[];
    delieveryTime: number;
    priority: number;
    image: string;
    isDone: boolean;
}