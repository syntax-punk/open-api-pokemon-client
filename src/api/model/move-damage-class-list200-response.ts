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
import { MoveDamageClass } from './move-damage-class';

/**
 * 
 * @export
 * @interface MoveDamageClassList200Response
 */
export interface MoveDamageClassList200Response {
    /**
     * The total number of move damage classes.
     * @type {number}
     * @memberof MoveDamageClassList200Response
     */
    'count'?: number;
    /**
     * URL to retrieve the next page of move damage classes.
     * @type {string}
     * @memberof MoveDamageClassList200Response
     */
    'next'?: string | null;
    /**
     * URL to retrieve the previous page of move damage classes.
     * @type {string}
     * @memberof MoveDamageClassList200Response
     */
    'previous'?: string | null;
    /**
     * 
     * @type {Array<MoveDamageClass>}
     * @memberof MoveDamageClassList200Response
     */
    'results'?: Array<MoveDamageClass>;
}

