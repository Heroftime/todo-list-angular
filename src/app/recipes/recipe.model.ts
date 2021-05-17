import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public priorityLevel: string;
    public dateOfCompletion: string;
    public ingredients: Ingredient[];

    constructor(name: string, desc: string, imagePath: string, priorityLevel: string, dateOfCompletion: string, ingredients: Ingredient[]){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.priorityLevel = priorityLevel;
        this.ingredients = ingredients;
        this.dateOfCompletion = dateOfCompletion;
    }
}
