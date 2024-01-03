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
 * @interface VersionGameIndex
 */
export interface VersionGameIndex {
    /**
     * The internal id of the game used in generation VI and VII to identify different versions of the same Pokémon species. 
     * @type {number}
     * @memberof VersionGameIndex
     */
    'game_index'?: number;
    /**
     * 
     * @type {NamedAPIResource}
     * @memberof VersionGameIndex
     */
    'version'?: NamedAPIResource;
}

