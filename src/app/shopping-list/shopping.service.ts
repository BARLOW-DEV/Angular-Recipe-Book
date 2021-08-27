import { Injectable, EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model"

@Injectable({
  providedIn: 'root'
})

export class ShoppingService {
  ingredientToAdd = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  ingredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientToAdd.emit(this.ingredients.slice());
  }

  ingredientsToAdd(ingredients: Ingredient[]) {
    // ingredients.forEach((ingredient) => {       //this forEach loop method for adding ingredients
    //   this.ingredients.push(ingredient);        //to the array works, BUT the .push(...ingredients)
    // });                                         //works the same with less code.
    this.ingredients.push(...ingredients);
    this.ingredientToAdd.emit(this.ingredients.slice());
  }

  getIngredients() {
    return this.ingredients.slice();
  }
}
