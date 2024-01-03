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
import { MoveBattleStyle } from '../model';
// @ts-ignore
import { MoveBattleStyleList200Response } from '../model';
/**
 * MoveBattleStyleApi - axios parameter creator
 * @export
 */
export const MoveBattleStyleApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} [limit] 
         * @param {number} [offset] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        moveBattleStyleList: async (limit?: number, offset?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v2/move-battle-style/`;
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
        moveBattleStyleRead: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('moveBattleStyleRead', 'id', id)
            const localVarPath = `/api/v2/move-battle-style/{id}/`
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
 * MoveBattleStyleApi - functional programming interface
 * @export
 */
export const MoveBattleStyleApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MoveBattleStyleApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} [limit] 
         * @param {number} [offset] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async moveBattleStyleList(limit?: number, offset?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MoveBattleStyleList200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.moveBattleStyleList(limit, offset, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async moveBattleStyleRead(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MoveBattleStyle>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.moveBattleStyleRead(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * MoveBattleStyleApi - factory interface
 * @export
 */
export const MoveBattleStyleApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MoveBattleStyleApiFp(configuration)
    return {
        /**
         * 
         * @param {number} [limit] 
         * @param {number} [offset] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        moveBattleStyleList(limit?: number, offset?: number, options?: any): AxiosPromise<MoveBattleStyleList200Response> {
            return localVarFp.moveBattleStyleList(limit, offset, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        moveBattleStyleRead(id: number, options?: any): AxiosPromise<MoveBattleStyle> {
            return localVarFp.moveBattleStyleRead(id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MoveBattleStyleApi - object-oriented interface
 * @export
 * @class MoveBattleStyleApi
 * @extends {BaseAPI}
 */
export class MoveBattleStyleApi extends BaseAPI {
    /**
     * 
     * @param {number} [limit] 
     * @param {number} [offset] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MoveBattleStyleApi
     */
    public moveBattleStyleList(limit?: number, offset?: number, options?: AxiosRequestConfig) {
        return MoveBattleStyleApiFp(this.configuration).moveBattleStyleList(limit, offset, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MoveBattleStyleApi
     */
    public moveBattleStyleRead(id: number, options?: AxiosRequestConfig) {
        return MoveBattleStyleApiFp(this.configuration).moveBattleStyleRead(id, options).then((request) => request(this.axios, this.basePath));
    }
}