import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule,
  MatMenuModule,
  MatTableModule,
  MatDividerModule,
  MatProgressSpinnerModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatOptionModule,
  MatCardModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
} from '@angular/material';

const MaterialComponents = [
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatTableModule,
  MatDividerModule,
  MatProgressSpinnerModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatOptionModule,
  MatCardModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule
]
@NgModule({

  imports: [
    MaterialComponents
  ],
  exports:[MaterialComponents]
})
export class MaterialModule { }
