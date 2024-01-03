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
import { ItemPocket } from './item-pocket';

/**
 * 
 * @export
 * @interface ItemPocketList200Response
 */
export interface ItemPocketList200Response {
    /**
     * The total number of item pockets.
     * @type {number}
     * @memberof ItemPocketList200Response
     */
    'count'?: number;
    /**
     * URL to retrieve the next page of item pockets.
     * @type {string}
     * @memberof ItemPocketList200Response
     */
    'next'?: string | null;
    /**
     * URL to retrieve the previous page of item pockets.
     * @type {string}
     * @memberof ItemPocketList200Response
     */
    'previous'?: string | null;
    /**
     * 
     * @type {Array<ItemPocket>}
     * @memberof ItemPocketList200Response
     */
    'results'?: Array<ItemPocket>;
}

