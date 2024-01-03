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
import { ItemFlingEffect } from './item-fling-effect';

/**
 * 
 * @export
 * @interface ItemFlingEffectList200Response
 */
export interface ItemFlingEffectList200Response {
    /**
     * The total number of item fling effects.
     * @type {number}
     * @memberof ItemFlingEffectList200Response
     */
    'count'?: number;
    /**
     * URL to retrieve the next page of item fling effects.
     * @type {string}
     * @memberof ItemFlingEffectList200Response
     */
    'next'?: string | null;
    /**
     * URL to retrieve the previous page of item fling effects.
     * @type {string}
     * @memberof ItemFlingEffectList200Response
     */
    'previous'?: string | null;
    /**
     * 
     * @type {Array<ItemFlingEffect>}
     * @memberof ItemFlingEffectList200Response
     */
    'results'?: Array<ItemFlingEffect>;
}

