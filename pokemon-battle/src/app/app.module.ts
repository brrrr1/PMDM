import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponentComponent } from './components/pokemon-component/pokemon-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideHttpClient } from '@angular/common/http';
import { provideLottieOptions } from 'ngx-lottie';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';
import { PokemonBattleComponentComponent } from './pages/pokemon-battle-component/pokemon-battle-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonBattleComponentComponent,
    PokemonComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    LottieComponent
  ],
  providers: [provideHttpClient(),
    provideLottieOptions({
      player: () => import('lottie-web'),
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
