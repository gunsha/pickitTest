import { OpaqueToken } from "@angular/core";

export let APP_CONFIG = new OpaqueToken("app.config");

export interface IAppConfig {
    apiEndpoint: string;
}

export const AppConfig: IAppConfig = {    
    //apiEndpoint:'http://localhost:3000/'
    //apiEndpoint:'http://192.168.0.101:3000/'
    apiEndpoint:'http://pickit-api.us-west-2.elasticbeanstalk.com/api/'
};