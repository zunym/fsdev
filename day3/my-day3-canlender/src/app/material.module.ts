import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

const MODULES = [
    MatToolbarModule,MatButtonModule,
    MatFormFieldModule,MatInputModule,
    MatRadioModule,MatCardModule,
    MatIconModule,MatListModule
]

@NgModule({
imports: MODULES,
exports: MODULES
})
//give Name MaterialModule to import in app.modules.ts
export class MaterialModule{}