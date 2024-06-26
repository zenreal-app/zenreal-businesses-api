import {ProfilesAPI} from "./profile";
import {ZenrealApiConfig} from "../models/api-types";

export class Zenreal {
    public profiles: ProfilesAPI;

    constructor(api_key: string) {
        const config: ZenrealApiConfig = { api_key };
        this.profiles = new ProfilesAPI(config);
    }
}