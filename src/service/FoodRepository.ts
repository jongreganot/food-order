import { Food } from "../model/Food.ts";

const baseUrl = "https://jongreganot-images.s3.ap-northeast-1.amazonaws.com/food-order/";
export const foods: Food[] = [
    new Food("Hamburger", "Comes with free Coke", `${baseUrl}hamburger.jpg`, 75.00),
    new Food("Fried Rice", "Comes with free Coke", `${baseUrl}fried-rice.jpg`, 50.00),
    new Food("Lechon", "Comes with free Coke", `${baseUrl}lechon-belly.jpg`, 350.00),
    
    new Food("Boeuf Bourguignon", "the French beef stew made with red wine, mushrooms, pearl onions, and bacon, is arguably the world's greatest beef stew.", `${baseUrl}boeuf-bourguignon.jpg`, 325.00),
    new Food("Carbonara", "Spaghetti Carbonara is named for the coal miner. And yet, there is nothing smoky about the original version—guanciale and pancetta are both unsmoked cuts of pork.", `${baseUrl}carbonara.jpg`, 270.00),
    new Food("Chicken Omurice", "A simple, satisfying dish of fried rice with diced chicken, seasoned with an unlikely ingredient—ketchup—and topped with a fluffy omelette.", `${baseUrl}chicken-omurice.jpg`, 150.00),
    
    new Food("Buttermilk-Brined Southern Fried Chicken", "An intensely flavored brine keeps the chicken moist underneath all that crispness and golden brown.", `${baseUrl}fried-chicken.jpg`, 320.00),
    new Food("Steakhouse-Style Grilled Marinated Flank Steak", "It's hard to think of a cut of meat that is more conducive to cooking for a crowd than flank steak.", `${baseUrl}grilled-steak.jpg`, 450.00),
    new Food("Humba", "Humba is a Filipino dish similar to adobo, and popular in central part of the Philippines, particularly among the Visayan speaking people.", `${baseUrl}humba.jpg`, 250.00),
    
    new Food("Osso Buco", "A Milanese dish of braised veal shanks in a hearty wine- and vegetable-based sauce.", `${baseUrl}osso-buco.jpg`, 325.00),
    new Food("Phat Bai Horapha", "Slice beef and Thai purple basil combine for a very quick but super-flavorful stir-fry.", `${baseUrl}phat-bai-horapha.jpg`, 250.00),
    new Food("Pork Fillet", "Comes with free Coke", `${baseUrl}pork-fillet.jpg`, 350.00),
    
    new Food("Seared Rare Niçoise Tuna Lettuce", "This isn't your typical Salade Niçoise! This is a chunky mix of herbes de Provence-seared rare tuna steak and marinated white anchovies, tossed with crisp haricots verts, juicy baby tomatoes, hearty potatoes, briny black olives and capers, sweet basil, and a lemon-", `${baseUrl}seared-rare-nicoise-tuna-lettuce.jpg`, 175.00),
    new Food("Sous Vide Pork Chop", "With sous vide cooking, because you are cooking at the exact temperature at which you are planning on serving your meat, timing is much more forgiving.", `${baseUrl}sous-vide-pork-chop.jpg`, 250.00),
    new Food("Lemon Roast Chicken", "Roast chickens are a simple and satisfying meal anytime, and the smell of it roasting on a Sunday evening can set a positive tone for the whole week ahead.", `${baseUrl}lemon-roast-chicken.jpg`, 350.00),
]