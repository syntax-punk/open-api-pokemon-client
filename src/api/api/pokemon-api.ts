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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { GetAllPokemons200Response } from '../model';
// @ts-ignore
import { GetTypes200ResponseInner } from '../model';
// @ts-ignore
import { PokemonDetails } from '../model';
/**
 * PokemonApi - axios parameter creator
 * @export
 */
export const PokemonApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns an array of pokemon data ordered by the Pokemon\'s number.  Pagination is handled using the `limit` and `offset` parameters where limit is the maximum number of items to return and offset is the first item.  Search term should be passed to the `q` parameter.
         * @summary Returns a list of Pokemon
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllPokemons: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/allpokemon`;
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
        /**
         * Return data for a single Pokemon using the Pokemon\'s number or it\'s name
         * @summary Get pokemon
         * @param {string} id The pokemon\&#39;s number or name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEvolutions: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getEvolutions', 'id', id)
            const localVarPath = `/evolutions/{id}`
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
        /**
         * Returns an array of pokemon data ordered by the Pokemon\'s number.  Pagination is handled using the `limit` and `offset` parameters where limit is the maximum number of items to return and offset is the first item.  Search term should be passed to the `q` parameter.
         * @summary Returns a list of Pokemon
         * @param {number} [limit] Default: 20
         * @param {number} [offset] Default: 0
         * @param {string} [q] Search term
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPokemon: async (limit?: number, offset?: number, q?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/pokemon`;
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

            if (q !== undefined) {
                localVarQueryParameter['q'] = q;
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
         * Return data for a single Pokemon using the Pokemon\'s number or it\'s name
         * @summary Get pokemon
         * @param {string} id The pokemon\&#39;s number or name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPokemonById: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getPokemonById', 'id', id)
            const localVarPath = `/pokemon/{id}`
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
        /**
         * 
         * @summary Get max number of pokemon
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPokemonCount: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/pokemonCount`;
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
        /**
         * Get all the types that Pokemon can have. Each type has strengths and weaknesses.
         * @summary Pokemon Type data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTypes: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/types`;
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
 * PokemonApi - functional programming interface
 * @export
 */
export const PokemonApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PokemonApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns an array of pokemon data ordered by the Pokemon\'s number.  Pagination is handled using the `limit` and `offset` parameters where limit is the maximum number of items to return and offset is the first item.  Search term should be passed to the `q` parameter.
         * @summary Returns a list of Pokemon
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllPokemons(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetAllPokemons200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllPokemons(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Return data for a single Pokemon using the Pokemon\'s number or it\'s name
         * @summary Get pokemon
         * @param {string} id The pokemon\&#39;s number or name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getEvolutions(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PokemonDetails>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getEvolutions(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns an array of pokemon data ordered by the Pokemon\'s number.  Pagination is handled using the `limit` and `offset` parameters where limit is the maximum number of items to return and offset is the first item.  Search term should be passed to the `q` parameter.
         * @summary Returns a list of Pokemon
         * @param {number} [limit] Default: 20
         * @param {number} [offset] Default: 0
         * @param {string} [q] Search term
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPokemon(limit?: number, offset?: number, q?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetAllPokemons200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPokemon(limit, offset, q, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Return data for a single Pokemon using the Pokemon\'s number or it\'s name
         * @summary Get pokemon
         * @param {string} id The pokemon\&#39;s number or name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPokemonById(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PokemonDetails>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPokemonById(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get max number of pokemon
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPokemonCount(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPokemonCount(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get all the types that Pokemon can have. Each type has strengths and weaknesses.
         * @summary Pokemon Type data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTypes(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetTypes200ResponseInner>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTypes(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PokemonApi - factory interface
 * @export
 */
export const PokemonApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PokemonApiFp(configuration)
    return {
        /**
         * Returns an array of pokemon data ordered by the Pokemon\'s number.  Pagination is handled using the `limit` and `offset` parameters where limit is the maximum number of items to return and offset is the first item.  Search term should be passed to the `q` parameter.
         * @summary Returns a list of Pokemon
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllPokemons(options?: any): AxiosPromise<GetAllPokemons200Response> {
            return localVarFp.getAllPokemons(options).then((request) => request(axios, basePath));
        },
        /**
         * Return data for a single Pokemon using the Pokemon\'s number or it\'s name
         * @summary Get pokemon
         * @param {string} id The pokemon\&#39;s number or name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEvolutions(id: string, options?: any): AxiosPromise<PokemonDetails> {
            return localVarFp.getEvolutions(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns an array of pokemon data ordered by the Pokemon\'s number.  Pagination is handled using the `limit` and `offset` parameters where limit is the maximum number of items to return and offset is the first item.  Search term should be passed to the `q` parameter.
         * @summary Returns a list of Pokemon
         * @param {number} [limit] Default: 20
         * @param {number} [offset] Default: 0
         * @param {string} [q] Search term
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPokemon(limit?: number, offset?: number, q?: string, options?: any): AxiosPromise<GetAllPokemons200Response> {
            return localVarFp.getPokemon(limit, offset, q, options).then((request) => request(axios, basePath));
        },
        /**
         * Return data for a single Pokemon using the Pokemon\'s number or it\'s name
         * @summary Get pokemon
         * @param {string} id The pokemon\&#39;s number or name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPokemonById(id: string, options?: any): AxiosPromise<PokemonDetails> {
            return localVarFp.getPokemonById(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get max number of pokemon
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPokemonCount(options?: any): AxiosPromise<void> {
            return localVarFp.getPokemonCount(options).then((request) => request(axios, basePath));
        },
        /**
         * Get all the types that Pokemon can have. Each type has strengths and weaknesses.
         * @summary Pokemon Type data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTypes(options?: any): AxiosPromise<Array<GetTypes200ResponseInner>> {
            return localVarFp.getTypes(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PokemonApi - object-oriented interface
 * @export
 * @class PokemonApi
 * @extends {BaseAPI}
 */
export class PokemonApi extends BaseAPI {
    /**
     * Returns an array of pokemon data ordered by the Pokemon\'s number.  Pagination is handled using the `limit` and `offset` parameters where limit is the maximum number of items to return and offset is the first item.  Search term should be passed to the `q` parameter.
     * @summary Returns a list of Pokemon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PokemonApi
     */
    public getAllPokemons(options?: AxiosRequestConfig) {
        return PokemonApiFp(this.configuration).getAllPokemons(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Return data for a single Pokemon using the Pokemon\'s number or it\'s name
     * @summary Get pokemon
     * @param {string} id The pokemon\&#39;s number or name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PokemonApi
     */
    public getEvolutions(id: string, options?: AxiosRequestConfig) {
        return PokemonApiFp(this.configuration).getEvolutions(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns an array of pokemon data ordered by the Pokemon\'s number.  Pagination is handled using the `limit` and `offset` parameters where limit is the maximum number of items to return and offset is the first item.  Search term should be passed to the `q` parameter.
     * @summary Returns a list of Pokemon
     * @param {number} [limit] Default: 20
     * @param {number} [offset] Default: 0
     * @param {string} [q] Search term
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PokemonApi
     */
    public getPokemon(limit?: number, offset?: number, q?: string, options?: AxiosRequestConfig) {
        return PokemonApiFp(this.configuration).getPokemon(limit, offset, q, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Return data for a single Pokemon using the Pokemon\'s number or it\'s name
     * @summary Get pokemon
     * @param {string} id The pokemon\&#39;s number or name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PokemonApi
     */
    public getPokemonById(id: string, options?: AxiosRequestConfig) {
        return PokemonApiFp(this.configuration).getPokemonById(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get max number of pokemon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PokemonApi
     */
    public getPokemonCount(options?: AxiosRequestConfig) {
        return PokemonApiFp(this.configuration).getPokemonCount(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get all the types that Pokemon can have. Each type has strengths and weaknesses.
     * @summary Pokemon Type data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PokemonApi
     */
    public getTypes(options?: AxiosRequestConfig) {
        return PokemonApiFp(this.configuration).getTypes(options).then((request) => request(this.axios, this.basePath));
    }
}
