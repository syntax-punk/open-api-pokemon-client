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
 * @interface Version
 */
export interface Version {
    /**
     * 
     * @type {number}
     * @memberof Version
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof Version
     */
    'name': string;
    /**
     * 
     * @type {Array<Name>}
     * @memberof Version
     */
    'names': Array<Name>;
    /**
     * 
     * @type {NamedAPIResource}
     * @memberof Version
     */
    'version_group': NamedAPIResource;
}

