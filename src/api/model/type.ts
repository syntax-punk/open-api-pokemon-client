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
import { AbilityNamesInner } from './ability-names-inner';
// May contain unused imports in some cases
// @ts-ignore
import { TypeDamageRelations } from './type-damage-relations';
// May contain unused imports in some cases
// @ts-ignore
import { TypeGameIndicesInner } from './type-game-indices-inner';
// May contain unused imports in some cases
// @ts-ignore
import { TypeGeneration } from './type-generation';
// May contain unused imports in some cases
// @ts-ignore
import { TypeMoveDamageClass } from './type-move-damage-class';
// May contain unused imports in some cases
// @ts-ignore
import { TypePokemonInner } from './type-pokemon-inner';

/**
 * 
 * @export
 * @interface Type
 */
export interface Type {
    /**
     * The identifier for this type resource.
     * @type {number}
     * @memberof Type
     */
    'id'?: number;
    /**
     * The name for this type resource.
     * @type {string}
     * @memberof Type
     */
    'name'?: string;
    /**
     * 
     * @type {TypeDamageRelations}
     * @memberof Type
     */
    'damage_relations'?: TypeDamageRelations;
    /**
     * 
     * @type {Array<TypeGameIndicesInner>}
     * @memberof Type
     */
    'game_indices'?: Array<TypeGameIndicesInner>;
    /**
     * 
     * @type {TypeGeneration}
     * @memberof Type
     */
    'generation'?: TypeGeneration;
    /**
     * 
     * @type {TypeMoveDamageClass}
     * @memberof Type
     */
    'move_damage_class'?: TypeMoveDamageClass;
    /**
     * 
     * @type {Array<AbilityNamesInner>}
     * @memberof Type
     */
    'names'?: Array<AbilityNamesInner>;
    /**
     * 
     * @type {Array<TypePokemonInner>}
     * @memberof Type
     */
    'pokemon'?: Array<TypePokemonInner>;
}

