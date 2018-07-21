import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';

import { ProjectDialogComponent } from '../../components/project-dialog/project-dialog.component';


const iemports = [
  BrowserAnimationsModule,
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
  MatSelectModule,
  MatDatepickerModule,
  MatIconModule,
  MatDialogModule,
  MatSnackBarModule,
  MatTableModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatSortModule,
  MatCardModule,
  MatInputModule
];

@NgModule({
  imports: [
    CommonModule,
    iemports
  ],
  exports: [
    iemports
  ],
  entryComponents: [ProjectDialogComponent],
  declarations: []
})
export class MaterialModule { }
