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
import { Ability } from './ability';

/**
 * 
 * @export
 * @interface PokemonAbility
 */
export interface PokemonAbility {
    /**
     * 
     * @type {boolean}
     * @memberof PokemonAbility
     */
    'is_hidden'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PokemonAbility
     */
    'slot'?: number;
    /**
     * 
     * @type {Ability}
     * @memberof PokemonAbility
     */
    'ability'?: Ability;
}

