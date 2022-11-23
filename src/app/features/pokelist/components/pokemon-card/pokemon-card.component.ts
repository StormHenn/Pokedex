import { Component, Input } from '@angular/core';
import { PokemonListingBasic } from 'src/app/shared/models';

import { PokelistService } from 'src/app/shared/services/pokelist.service';

@Component({
    selector: 'app-pokemon-card',
    templateUrl: './pokemon-card.component.html',
})
export class PokemonCardComponent {
    @Input() public pokemon!: PokemonListingBasic;

    constructor(
        private pokelistService: PokelistService,
    ) { }
}
