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
import { Item } from './item';
// May contain unused imports in some cases
// @ts-ignore
import { PokemonHeldItemVersionDetailsInner } from './pokemon-held-item-version-details-inner';

/**
 * 
 * @export
 * @interface PokemonHeldItem
 */
export interface PokemonHeldItem {
    /**
     * 
     * @type {Item}
     * @memberof PokemonHeldItem
     */
    'item'?: Item;
    /**
     * 
     * @type {Array<PokemonHeldItemVersionDetailsInner>}
     * @memberof PokemonHeldItem
     */
    'version_details'?: Array<PokemonHeldItemVersionDetailsInner>;
}

