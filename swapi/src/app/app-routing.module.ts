import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'vehicles', component: VehiculosComponent},
  {path: 'people', component: PeopleListComponent},
  {path: '', redirectTo: '/vehicles', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
