import { FoodOrderCount } from "./FoodOrderCount";

export class FoodOrder {
   constructor(private id: number,
                private foodOrderCounts: FoodOrderCount[]) {
   }
}
