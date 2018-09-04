import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CatComponent } from './components/cat/cat.component';
import { DogComponent } from './components/dog/dog.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StarWarsCharComponent } from './components/star-wars-char/star-wars-char.component';
import { StarWarsCharDetailsComponent } from './components/star-wars-char/star-wars-char-details/star-wars-char-details.component';

const appRoutes = [
    {
        path: 'Home',
        component: HomeComponent,
    },
    {
        path: 'Dog',
        component: DogComponent,
    },
    {
        path: 'Cat',
        component: CatComponent,
    },
    {
        path: 'swChar',
        component: StarWarsCharComponent,
    },
    {
        path: 'swCharDetails/:charId',
        component: StarWarsCharDetailsComponent,
    },
    {
        path: '', 
        redirectTo: '/Home', 
        pathMatch: 'full' 
    },
    {
        path: '**', 
        component: PageNotFoundComponent,
    }
];


@NgModule({
    declarations: [
      
    ],
    imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes)
    ],
    exports: [ RouterModule ],
    providers: []
  })
  export class RoutingModule { }
  