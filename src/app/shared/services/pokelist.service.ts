import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { PokemonBaseRecord } from '../models';

@Injectable({
    providedIn: 'root'
})
export class PokelistService {
    private api_url: string = environment.api_url;
    private cors_url: string = environment.cors_url;

    constructor(
        private http: HttpClient
    ) { }

    public getPokemonListing(options?: HttpParams): Observable<PokemonBaseRecord> {
        const params: HttpParams = options ? options : new HttpParams({});

        return this.http.get<PokemonBaseRecord>(
            `${this.cors_url}${this.api_url}pokemon/`,
            { params }
        );
    }
}
