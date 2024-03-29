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
import { EvolutionChainChainEvolutionDetailsInner } from './evolution-chain-chain-evolution-details-inner';
// May contain unused imports in some cases
// @ts-ignore
import { PokemonSpecies } from './pokemon-species';

/**
 * 
 * @export
 * @interface EvolutionChainChain
 */
export interface EvolutionChainChain {
    /**
     * Whether or not this is a baby Pokémon
     * @type {boolean}
     * @memberof EvolutionChainChain
     */
    'is_baby'?: boolean;
    /**
     * 
     * @type {PokemonSpecies}
     * @memberof EvolutionChainChain
     */
    'species'?: PokemonSpecies;
    /**
     * The chain of Pokémon species that forms part of this evolution chain
     * @type {Array<EvolutionChainChainEvolutionDetailsInner>}
     * @memberof EvolutionChainChain
     */
    'evolution_details'?: Array<EvolutionChainChainEvolutionDetailsInner> | null;
}

