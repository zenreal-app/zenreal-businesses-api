import {ZenrealApiConfig, ZenrealApiResponse} from "../models/api-types";

const BASE_URL = "https://api.zenreal.app";
const API_VERSION = "v1";

export class BaseAPI {
    protected base_url: string;
    protected headers: Headers;

    constructor(config: ZenrealApiConfig) {
        this.base_url = `${BASE_URL}/${API_VERSION}`;
        this.headers = new Headers({
            'Authorization': `Bearer ${config.api_key}`,
            'Content-Type': 'application/json'
        });
    }

    protected async request<T>(endpoint: string, options: RequestInit = {}): Promise<ZenrealApiResponse<T>> {
        const url = `${this.base_url}${endpoint}`;
        const response = await fetch(url, {
            ...options,
            headers: this.headers,
        });

        if (!response.ok) {
            // TODO Improve Error Handling
            throw new Error(`API request failed: ${response.statusText}`);
        }

        const data = await response.json();
        return { data, status: response.status };
    }
}