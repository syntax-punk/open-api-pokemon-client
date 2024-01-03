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
import { Location } from '../model';
// @ts-ignore
import { LocationList200Response } from '../model';
/**
 * LocationApi - axios parameter creator
 * @export
 */
export const LocationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} [limit] 
         * @param {number} [offset] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        locationList: async (limit?: number, offset?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v2/location/`;
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
        locationRead: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('locationRead', 'id', id)
            const localVarPath = `/api/v2/location/{id}/`
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
 * LocationApi - functional programming interface
 * @export
 */
export const LocationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LocationApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} [limit] 
         * @param {number} [offset] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async locationList(limit?: number, offset?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LocationList200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.locationList(limit, offset, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async locationRead(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Location>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.locationRead(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * LocationApi - factory interface
 * @export
 */
export const LocationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LocationApiFp(configuration)
    return {
        /**
         * 
         * @param {number} [limit] 
         * @param {number} [offset] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        locationList(limit?: number, offset?: number, options?: any): AxiosPromise<LocationList200Response> {
            return localVarFp.locationList(limit, offset, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        locationRead(id: number, options?: any): AxiosPromise<Location> {
            return localVarFp.locationRead(id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * LocationApi - object-oriented interface
 * @export
 * @class LocationApi
 * @extends {BaseAPI}
 */
export class LocationApi extends BaseAPI {
    /**
     * 
     * @param {number} [limit] 
     * @param {number} [offset] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationApi
     */
    public locationList(limit?: number, offset?: number, options?: AxiosRequestConfig) {
        return LocationApiFp(this.configuration).locationList(limit, offset, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationApi
     */
    public locationRead(id: number, options?: AxiosRequestConfig) {
        return LocationApiFp(this.configuration).locationRead(id, options).then((request) => request(this.axios, this.basePath));
    }
}
