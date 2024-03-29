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
import { EvolutionChainChainEvolutionDetailsInnerItem } from './evolution-chain-chain-evolution-details-inner-item';
// May contain unused imports in some cases
// @ts-ignore
import { EvolutionChainChainEvolutionDetailsInnerKnownMove } from './evolution-chain-chain-evolution-details-inner-known-move';
// May contain unused imports in some cases
// @ts-ignore
import { EvolutionChainChainEvolutionDetailsInnerKnownMoveType } from './evolution-chain-chain-evolution-details-inner-known-move-type';
// May contain unused imports in some cases
// @ts-ignore
import { EvolutionChainChainEvolutionDetailsInnerLocation } from './evolution-chain-chain-evolution-details-inner-location';
// May contain unused imports in some cases
// @ts-ignore
import { EvolutionChainChainEvolutionDetailsInnerPartySpecies } from './evolution-chain-chain-evolution-details-inner-party-species';
// May contain unused imports in some cases
// @ts-ignore
import { EvolutionTrigger } from './evolution-trigger';

/**
 * 
 * @export
 * @interface EvolutionChainChainEvolutionDetailsInner
 */
export interface EvolutionChainChainEvolutionDetailsInner {
    /**
     * 
     * @type {EvolutionChainChainEvolutionDetailsInnerItem}
     * @memberof EvolutionChainChainEvolutionDetailsInner
     */
    'item'?: EvolutionChainChainEvolutionDetailsInnerItem;
    /**
     * 
     * @type {EvolutionTrigger}
     * @memberof EvolutionChainChainEvolutionDetailsInner
     */
    'trigger'?: EvolutionTrigger;
    /**
     * The required female gender of the evolving Pokémon species. Must be either 1 or 2, or null if the Pokémon species has no gender or the gender is fixed.
     * @type {number}
     * @memberof EvolutionChainChainEvolutionDetailsInner
     */
    'gender'?: number | null;
    /**
     * 
     * @type {EvolutionChainChainEvolutionDetailsInnerItem}
     * @memberof EvolutionChainChainEvolutionDetailsInner
     */
    'held_item'?: EvolutionChainChainEvolutionDetailsInnerItem;
    /**
     * 
     * @type {EvolutionChainChainEvolutionDetailsInnerKnownMove}
     * @memberof EvolutionChainChainEvolutionDetailsInner
     */
    'known_move'?: EvolutionChainChainEvolutionDetailsInnerKnownMove;
    /**
     * 
     * @type {EvolutionChainChainEvolutionDetailsInnerKnownMoveType}
     * @memberof EvolutionChainChainEvolutionDetailsInner
     */
    'known_move_type'?: EvolutionChainChainEvolutionDetailsInnerKnownMoveType;
    /**
     * 
     * @type {EvolutionChainChainEvolutionDetailsInnerLocation}
     * @memberof EvolutionChainChainEvolutionDetailsInner
     */
    'location'?: EvolutionChainChainEvolutionDetailsInnerLocation;
    /**
     * The minimum required level of the evolving Pokémon species
     * @type {number}
     * @memberof EvolutionChainChainEvolutionDetailsInner
     */
    'min_level'?: number | null;
    /**
     * The minimum required happiness of the evolving Pokémon species
     * @type {number}
     * @memberof EvolutionChainChainEvolutionDetailsInner
     */
    'min_happiness'?: number | null;
    /**
     * The minimum required beauty of the evolving Pokémon species
     * @type {number}
     * @memberof EvolutionChainChainEvolutionDetailsInner
     */
    'min_beauty'?: number | null;
    /**
     * The minimum required affection of the evolving Pokémon species
     * @type {number}
     * @memberof EvolutionChainChainEvolutionDetailsInner
     */
    'min_affection'?: number | null;
    /**
     * Whether or not it must be raining in the overworld to evolve into this Pokémon species
     * @type {boolean}
     * @memberof EvolutionChainChainEvolutionDetailsInner
     */
    'needs_overworld_rain'?: boolean;
    /**
     * 
     * @type {EvolutionChainChainEvolutionDetailsInnerPartySpecies}
     * @memberof EvolutionChainChainEvolutionDetailsInner
     */
    'party_species'?: EvolutionChainChainEvolutionDetailsInnerPartySpecies;
    /**
     * 
     * @type {EvolutionChainChainEvolutionDetailsInnerKnownMoveType}
     * @memberof EvolutionChainChainEvolutionDetailsInner
     */
    'party_type'?: EvolutionChainChainEvolutionDetailsInnerKnownMoveType;
    /**
     * The required relation between the Pokémon\'s Attack and Defense stats. 1 means Attack > Defense, 0 means Attack = Defense, and -1 means Attack < Defense.
     * @type {number}
     * @memberof EvolutionChainChainEvolutionDetailsInner
     */
    'relative_physical_stats'?: number | null;
    /**
     * The required time of day. Day or night.
     * @type {string}
     * @memberof EvolutionChainChainEvolutionDetailsInner
     */
    'time_of_day'?: EvolutionChainChainEvolutionDetailsInnerTimeOfDayEnum;
    /**
     * 
     * @type {EvolutionChainChainEvolutionDetailsInnerPartySpecies}
     * @memberof EvolutionChainChainEvolutionDetailsInner
     */
    'trade_species'?: EvolutionChainChainEvolutionDetailsInnerPartySpecies;
    /**
     * Whether or not the 3DS needs to be turned upside-down as this Pokémon levels up.
     * @type {boolean}
     * @memberof EvolutionChainChainEvolutionDetailsInner
     */
    'turn_upside_down'?: boolean;
}

export const EvolutionChainChainEvolutionDetailsInnerTimeOfDayEnum = {
    day: 'day',
    night: 'night'
} as const;

export type EvolutionChainChainEvolutionDetailsInnerTimeOfDayEnum = typeof EvolutionChainChainEvolutionDetailsInnerTimeOfDayEnum[keyof typeof EvolutionChainChainEvolutionDetailsInnerTimeOfDayEnum];


