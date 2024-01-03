/* tslint:disable */
/* eslint-disable */
/**
 * KG Pokemon API
 * Pokemon API for Konrad developer onboarding.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { PokemonDetailsImages } from './pokemon-details-images';
// May contain unused imports in some cases
// @ts-ignore
import { PokemonTypes } from './pokemon-types';

/**
 * All the information about a single pokemon
 * @export
 * @interface PokemonDetails
 */
export interface PokemonDetails {
    /**
     * The Pokemon\'s starting moves
     * @type {Array<string>}
     * @memberof PokemonDetails
     */
    'abilities'?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof PokemonDetails
     */
    'weight'?: number;
    /**
     * 
     * @type {number}
     * @memberof PokemonDetails
     */
    'height'?: number;
    /**
     * 
     * @type {string}
     * @memberof PokemonDetails
     */
    'name'?: string;
    /**
     * The pokemon\'s number in the pokedex
     * @type {number}
     * @memberof PokemonDetails
     */
    'id'?: number;
    /**
     * All pokemon have one or more types
     * @type {Array<PokemonTypes>}
     * @memberof PokemonDetails
     */
    'types'?: Array<PokemonTypes>;
    /**
     * The id(s) of this pokemon\'s next evolution.
     * @type {Array<number>}
     * @memberof PokemonDetails
     */
    'evolutions'?: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof PokemonDetails
     */
    'description'?: string;
    /**
     * 
     * @type {PokemonDetailsImages}
     * @memberof PokemonDetails
     */
    'images'?: PokemonDetailsImages;
}
