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
import { PokeathlonStatName } from './pokeathlon-stat-name';

/**
 * 
 * @export
 * @interface PokeAthlon
 */
export interface PokeAthlon {
    /**
     * 
     * @type {number}
     * @memberof PokeAthlon
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof PokeAthlon
     */
    'name': string;
    /**
     * 
     * @type {Array<PokeathlonStatName>}
     * @memberof PokeAthlon
     */
    'names': Array<PokeathlonStatName>;
}

