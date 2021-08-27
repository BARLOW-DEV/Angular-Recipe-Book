import { EventEmitter, Injectable } from '@angular/core'
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Cheese Burger',
     'This is a test description',
     'https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg',
     [
        new Ingredient('cheese', 5),
        new Ingredient('French Fries', 20)
     ]),
      new Recipe('Omlete',
      'This is a test description 2',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.88Apjv4H73ZFTYkH237_aAHaD4%26pid%3DApi&f=1',
     [
        new Ingredient('bacon', 8),
        new Ingredient('onion', 4)
     ])
  ];

  getRecipes() {
  return this.recipes.slice();
  }

}
