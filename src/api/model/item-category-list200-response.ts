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
import { ItemCategory } from './item-category';

/**
 * 
 * @export
 * @interface ItemCategoryList200Response
 */
export interface ItemCategoryList200Response {
    /**
     * The total number of item categories.
     * @type {number}
     * @memberof ItemCategoryList200Response
     */
    'count'?: number;
    /**
     * URL to retrieve the next page of item categories.
     * @type {string}
     * @memberof ItemCategoryList200Response
     */
    'next'?: string | null;
    /**
     * URL to retrieve the previous page of item categories.
     * @type {string}
     * @memberof ItemCategoryList200Response
     */
    'previous'?: string | null;
    /**
     * 
     * @type {Array<ItemCategory>}
     * @memberof ItemCategoryList200Response
     */
    'results'?: Array<ItemCategory>;
}

