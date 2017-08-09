import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router'
import {HttpModule} from '@angular/http';
import { OrderBy } from './orderby-pipe';
import { FormsModule } from '@angular/forms';




import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { getDataService } from './get-data.service';
import { CityDetailComponent } from './city-detail/city-detail.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'city-details', component: CityDetailComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    OrderBy,
    CityDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabled'}),
  ],
  providers: [getDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
