import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateComponent } from './components/date.component';
import { MaterialModule } from './material.module';
import { TaskEntryComponent } from './components/task-entry.component' //from new modules file that manually created
@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    TaskEntryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
