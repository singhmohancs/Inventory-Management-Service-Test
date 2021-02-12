import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTreeModule } from '@angular/material/tree';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule, MatIconModule, MatToolbarModule,
    MatCardModule, MatInputModule, MatDatepickerModule, MatSelectModule,
    MatButtonToggleModule, MatSlideToggleModule, MatCheckboxModule,
    MatExpansionModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatTabsModule,
    MatTreeModule,
    MatTableModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  exports: [
    CommonModule,
    MatSidenavModule,
    MatSidenavModule, MatIconModule, MatToolbarModule,
    MatCardModule, MatInputModule, MatDatepickerModule, MatSelectModule,
    MatButtonToggleModule, MatSlideToggleModule, MatCheckboxModule,
    MatExpansionModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatTabsModule,
    MatTreeModule,
    MatTableModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  declarations: []
})
export class CustomMaterialModule {
  static forRoot() {
    return {
      ngModule: CustomMaterialModule,
      providers: [
      ]
    };
  }
}
