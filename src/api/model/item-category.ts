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
 * @interface ItemCategory
 */
export interface ItemCategory {
    /**
     * The identifier for this item category resource
     * @type {number}
     * @memberof ItemCategory
     */
    'id'?: number;
    /**
     * The name for this item category resource
     * @type {string}
     * @memberof ItemCategory
     */
    'name'?: string;
    /**
     * A list of items that are a part of this category
     * @type {Array<NamedAPIResource>}
     * @memberof ItemCategory
     */
    'items'?: Array<NamedAPIResource>;
}

