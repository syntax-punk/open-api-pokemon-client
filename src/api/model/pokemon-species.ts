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
import { Description } from './description';
// May contain unused imports in some cases
// @ts-ignore
import { EggGroup } from './egg-group';
// May contain unused imports in some cases
// @ts-ignore
import { EvolutionChain } from './evolution-chain';
// May contain unused imports in some cases
// @ts-ignore
import { FlavorText } from './flavor-text';
// May contain unused imports in some cases
// @ts-ignore
import { Generation } from './generation';
// May contain unused imports in some cases
// @ts-ignore
import { Genus } from './genus';
// May contain unused imports in some cases
// @ts-ignore
import { GrowthRate } from './growth-rate';
// May contain unused imports in some cases
// @ts-ignore
import { Name } from './name';
// May contain unused imports in some cases
// @ts-ignore
import { PalParkEncounterArea } from './pal-park-encounter-area';
// May contain unused imports in some cases
// @ts-ignore
import { PokemonColor } from './pokemon-color';
// May contain unused imports in some cases
// @ts-ignore
import { PokemonHabitat } from './pokemon-habitat';
// May contain unused imports in some cases
// @ts-ignore
import { PokemonShape } from './pokemon-shape';
// May contain unused imports in some cases
// @ts-ignore
import { PokemonSpeciesDexEntry } from './pokemon-species-dex-entry';
// May contain unused imports in some cases
// @ts-ignore
import { PokemonSpeciesVariety } from './pokemon-species-variety';

/**
 * 
 * @export
 * @interface PokemonSpecies
 */
export interface PokemonSpecies {
    /**
     * 
     * @type {number}
     * @memberof PokemonSpecies
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof PokemonSpecies
     */
    'name'?: string;
    /**
     * 
     * @type {number}
     * @memberof PokemonSpecies
     */
    'order'?: number;
    /**
     * 
     * @type {number}
     * @memberof PokemonSpecies
     */
    'gender_rate'?: number;
    /**
     * 
     * @type {number}
     * @memberof PokemonSpecies
     */
    'capture_rate'?: number;
    /**
     * 
     * @type {number}
     * @memberof PokemonSpecies
     */
    'base_happiness'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PokemonSpecies
     */
    'is_baby'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PokemonSpecies
     */
    'hatch_counter'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PokemonSpecies
     */
    'has_gender_differences'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PokemonSpecies
     */
    'forms_switchable'?: boolean;
    /**
     * 
     * @type {GrowthRate}
     * @memberof PokemonSpecies
     */
    'growth_rate'?: GrowthRate;
    /**
     * 
     * @type {Array<PokemonSpeciesDexEntry>}
     * @memberof PokemonSpecies
     */
    'pokedex_numbers'?: Array<PokemonSpeciesDexEntry>;
    /**
     * 
     * @type {Array<EggGroup>}
     * @memberof PokemonSpecies
     */
    'egg_groups'?: Array<EggGroup>;
    /**
     * 
     * @type {PokemonColor}
     * @memberof PokemonSpecies
     */
    'color'?: PokemonColor;
    /**
     * 
     * @type {PokemonShape}
     * @memberof PokemonSpecies
     */
    'shape'?: PokemonShape;
    /**
     * 
     * @type {PokemonSpecies}
     * @memberof PokemonSpecies
     */
    'evolves_from_species'?: PokemonSpecies;
    /**
     * 
     * @type {EvolutionChain}
     * @memberof PokemonSpecies
     */
    'evolution_chain'?: EvolutionChain;
    /**
     * 
     * @type {PokemonHabitat}
     * @memberof PokemonSpecies
     */
    'habitat'?: PokemonHabitat;
    /**
     * 
     * @type {Generation}
     * @memberof PokemonSpecies
     */
    'generation'?: Generation;
    /**
     * 
     * @type {Array<Name>}
     * @memberof PokemonSpecies
     */
    'names'?: Array<Name>;
    /**
     * 
     * @type {Array<PalParkEncounterArea>}
     * @memberof PokemonSpecies
     */
    'pal_park_encounters'?: Array<PalParkEncounterArea>;
    /**
     * 
     * @type {Array<FlavorText>}
     * @memberof PokemonSpecies
     */
    'flavor_text_entries'?: Array<FlavorText>;
    /**
     * 
     * @type {Array<Description>}
     * @memberof PokemonSpecies
     */
    'form_descriptions'?: Array<Description>;
    /**
     * 
     * @type {Array<Genus>}
     * @memberof PokemonSpecies
     */
    'genera'?: Array<Genus>;
    /**
     * 
     * @type {Array<PokemonSpeciesVariety>}
     * @memberof PokemonSpecies
     */
    'varieties'?: Array<PokemonSpeciesVariety>;
}

