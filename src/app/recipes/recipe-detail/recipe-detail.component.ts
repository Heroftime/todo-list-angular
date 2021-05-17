import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  fRecipe: Recipe;
  doesRecipeExist: boolean
  id: number;

  constructor(private slService: ShoppingListService,
              private recipeService: RecipeService, 
              private route: Router, 
              private activatedRoute: ActivatedRoute,
              private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.fRecipe = this.recipeService.getRecipe(this.id);
        }
    );


  }

  addIngredientsToShoppingList() {
    this.slService.addMultipleIngredients(this.fRecipe.ingredients);
    this.route.navigate(['/shopping-list']);
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.id);
    this.dataStorageService.storeRecipes();
    this.route.navigate(['../'], { relativeTo: this.activatedRoute });
  }

}
