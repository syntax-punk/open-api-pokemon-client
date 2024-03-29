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
 * 
 * @export
 * @interface GrowthRate
 */
export interface GrowthRate {
    /**
     * The identifier for this growth rate resource
     * @type {number}
     * @memberof GrowthRate
     */
    'id'?: number;
    /**
     * The name for this growth rate resource
     * @type {string}
     * @memberof GrowthRate
     */
    'name'?: string;
    /**
     * The formula used to calculate the rate at which the Pokémon species gains level
     * @type {string}
     * @memberof GrowthRate
     */
    'formula'?: string;
    /**
     * The description of this growth rate listed in different languages
     * @type {Array<Description>}
     * @memberof GrowthRate
     */
    'descriptions'?: Array<Description>;
}

