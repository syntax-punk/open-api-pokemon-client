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
import { Name } from './name';
// May contain unused imports in some cases
// @ts-ignore
import { NamedAPIResource } from './named-apiresource';

/**
 * 
 * @export
 * @interface EncounterCondition
 */
export interface EncounterCondition {
    /**
     * The identifier for this encounter condition resource
     * @type {number}
     * @memberof EncounterCondition
     */
    'id': number;
    /**
     * The name for this encounter condition resource
     * @type {string}
     * @memberof EncounterCondition
     */
    'name': string;
    /**
     * A list of values that are used with this encounter condition
     * @type {Array<NamedAPIResource>}
     * @memberof EncounterCondition
     */
    'values': Array<NamedAPIResource>;
    /**
     * The name of this encounter condition listed in different languages
     * @type {Array<Name>}
     * @memberof EncounterCondition
     */
    'names': Array<Name>;
}

