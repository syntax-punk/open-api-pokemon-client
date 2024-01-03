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
import { ContestEffect } from './contest-effect';

/**
 * 
 * @export
 * @interface ContestEffectList200Response
 */
export interface ContestEffectList200Response {
    /**
     * The total number of contest effects
     * @type {number}
     * @memberof ContestEffectList200Response
     */
    'count'?: number;
    /**
     * The URL to get the next page of contest effects (if it exists)
     * @type {string}
     * @memberof ContestEffectList200Response
     */
    'next'?: string | null;
    /**
     * The URL to get the previous page of contest effects (if it exists)
     * @type {string}
     * @memberof ContestEffectList200Response
     */
    'previous'?: string | null;
    /**
     * 
     * @type {Array<ContestEffect>}
     * @memberof ContestEffectList200Response
     */
    'results'?: Array<ContestEffect>;
}

