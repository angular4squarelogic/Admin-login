import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';

import {
  MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule,
  MatListModule, MatToolbarModule, MatCardModule, MatInputModule, MatSelectModule
} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule, MatButtonModule,MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatCardModule, MatInputModule,MatSelectModule,MatGridListModule,ReactiveFormsModule],
  exports: [CommonModule, MatButtonModule, MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatCardModule, MatInputModule, MatSelectModule,MatGridListModule,ReactiveFormsModule],
})
export class CustomMaterialModule { }
