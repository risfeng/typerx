/**
 * rest api interface
 * 项目标准接口
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/**
 * 
 */
export interface MenuResponse {
    /**
     * 
     */
    id: string;
    /**
     * 
     */
    name: string;
    /**
     * 
     */
    slug: string;
    /**
     * 
     */
    group: boolean;
    /**
     * 
     */
    link: string;
    /**
     * 
     */
    externalLink: string;
    /**
     * 
     */
    blank: boolean;
    /**
     * 
     */
    icon: string;
    /**
     * 
     */
    order: number;
    /**
     * 
     */
    enable: boolean;
    /**
     * 
     */
    expanded: boolean;
    /**
     * 
     */
    acl: string;
    /**
     * 
     */
    permissions?: Array<string>;
    /**
     * 
     */
    parent?: any;
    /**
     * 
     */
    isMenu: boolean;
}
