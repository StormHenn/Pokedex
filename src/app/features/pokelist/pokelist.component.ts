import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { PokemonListingBasic } from 'src/app/shared/models';

import { PokelistService } from 'src/app/shared/services/pokelist.service';

@Component({
    selector: 'app-pokelist',
    templateUrl: './pokelist.component.html',
})
export class PokelistComponent implements OnInit, OnDestroy {
    public loading: boolean = true;
    public pokemons?: PokemonListingBasic[];

    private pokemon_sub?: Subscription;

    constructor(
        private pokelistService: PokelistService
    ) { }

    public ngOnInit(): void {
        this.loading = true;

        this.pokemon_sub = this.pokelistService.getPokemonListing().subscribe({
            next: (response) => {
                this.pokemons = response.results;
                this.loading = false;
            },
            error: () => {
                this.loading = false;
                alert('Shit done fucked up!')
            },
        })
    }

    public ngOnDestroy(): void {
        this.pokemon_sub?.unsubscribe();
    }

}
