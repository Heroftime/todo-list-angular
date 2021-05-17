import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';


@NgModule({
    declarations: [
      ShoppingListComponent,
      ShoppingEditComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      ShoppingListRoutingModule,
      ReactiveFormsModule
     ],
   })

export class ShoppingListModule {}