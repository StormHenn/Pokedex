import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { MobileNavComponent } from './core/mobile-nav/mobile-nav.component';
import { PokelistComponent } from './features/pokelist/pokelist.component';
import { PokemonCardComponent } from './features/pokelist/components/pokemon-card/pokemon-card.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MobileNavComponent,
        PokelistComponent,
        PokemonCardComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
