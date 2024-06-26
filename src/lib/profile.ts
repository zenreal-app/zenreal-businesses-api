import { BaseAPI } from './base-api';
import {PaginationParams, ZenrealApiResponse} from "../models/api-types";
import {Profile} from "../models/profile";

export class ProfilesAPI extends BaseAPI {
    async list(params: PaginationParams = {}): Promise<ZenrealApiResponse<Profile[]>> {
        const queryParams = new URLSearchParams(params as Record<string, string>).toString();
        return this.request<Profile[]>(`/profiles?${queryParams}`);
    }

    async get(id: string): Promise<ZenrealApiResponse<Profile>> {
        return this.request<Profile>(`/profiles/${id}`);
    }

}