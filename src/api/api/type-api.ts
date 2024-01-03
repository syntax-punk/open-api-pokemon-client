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
import { Type } from '../model';
// @ts-ignore
import { TypeList200Response } from '../model';
/**
 * TypeApi - axios parameter creator
 * @export
 */
export const TypeApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} [limit] 
         * @param {number} [offset] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        typeList: async (limit?: number, offset?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v2/type/`;
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
        typeRead: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('typeRead', 'id', id)
            const localVarPath = `/api/v2/type/{id}/`
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
 * TypeApi - functional programming interface
 * @export
 */
export const TypeApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TypeApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} [limit] 
         * @param {number} [offset] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async typeList(limit?: number, offset?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TypeList200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.typeList(limit, offset, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async typeRead(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Type>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.typeRead(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TypeApi - factory interface
 * @export
 */
export const TypeApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TypeApiFp(configuration)
    return {
        /**
         * 
         * @param {number} [limit] 
         * @param {number} [offset] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        typeList(limit?: number, offset?: number, options?: any): AxiosPromise<TypeList200Response> {
            return localVarFp.typeList(limit, offset, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        typeRead(id: number, options?: any): AxiosPromise<Type> {
            return localVarFp.typeRead(id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TypeApi - object-oriented interface
 * @export
 * @class TypeApi
 * @extends {BaseAPI}
 */
export class TypeApi extends BaseAPI {
    /**
     * 
     * @param {number} [limit] 
     * @param {number} [offset] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TypeApi
     */
    public typeList(limit?: number, offset?: number, options?: AxiosRequestConfig) {
        return TypeApiFp(this.configuration).typeList(limit, offset, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TypeApi
     */
    public typeRead(id: number, options?: AxiosRequestConfig) {
        return TypeApiFp(this.configuration).typeRead(id, options).then((request) => request(this.axios, this.basePath));
    }
}
