/* tslint:disable */
/* eslint-disable */
/**
 * KG Pokemon API
 * Pokemon API for Konrad developer onboarding.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { TrainerPokedex } from './trainer-pokedex';

/**
 * Details about your character/account
 * @export
 * @interface Trainer
 */
export interface Trainer {
    /**
     * 
     * @type {string}
     * @memberof Trainer
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof Trainer
     */
    'firstName'?: string;
    /**
     * 
     * @type {string}
     * @memberof Trainer
     */
    'lastName'?: string;
    /**
     * 
     * @type {string}
     * @memberof Trainer
     */
    'created'?: string;
    /**
     * 
     * @type {string}
     * @memberof Trainer
     */
    'modified'?: string;
    /**
     * 
     * @type {string}
     * @memberof Trainer
     */
    'avatar'?: string;
    /**
     * 
     * @type {TrainerPokedex}
     * @memberof Trainer
     */
    'pokedex'?: TrainerPokedex;
    /**
     * 
     * @type {number}
     * @memberof Trainer
     */
    'pokemonOwned'?: number;
    /**
     * 
     * @type {number}
     * @memberof Trainer
     */
    'pokemonReleased'?: number;
}

