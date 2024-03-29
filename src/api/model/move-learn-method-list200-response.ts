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
import { MoveLearnMethod } from './move-learn-method';

/**
 * 
 * @export
 * @interface MoveLearnMethodList200Response
 */
export interface MoveLearnMethodList200Response {
    /**
     * The total number of move learn methods.
     * @type {number}
     * @memberof MoveLearnMethodList200Response
     */
    'count'?: number;
    /**
     * URL to retrieve the next page of move learn methods.
     * @type {string}
     * @memberof MoveLearnMethodList200Response
     */
    'next'?: string | null;
    /**
     * URL to retrieve the previous page of move learn methods.
     * @type {string}
     * @memberof MoveLearnMethodList200Response
     */
    'previous'?: string | null;
    /**
     * 
     * @type {Array<MoveLearnMethod>}
     * @memberof MoveLearnMethodList200Response
     */
    'results'?: Array<MoveLearnMethod>;
}

