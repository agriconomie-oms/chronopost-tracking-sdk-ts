/**
 * Swagger Okapi Suivi
 * This is swagger of Suivi V2 used for transaction around tracking and account La Poste.
 *
 * The version of the OpenAPI document: 5.4.0
 * Contact: product.ssu@laposte.fr
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Configuration } from './configuration';
import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { RequestArgs, BaseAPI } from './base';
/**
 *
 * @export
 * @interface BaseResponse
 */
export interface BaseResponse {
    /**
     * Returned value gaving treatment result
     * @type {number}
     * @memberof BaseResponse
     */
    'returnCode': BaseResponseReturnCodeEnum;
    /**
     * Language of the returned response
     * @type {string}
     * @memberof BaseResponse
     */
    'lang'?: BaseResponseLangEnum;
}
/**
    * @export
    * @enum {string}
    */
export declare enum BaseResponseReturnCodeEnum {
    NUMBER_101 = 101,
    NUMBER_104 = 104,
    NUMBER_105 = 105,
    NUMBER_200 = 200,
    NUMBER_206 = 206,
    NUMBER_400 = 400,
    NUMBER_404 = 404,
    NUMBER_504 = 504
}
/**
    * @export
    * @enum {string}
    */
export declare enum BaseResponseLangEnum {
    FrFr = "fr_FR",
    EnGb = "en_GB",
    DeDe = "de_DE",
    ItIt = "it_IT",
    EsEs = "es_ES",
    NlNl = "nl_NL"
}
/**
 * Contextual Informations on call and object
 * @export
 * @interface ContextData
 */
export interface ContextData {
    /**
     *
     * @type {DeliveryChoice}
     * @memberof ContextData
     */
    'deliveryChoice'?: DeliveryChoice;
    /**
     *
     * @type {RemovalPoint}
     * @memberof ContextData
     */
    'removalPoint'?: RemovalPoint;
    /**
     * Origin country\'s code.
     * @type {string}
     * @memberof ContextData
     */
    'originCountry'?: string;
    /**
     * Delivery country\'s code.
     * @type {string}
     * @memberof ContextData
     */
    'arrivalCountry'?: string;
    /**
     * Partner\'s code.
     * @type {string}
     * @memberof ContextData
     */
    'partner'?: string;
}
/**
 * List of delivery services possible or chosen
 * @export
 * @interface DeliveryChoice
 */
export interface DeliveryChoice {
    /**
     * 0=No, 1=Possible, 2=Chosen.
     * @type {number}
     * @memberof DeliveryChoice
     */
    'deliveryChoice': number;
}
/**
 *
 * @export
 * @interface EventItem
 */
export interface EventItem {
    /**
     * Event\'s date, format aaaa-mm-jjThh:mn:ss+hh:mn.
     * @type {string}
     * @memberof EventItem
     */
    'date': string;
    /**
     * Event\'s message.
     * @type {string}
     * @memberof EventItem
     */
    'label': string;
    /**
     * Event\'s code.
     * @type {string}
     * @memberof EventItem
     */
    'code': string;
}
/**
 * Product object returned
 * @export
 * @interface Product
 */
export interface Product {
    /**
     * Object\'s identifier composed from 11 to 15 alphanumeric characters.
     * @type {string}
     * @memberof Product
     */
    'idShip': string;
    /**
     * Product\'s name or category.
     * @type {string}
     * @memberof Product
     */
    'product': string;
    /**
     * Holder in charge :  1=Courrier,  3=Chronopost,  4=Colissimo.
     * @type {number}
     * @memberof Product
     */
    'holder': ProductHolderEnum;
    /**
     * Name of holder in charge.
     * @type {string}
     * @memberof Product
     */
    'holderName'?: ProductHolderNameEnum;
}
/**
    * @export
    * @enum {string}
    */
export declare enum ProductHolderEnum {
    NUMBER_1 = 1,
    NUMBER_3 = 3,
    NUMBER_4 = 4
}
/**
    * @export
    * @enum {string}
    */
export declare enum ProductHolderNameEnum {
    Courrier = "Courrier",
    Chronopost = "Chronopost",
    Colissimo = "Colissimo"
}
/**
 * Description of removal point
 * @export
 * @interface RemovalPoint
 */
export interface RemovalPoint {
    /**
     * Name of removal point.
     * @type {string}
     * @memberof RemovalPoint
     */
    'name': string;
    /**
     * Kind of point (\'BDP\', \'A2P\' ...).
     * @type {string}
     * @memberof RemovalPoint
     */
    'type': string;
}
/**
 * Json oject returned in case of problem or of invalid object
 * @export
 * @interface ResponseKO
 */
export interface ResponseKO {
    /**
     *
     * @type {any}
     * @memberof ResponseKO
     */
    'returnCode': any;
    /**
     * Language of the returned response
     * @type {string}
     * @memberof ResponseKO
     */
    'lang'?: ResponseKOLangEnum;
    /**
     * Error message to be shown to customer
     * @type {string}
     * @memberof ResponseKO
     */
    'returnMessage'?: string;
}
/**
    * @export
    * @enum {string}
    */
export declare enum ResponseKOLangEnum {
    FrFr = "fr_FR",
    EnGb = "en_GB",
    DeDe = "de_DE",
    ItIt = "it_IT",
    EsEs = "es_ES",
    NlNl = "nl_NL"
}
/**
 *
 * @export
 * @interface ResponseKOAllOf
 */
export interface ResponseKOAllOf {
    /**
     *
     * @type {any}
     * @memberof ResponseKOAllOf
     */
    'returnCode'?: any;
    /**
     * Error message to be shown to customer
     * @type {string}
     * @memberof ResponseKOAllOf
     */
    'returnMessage'?: string;
}
/**
 * Json response returned in case of known and valid object
 * @export
 * @interface ResponseSU
 */
export interface ResponseSU {
    /**
     *
     * @type {any}
     * @memberof ResponseSU
     */
    'returnCode': any;
    /**
     * Language of the returned response
     * @type {string}
     * @memberof ResponseSU
     */
    'lang'?: ResponseSULangEnum;
    /**
     *
     * @type {Shipment}
     * @memberof ResponseSU
     */
    'shipment'?: Shipment;
}
/**
    * @export
    * @enum {string}
    */
export declare enum ResponseSULangEnum {
    FrFr = "fr_FR",
    EnGb = "en_GB",
    DeDe = "de_DE",
    ItIt = "it_IT",
    EsEs = "es_ES",
    NlNl = "nl_NL"
}
/**
 *
 * @export
 * @interface ResponseSUAllOf
 */
export interface ResponseSUAllOf {
    /**
     *
     * @type {any}
     * @memberof ResponseSUAllOf
     */
    'returnCode'?: any;
    /**
     *
     * @type {Shipment}
     * @memberof ResponseSUAllOf
     */
    'shipment'?: Shipment;
}
/**
 * For each requested object, either a responseSU or a responseKO is returned
 * @export
 * @interface ResponseSUM
 */
export interface ResponseSUM {
    /**
     *
     * @type {any}
     * @memberof ResponseSUM
     */
    'returnCode': any;
    /**
     * Language of the returned response
     * @type {string}
     * @memberof ResponseSUM
     */
    'lang'?: ResponseSUMLangEnum;
    /**
     *
     * @type {Shipment}
     * @memberof ResponseSUM
     */
    'shipment'?: Shipment;
    /**
     * Error message to be shown to customer
     * @type {string}
     * @memberof ResponseSUM
     */
    'returnMessage'?: string;
}
/**
    * @export
    * @enum {string}
    */
export declare enum ResponseSUMLangEnum {
    FrFr = "fr_FR",
    EnGb = "en_GB",
    DeDe = "de_DE",
    ItIt = "it_IT",
    EsEs = "es_ES",
    NlNl = "nl_NL"
}
/**
 * Unified tracking object returned
 * @export
 * @interface Shipment
 */
export interface Shipment {
    /**
     * Object\'s identifier composed from 11 to 15 alphanumeric characters.
     * @type {string}
     * @memberof Shipment
     */
    'idShip': ShipmentIdShipEnum;
    /**
     * Product\'s name or category.
     * @type {string}
     * @memberof Shipment
     */
    'product': string;
    /**
     * Holder in charge :  1=Courrier,  3=Chronopost,  4=Colissimo.
     * @type {number}
     * @memberof Shipment
     */
    'holder': ShipmentHolderEnum;
    /**
     * Url to fine tracking.
     * @type {string}
     * @memberof Shipment
     */
    'urlDetail'?: string;
    /**
     * Url of tracking onto laposte.fr = $url+idship
     * @type {string}
     * @memberof Shipment
     */
    'url'?: string;
    /**
     * Date of entry into network, format aaaa-mm-jjThh:mn:ss+hh:mn.
     * @type {string}
     * @memberof Shipment
     */
    'entryDate'?: string;
    /**
     * Is object delivered?
     * @type {boolean}
     * @memberof Shipment
     */
    'isFinal': boolean;
    /**
     * Date of delivery, format aaaa-mm-jjThh:mn:ss+hh:mn.
     * @type {string}
     * @memberof Shipment
     */
    'deliveryDate'?: string;
    /**
     *
     * @type {ContextData}
     * @memberof Shipment
     */
    'contextData'?: ContextData;
    /**
     * Definition of timeline : 5 items given
     * @type {Array<TimelineItem>}
     * @memberof Shipment
     */
    'timeline'?: Array<TimelineItem>;
    /**
     * List of event given into anti chronological order
     * @type {Array<EventItem>}
     * @memberof Shipment
     */
    'event'?: Array<EventItem>;
    /**
     *
     * @type {Array<object>}
     * @memberof Shipment
     */
    'message'?: Array<object>;
}
/**
    * @export
    * @enum {string}
    */
export declare enum ShipmentIdShipEnum {
    Exp = "EXP",
    Dest = "DEST"
}
/**
    * @export
    * @enum {string}
    */
export declare enum ShipmentHolderEnum {
    NUMBER_1 = 1,
    NUMBER_3 = 3,
    NUMBER_4 = 4
}
/**
 *
 * @export
 * @interface TimelineItem
 */
export interface TimelineItem {
    /**
     * Step\'s identifier (1 to 5).
     * @type {number}
     * @memberof TimelineItem
     */
    'id': TimelineItemIdEnum;
    /**
     * Step\'s short label, displayed onto timeline.
     * @type {string}
     * @memberof TimelineItem
     */
    'shortLabel': string;
    /**
     * Step\'s long label, displayed into hot zone.
     * @type {string}
     * @memberof TimelineItem
     */
    'longLabel'?: string;
    /**
     * Is step active?
     * @type {boolean}
     * @memberof TimelineItem
     */
    'status': boolean;
    /**
     * Kind of step : 1=OK, 0=Information, -1=KO.
     * @type {number}
     * @memberof TimelineItem
     */
    'type': TimelineItemTypeEnum;
    /**
     * Event\'s date, format aaaa-mm-jjThh:mn:ss+hh:mn.
     * @type {string}
     * @memberof TimelineItem
     */
    'date'?: string;
    /**
     * Event\'s country code.
     * @type {string}
     * @memberof TimelineItem
     */
    'country'?: string;
}
/**
    * @export
    * @enum {string}
    */
export declare enum TimelineItemIdEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4,
    NUMBER_5 = 5
}
/**
    * @export
    * @enum {string}
    */
export declare enum TimelineItemTypeEnum {
    NUMBER_1 = 1,
    NUMBER_0 = 0,
    NUMBER_MINUS_1 = -1
}
/**
 * SuiviApi - axios parameter creator
 * @export
 */
export declare const SuiviApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * All connected applications use this service to track. These calls represent nearly 95% of traffic
     * @summary Getting tracking informations for an object
     * @param {string} idship ID of object (1 to 10, comma separated)
     * @param {string} [lang] Lang desired: fr_FR, en_GB, de_DE, es_ES, it_IT, nl_NL
     * @param {string} [xForwardedFor] Must contains customer\&#39;s IP
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get: (idship: string, lang?: string, xForwardedFor?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Used by browsers to verify allowed methods, domain origin ...
     * @summary Used by browsers to check request
     * @param {string} idship ID of object (1 to 10, comma separated)
     * @param {string} [lang] Lang desired: fr_FR, en_GB, de_DE, es_ES, it_IT, nl_NL
     * @param {string} [xForwardedFor] Must contains customer\&#39;s IP
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    options: (idship: string, lang?: string, xForwardedFor?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * SuiviApi - functional programming interface
 * @export
 */
export declare const SuiviApiFp: (configuration?: Configuration) => {
    /**
     * All connected applications use this service to track. These calls represent nearly 95% of traffic
     * @summary Getting tracking informations for an object
     * @param {string} idship ID of object (1 to 10, comma separated)
     * @param {string} [lang] Lang desired: fr_FR, en_GB, de_DE, es_ES, it_IT, nl_NL
     * @param {string} [xForwardedFor] Must contains customer\&#39;s IP
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(idship: string, lang?: string, xForwardedFor?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResponseSU>>;
    /**
     * Used by browsers to verify allowed methods, domain origin ...
     * @summary Used by browsers to check request
     * @param {string} idship ID of object (1 to 10, comma separated)
     * @param {string} [lang] Lang desired: fr_FR, en_GB, de_DE, es_ES, it_IT, nl_NL
     * @param {string} [xForwardedFor] Must contains customer\&#39;s IP
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    options(idship: string, lang?: string, xForwardedFor?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
};
/**
 * SuiviApi - factory interface
 * @export
 */
export declare const SuiviApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * All connected applications use this service to track. These calls represent nearly 95% of traffic
     * @summary Getting tracking informations for an object
     * @param {string} idship ID of object (1 to 10, comma separated)
     * @param {string} [lang] Lang desired: fr_FR, en_GB, de_DE, es_ES, it_IT, nl_NL
     * @param {string} [xForwardedFor] Must contains customer\&#39;s IP
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    get(idship: string, lang?: string, xForwardedFor?: string, options?: any): AxiosPromise<ResponseSU>;
    /**
     * Used by browsers to verify allowed methods, domain origin ...
     * @summary Used by browsers to check request
     * @param {string} idship ID of object (1 to 10, comma separated)
     * @param {string} [lang] Lang desired: fr_FR, en_GB, de_DE, es_ES, it_IT, nl_NL
     * @param {string} [xForwardedFor] Must contains customer\&#39;s IP
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    options(idship: string, lang?: string, xForwardedFor?: string, options?: any): AxiosPromise<void>;
};
/**
 * SuiviApi - object-oriented interface
 * @export
 * @class SuiviApi
 * @extends {BaseAPI}
 */
export declare class SuiviApi extends BaseAPI {
    /**
     * All connected applications use this service to track. These calls represent nearly 95% of traffic
     * @summary Getting tracking informations for an object
     * @param {string} idship ID of object (1 to 10, comma separated)
     * @param {string} [lang] Lang desired: fr_FR, en_GB, de_DE, es_ES, it_IT, nl_NL
     * @param {string} [xForwardedFor] Must contains customer\&#39;s IP
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SuiviApi
     */
    get(idship: string, lang?: string, xForwardedFor?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ResponseSU>>;
    /**
     * Used by browsers to verify allowed methods, domain origin ...
     * @summary Used by browsers to check request
     * @param {string} idship ID of object (1 to 10, comma separated)
     * @param {string} [lang] Lang desired: fr_FR, en_GB, de_DE, es_ES, it_IT, nl_NL
     * @param {string} [xForwardedFor] Must contains customer\&#39;s IP
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SuiviApi
     */
    options(idship: string, lang?: string, xForwardedFor?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void>>;
}
