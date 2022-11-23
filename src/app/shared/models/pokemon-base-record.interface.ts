import { BaseResponse } from "./base-response.interface";
import { PokemonListingBasic } from "./pokemon-listing-basic.interface";

export interface PokemonBaseRecord extends BaseResponse<PokemonListingBasic> { }
