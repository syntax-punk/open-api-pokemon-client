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



/**
 * 
 * @export
 * @interface Characteristic
 */
export interface Characteristic {
    /**
     * The identifier for this characteristic resource
     * @type {number}
     * @memberof Characteristic
     */
    'id': number;
    /**
     * The remainder of the highest stat/IV divided by 5
     * @type {number}
     * @memberof Characteristic
     */
    'gene_modulo': number;
    /**
     * The possible values of the highest stat that would result in a Pokémon recieving this characteristic when divided by 5
     * @type {Array<number>}
     * @memberof Characteristic
     */
    'possible_values': Array<number>;
}

