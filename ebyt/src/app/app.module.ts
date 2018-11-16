import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
//import { CreationConcertComponent } from './creation-concert/creation-concert.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ConcertReactiveFormComponent } from './concert-reactive-form/concert-reactive-form.component';
import { RouterModule, Routes, Router} from '@angular/router';

const route: Routes = 
[
  {path: 'addConcert', component: ConcertReactiveFormComponent},
  {path: 'updateConcert/:id', component: ConcertReactiveFormComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    //CreationConcertComponent,
    ConnexionComponent,
    ConcertReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    InputTextModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
