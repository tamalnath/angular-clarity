import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    AngularComponent,
    CoreComponent,
    HomeComponent,
    ModalComponent,
    NotFoundComponent,
    WizardComponent,
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
