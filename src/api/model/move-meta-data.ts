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
import { NamedAPIResource } from './named-apiresource';

/**
 * 
 * @export
 * @interface MoveMetaData
 */
export interface MoveMetaData {
    /**
     * 
     * @type {NamedAPIResource}
     * @memberof MoveMetaData
     */
    'ailment': NamedAPIResource;
    /**
     * 
     * @type {NamedAPIResource}
     * @memberof MoveMetaData
     */
    'category': NamedAPIResource;
    /**
     * The minimum number of times this move hits. Null if it always only hits once.
     * @type {number}
     * @memberof MoveMetaData
     */
    'min_hits'?: number | null;
    /**
     * The maximum number of times this move hits. Null if it always only hits once.
     * @type {number}
     * @memberof MoveMetaData
     */
    'max_hits'?: number | null;
    /**
     * The minimum number of turns this move continues to take effect. Null if it always only lasts one turn.
     * @type {number}
     * @memberof MoveMetaData
     */
    'min_turns'?: number | null;
    /**
     * The maximum number of turns this move continues to take effect. Null if it always only lasts one turn.
     * @type {number}
     * @memberof MoveMetaData
     */
    'max_turns'?: number | null;
    /**
     * The amount of hp gained by the attacking Pokemon when it uses this move.
     * @type {number}
     * @memberof MoveMetaData
     */
    'drain'?: number | null;
    /**
     * The amount of hp gained by the target Pokemon when it receives this move.
     * @type {number}
     * @memberof MoveMetaData
     */
    'healing'?: number | null;
    /**
     * Critical hit rate bonus.
     * @type {number}
     * @memberof MoveMetaData
     */
    'crit_rate'?: number | null;
    /**
     * The chance of the target being inflicted with the status condition ailment.
     * @type {number}
     * @memberof MoveMetaData
     */
    'ailment_chance'?: number | null;
    /**
     * The chance of the target flinching when hit by this move.
     * @type {number}
     * @memberof MoveMetaData
     */
    'flinch_chance'?: number | null;
    /**
     * The chance of the attacking Pokemon lowering the target\'s stat.
     * @type {number}
     * @memberof MoveMetaData
     */
    'stat_chance'?: number | null;
}

