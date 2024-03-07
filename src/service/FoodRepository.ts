import { Food } from "../model/Food.ts";

const baseUrl = "https://jongreganot-images.s3.ap-northeast-1.amazonaws.com/food-order/";
export const foods: Food[] = [
    new Food("Hamburger", "Comes with free Coke", `${baseUrl}hamburger.jpg`, 75.00),
    new Food("Rice", "Comes with free Coke", `${baseUrl}fried-rice.jpg`, 50.00),
    new Food("Lechon", "Comes with free Coke", `${baseUrl}lechon-belly.jpg`, 350.00),
]