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
import { ContestType } from './contest-type';

/**
 * 
 * @export
 * @interface ContestTypeList200Response
 */
export interface ContestTypeList200Response {
    /**
     * The total number of contest types returned
     * @type {number}
     * @memberof ContestTypeList200Response
     */
    'count'?: number;
    /**
     * URL to the next page of contest types, if any
     * @type {string}
     * @memberof ContestTypeList200Response
     */
    'next'?: string | null;
    /**
     * URL to the previous page of contest types, if any
     * @type {string}
     * @memberof ContestTypeList200Response
     */
    'previous'?: string | null;
    /**
     * 
     * @type {Array<ContestType>}
     * @memberof ContestTypeList200Response
     */
    'results'?: Array<ContestType>;
}

