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
import { Move } from './move';

/**
 * 
 * @export
 * @interface ContestComboDetail
 */
export interface ContestComboDetail {
    /**
     * A list of moves to use before this move.
     * @type {Array<Move>}
     * @memberof ContestComboDetail
     */
    'use_before'?: Array<Move>;
    /**
     * A list of moves to use after this move.
     * @type {Array<Move>}
     * @memberof ContestComboDetail
     */
    'use_after'?: Array<Move>;
}

