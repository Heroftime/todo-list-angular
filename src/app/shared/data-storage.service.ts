import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map, tap, exhaustMap, take } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {
    firebaseUrlForRecipes = 'https://test-project-6de4b.firebaseio.com/recipes.json';
    //firebaseUrlForRecipes = 'http://localhost/tester/items/read.php';


    constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) {}

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http
            .put(this.firebaseUrlForRecipes, recipes)
            .subscribe(response => {
                console.log(response);
            });
    }

    fetchRecipes() {
        return this.http
                .get<Recipe[]>(this.firebaseUrlForRecipes)
                .pipe(
                    map(recipes => {

                        return recipes.map(recipe => {
                            return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
                        })
                    }),
                    tap(recipes => {
                        this.recipeService.setRecipes(recipes);
                    })
                );
    }
}
