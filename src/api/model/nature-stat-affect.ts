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
import { Nature } from './nature';

/**
 * 
 * @export
 * @interface NatureStatAffect
 */
export interface NatureStatAffect {
    /**
     * 
     * @type {Array<Nature>}
     * @memberof NatureStatAffect
     */
    'increase'?: Array<Nature>;
    /**
     * 
     * @type {Array<Nature>}
     * @memberof NatureStatAffect
     */
    'decrease'?: Array<Nature>;
}
