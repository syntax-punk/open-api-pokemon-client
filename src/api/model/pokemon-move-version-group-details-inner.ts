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
import { NamedAPIResource } from './named-apiresource';

/**
 * 
 * @export
 * @interface PokemonMoveVersionGroupDetailsInner
 */
export interface PokemonMoveVersionGroupDetailsInner {
    /**
     * The minimum level to learn the move
     * @type {number}
     * @memberof PokemonMoveVersionGroupDetailsInner
     */
    'level_learned_at': number;
    /**
     * 
     * @type {NamedAPIResource}
     * @memberof PokemonMoveVersionGroupDetailsInner
     */
    'move_learn_method': NamedAPIResource;
    /**
     * 
     * @type {NamedAPIResource}
     * @memberof PokemonMoveVersionGroupDetailsInner
     */
    'version_group': NamedAPIResource;
}

