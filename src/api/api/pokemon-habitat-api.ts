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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { PokemonHabitat } from '../model';
// @ts-ignore
import { PokemonHabitatList200Response } from '../model';
/**
 * PokemonHabitatApi - axios parameter creator
 * @export
 */
export const PokemonHabitatApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} [limit] 
         * @param {number} [offset] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pokemonHabitatList: async (limit?: number, offset?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v2/pokemon-habitat/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pokemonHabitatRead: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('pokemonHabitatRead', 'id', id)
            const localVarPath = `/api/v2/pokemon-habitat/{id}/`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PokemonHabitatApi - functional programming interface
 * @export
 */
export const PokemonHabitatApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PokemonHabitatApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} [limit] 
         * @param {number} [offset] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pokemonHabitatList(limit?: number, offset?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PokemonHabitatList200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.pokemonHabitatList(limit, offset, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pokemonHabitatRead(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PokemonHabitat>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.pokemonHabitatRead(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PokemonHabitatApi - factory interface
 * @export
 */
export const PokemonHabitatApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PokemonHabitatApiFp(configuration)
    return {
        /**
         * 
         * @param {number} [limit] 
         * @param {number} [offset] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pokemonHabitatList(limit?: number, offset?: number, options?: any): AxiosPromise<PokemonHabitatList200Response> {
            return localVarFp.pokemonHabitatList(limit, offset, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pokemonHabitatRead(id: number, options?: any): AxiosPromise<PokemonHabitat> {
            return localVarFp.pokemonHabitatRead(id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PokemonHabitatApi - object-oriented interface
 * @export
 * @class PokemonHabitatApi
 * @extends {BaseAPI}
 */
export class PokemonHabitatApi extends BaseAPI {
    /**
     * 
     * @param {number} [limit] 
     * @param {number} [offset] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PokemonHabitatApi
     */
    public pokemonHabitatList(limit?: number, offset?: number, options?: AxiosRequestConfig) {
        return PokemonHabitatApiFp(this.configuration).pokemonHabitatList(limit, offset, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PokemonHabitatApi
     */
    public pokemonHabitatRead(id: number, options?: AxiosRequestConfig) {
        return PokemonHabitatApiFp(this.configuration).pokemonHabitatRead(id, options).then((request) => request(this.axios, this.basePath));
    }
}
