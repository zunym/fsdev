import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DogComponent } from './components/dog/dog.component';
import { CatComponent } from './components/cat/cat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './material.module';
import { RoutingModule } from './app.routing';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StarWarsCharComponent } from './components/star-wars-char/star-wars-char.component';
import { StarWarsCharDetailsComponent } from './components/star-wars-char/star-wars-char-details/star-wars-char-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DogComponent,
    CatComponent,
    HomeComponent,
    PageNotFoundComponent,
    StarWarsCharComponent,
    StarWarsCharDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
