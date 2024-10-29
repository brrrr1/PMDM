import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonBattleComponentComponent } from './pages/pokemon-battle-component/pokemon-battle-component.component';


const routes: Routes = [
  { path: 'battle', component: PokemonBattleComponentComponent },
  { path: '', redirectTo: '/battle', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}