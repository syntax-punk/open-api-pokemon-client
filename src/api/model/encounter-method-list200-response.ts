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
import { EncounterMethod } from './encounter-method';

/**
 * 
 * @export
 * @interface EncounterMethodList200Response
 */
export interface EncounterMethodList200Response {
    /**
     * The total number of encounter methods.
     * @type {number}
     * @memberof EncounterMethodList200Response
     */
    'count'?: number;
    /**
     * URL to retrieve the next page of encounter methods.
     * @type {string}
     * @memberof EncounterMethodList200Response
     */
    'next'?: string | null;
    /**
     * URL to retrieve the previous page of encounter methods.
     * @type {string}
     * @memberof EncounterMethodList200Response
     */
    'previous'?: string | null;
    /**
     * 
     * @type {Array<EncounterMethod>}
     * @memberof EncounterMethodList200Response
     */
    'results'?: Array<EncounterMethod>;
}
