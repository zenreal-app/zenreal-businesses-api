import { BaseAPI } from './base-api';
import {PaginationParams, ZenrealApiResponse} from "../models/api-types";
import {Profile} from "../models/profile";

export class ProfilesAPI extends BaseAPI {
    /**
     * List all profiles
     * This endpoint allows you to retrieve a paginated list of all your profiles.
     *
     * @param {PaginationParams} [params={}] - The pagination parameters for the request.
     * @returns {Promise<ZenrealApiResponse<Profile[]>>} - A promise that resolves to the API response containing an array of profiles.
     */
    async list(params: PaginationParams = {}): Promise<ZenrealApiResponse<Profile[]>> {
        const queryParams = new URLSearchParams(params as Record<string, string>).toString();
        return this.request<Profile[]>(`/profiles?${queryParams}`);
    }


    /**
     * Retrieve a profile
     * This endpoint allows you to retrieve a user by providing their reference_id.
     * @param {string} reference_id - The reference ID of the profile to retrieve.
     * @returns {Promise<ZenrealApiResponse<Profile>>} - A promise that resolves to the API response containing the profile.
     */
    async get(reference_id: string): Promise<ZenrealApiResponse<Profile>> {
        return this.request<Profile>(`/profiles/${reference_id}`);
    }

    /**
     * Create a profile
     * This endpoint allows you to add a new profile to your profile list in Zenreal.
     * To add a profile, you must provide a unique reference ID.
     *
     * @param {Object} params - The parameters for creating a profile.
     * @param {string} params.reference_id - The unique reference ID for the profile.
     * @returns {Promise<ZenrealApiResponse<Profile>>} - A promise that resolves to the API response containing the created profile.
     */
    async create(params: {reference_id: string} ): Promise<ZenrealApiResponse<Profile>>{
        return this.request<Profile>(`/profiles`, {
            method: 'POST',
            body: JSON.stringify(params)
        })
    }

    /**
     * Delete a profile
     * This endpoint allows you to delete a profile from your profile list in Zenreal.
     * Note: This will also delete all FoodDiary logs, Custom Food, and Saved Meals.
     *
     * @param {string} reference_id - The reference ID of the profile to delete.
     * @returns {Promise<ZenrealApiResponse<void>>} - A promise that resolves to the API response indicating the deletion was successful.
     */
    async delete(reference_id: string): Promise<ZenrealApiResponse<Pick<Profile, "_id">>>{
        return this.request<Pick<Profile, "_id">>(`/profiles/${reference_id}`, {
            method: 'DELETE'
        });
    }



}