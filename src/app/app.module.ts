import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoreComponent } from './core/core.component';
import { AngularComponent } from './angular/angular.component';
import { WizardComponent } from './angular/wizard/wizard.component';
import { ModalComponent } from './angular/modal/modal.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'core', component: CoreComponent },
  { path: 'angular', component: AngularComponent, children: [
    { path: 'modal', component: ModalComponent },
    { path: 'wizard', component: WizardComponent },
  ] },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    CoreComponent,
    AngularComponent,
    ModalComponent,
    WizardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ClarityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
