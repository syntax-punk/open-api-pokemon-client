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
import { Description } from './description';

/**
 * Targets moves can be directed at during battle. Targets can be Pokémon, adjacent positions, all opponents, etc.
 * @export
 * @interface MoveTarget
 */
export interface MoveTarget {
    /**
     * The identifier for this move target resource
     * @type {number}
     * @memberof MoveTarget
     */
    'id': number;
    /**
     * The name for this move target resource
     * @type {string}
     * @memberof MoveTarget
     */
    'name': string;
    /**
     * The description of this move target listed in different languages
     * @type {Array<Description>}
     * @memberof MoveTarget
     */
    'descriptions': Array<Description>;
}

