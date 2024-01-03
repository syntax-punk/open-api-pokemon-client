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
import { EncounterMethodRate } from './encounter-method-rate';
// May contain unused imports in some cases
// @ts-ignore
import { Location } from './location';
// May contain unused imports in some cases
// @ts-ignore
import { Name } from './name';
// May contain unused imports in some cases
// @ts-ignore
import { PokemonEncounter } from './pokemon-encounter';

/**
 * 
 * @export
 * @interface LocationArea
 */
export interface LocationArea {
    /**
     * 
     * @type {number}
     * @memberof LocationArea
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof LocationArea
     */
    'name'?: string;
    /**
     * 
     * @type {number}
     * @memberof LocationArea
     */
    'game_index'?: number;
    /**
     * 
     * @type {Array<EncounterMethodRate>}
     * @memberof LocationArea
     */
    'encounter_method_rates'?: Array<EncounterMethodRate>;
    /**
     * 
     * @type {Location}
     * @memberof LocationArea
     */
    'location'?: Location;
    /**
     * 
     * @type {Array<Name>}
     * @memberof LocationArea
     */
    'names'?: Array<Name>;
    /**
     * 
     * @type {Array<PokemonEncounter>}
     * @memberof LocationArea
     */
    'pokemon_encounters'?: Array<PokemonEncounter>;
}
