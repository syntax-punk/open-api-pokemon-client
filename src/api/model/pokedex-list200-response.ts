/* tslint:disable */
/* eslint-disable */
/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 20220523
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { Pokedex } from './pokedex';

/**
 * 
 * @export
 * @interface PokedexList200Response
 */
export interface PokedexList200Response {
    /**
     * The total number of pokedexes.
     * @type {number}
     * @memberof PokedexList200Response
     */
    'count'?: number;
    /**
     * URL to retrieve the next page of pokedexes.
     * @type {string}
     * @memberof PokedexList200Response
     */
    'next'?: string | null;
    /**
     * URL to retrieve the previous page of pokedexes.
     * @type {string}
     * @memberof PokedexList200Response
     */
    'previous'?: string | null;
    /**
     * 
     * @type {Array<Pokedex>}
     * @memberof PokedexList200Response
     */
    'results'?: Array<Pokedex>;
}

