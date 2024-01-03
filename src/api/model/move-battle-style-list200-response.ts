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
import { MoveBattleStyle } from './move-battle-style';

/**
 * 
 * @export
 * @interface MoveBattleStyleList200Response
 */
export interface MoveBattleStyleList200Response {
    /**
     * The total number of move battle styles.
     * @type {number}
     * @memberof MoveBattleStyleList200Response
     */
    'count'?: number;
    /**
     * URL to retrieve the next page of move battle styles.
     * @type {string}
     * @memberof MoveBattleStyleList200Response
     */
    'next'?: string | null;
    /**
     * URL to retrieve the previous page of move battle styles.
     * @type {string}
     * @memberof MoveBattleStyleList200Response
     */
    'previous'?: string | null;
    /**
     * 
     * @type {Array<MoveBattleStyle>}
     * @memberof MoveBattleStyleList200Response
     */
    'results'?: Array<MoveBattleStyle>;
}

