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
import { Item } from './item';
// May contain unused imports in some cases
// @ts-ignore
import { VerboseEffect } from './verbose-effect';

/**
 * 
 * @export
 * @interface ItemFlingEffect
 */
export interface ItemFlingEffect {
    /**
     * 
     * @type {number}
     * @memberof ItemFlingEffect
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof ItemFlingEffect
     */
    'name'?: string;
    /**
     * 
     * @type {Array<VerboseEffect>}
     * @memberof ItemFlingEffect
     */
    'effect_entries'?: Array<VerboseEffect>;
    /**
     * 
     * @type {Array<Item>}
     * @memberof ItemFlingEffect
     */
    'items'?: Array<Item>;
}
