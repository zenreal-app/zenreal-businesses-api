import { BaseAPI } from './base-api';
import {PaginationParams, ZenrealApiResponse} from "../models/api-types";
import {Food} from "../models/food"; // Import the 'FoodParams' type

export class FoodsAPI extends BaseAPI {
    /**
     * Retrieve food from barcode.
     * This endpoint allows you to retrieve a food matching the barcode specified.
     * By default, the endpoint doesn't return vitamins, minerals, carbohydrates, lipids, proteins.
     * You may use the includes parameter to specify if you want the additional nutrient information.
     * 
     * @param {string} barcode - The barcode of the food item to retrieve.
     * @param {string[]} [params=[]] - The additional parameters for the request, including optional includes.
     * @returns {Promise<ZenrealApiResponse<Food>>} - A promise that resolves to the API response containing the food information.
     */
    async getFoodBarcode(barcode: string, params: string[] = []): Promise<ZenrealApiResponse<Food>> {
        const queryParams = new URLSearchParams({ includes: params.join(',') }).toString();
        return this.request<Food>(`/foods/${barcode}?${queryParams}`);
    }


    /**
     * Retrieve food
     * This endpoint allows you to retrieve a food by providing their _id.
     * By default the endpoint doesn't return vitamins, minerals, carbohydrates, lipids, proteins.
     * You may use the includes parameter to specify if you want the additional nutrient information.
     * 
     * @param {string} _id - The ID of the food item to retrieve.
     * @param {string[]} [params=[]] - The additional parameters for the request, including optional includes.
     * @returns {Promise<ZenrealApiResponse<Food>>} - A promise that resolves to the API response containing the food information.
     */
    async getFoodId(_id: string, params: string[] = []): Promise<ZenrealApiResponse<Food>> {
        const queryParams = new URLSearchParams({ includes: params.join(',') }).toString();
        return this.request<Food>(`/foods/${_id}?${queryParams}`);
    }

    
    /**
     * Search foods
     * This endpoint allows you to conducts a search of the food database using the search expression specified.
     *
     * @param {string} query - Search expression to match on food names.
     * @returns {Promise<ZenrealApiResponse<Food>>} - A promise that resolves to the API response containing the food.
     */
    async get(query: string): Promise<ZenrealApiResponse<Food>> {
        return this.request<Food>(`/foods/search?query=${query}`);
    }


    /**
     * Create custom food
     * This endpoint allows you to create a food for a profile according to the parameters specified.
     * The result of the call is the new unique identifier of the newly created food.
     * @enum {'g'|'ml'|'oz'}
     * @param {Object} params - The parameters for creating a food.
     * @param {string} params.food_name - Name of the food, not including the brand name. E.G.: "Instant Oatmeal".
     * @param {string} params.serving_description - Full description of the serving size. E.G.: "1 cup" or "100 g".
     * @param {number} params.metric_serving_amount - Metric quantity combined with metric_serving_unit to derive the total standardized quantity of the serving (where available).
     * @param {"g" | "ml" | "oz"} params.metric_serving_unit - Metric unit of measure for the serving size – either g or ml or oz – combined with metric_serving_amount to derive the total standardized quantity of the serving (where available).
     * @param {string} params.profile_reference_id - Provide unique reference for a profile.
     * @returns {Promise<ZenrealApiResponse<Profile>>} - A promise that resolves to the API response containing the created profile.
     */
    async create(params: {
        reference_id: string,
        food_name:string,
        serving_description: string,
        metric_serving_amount: number,
        metric_serving_unit: "g" | "ml" | "oz",
        profile_reference_id:string} ): Promise<ZenrealApiResponse<Food>>{
        return this.request<Food>(`/foods/custom`, {
            method: 'POST',
            body: JSON.stringify(params)
        })
    }

    /**
     * Delete custom food
     * This endpoint allows you to delete a custom food created by a profile.
     *
     * @param {string} profile_reference_id - Provide reference for the profile that the food belongs to.
     * @param {string} _id - The ID of the food to delete.
     * @returns {Promise<ZenrealApiResponse<void>>} - A promise that resolves to the API response indicating the deletion was successful.
     */
    async delete(profile_reference_id: string, _id: string): Promise<ZenrealApiResponse<Pick<Food, "_id">>>{
        return this.request<Pick<Food, "_id">>(`/foods/custom/${_id}`, {
            method: 'DELETE'
        });
    }


    /**
     * List favorite foods.
     * This endpoint allows you to list the favorite foods for the specified profile.
     * 
     * @param {string} profile_reference_id - The reference ID of the profile whose favorite foods to retrieve.
     * @returns {Promise<ZenrealApiResponse<Food[]>>} - A promise that resolves to the API response containing the list of favorite foods.
     */
    async getFavFood(profile_reference_id: string): Promise<ZenrealApiResponse<Food[]>> {
        return this.request<Food[]>(`/foods/favorites?profile_reference_id=${profile_reference_id}`);
    }

    // Favorite foods list with pagination

    /**
     * List favorite foods.
     * This endpoint allows you to list the favorite foods for the specified profile.
     * 
     * @param {string} profile_reference_id - The reference ID of the profile whose favorite foods to retrieve.
     * @param {PaginationParams} [params={}] - The pagination parameters for the request.
     * @returns {Promise<ZenrealApiResponse<Food[]>>} - A promise that resolves to the API response containing the list of favorite foods.
     */
    async getFavFoodPagenation(profile_reference_id: string, params: PaginationParams = {}): Promise<ZenrealApiResponse<Food[]>> {
        const queryParams = new URLSearchParams(params as Record<string, string>);
        queryParams.append('profile_reference_id', profile_reference_id);
        return this.request<Food[]>(`/foods/favorites?${queryParams.toString()}`);
    }


    /**
     * Add favorite food.
     * This endpoint allows you to add a food to a profile's favorite list.
     * @param {object} params - The parameters for adding a food to the favorite list.
     * @param {string} params.profile_reference_id - The reference ID of the profile.
     * @param {string} params._id - The ID of the food to add to the favorite list.
     * @returns {Promise<ZenrealApiResponse<Food>>} - A promise that resolves to the API response containing the added food.
     */
    async addFavFood(params: {profile_reference_id: string, _id: string}): Promise<ZenrealApiResponse<Food>> {
        return this.request<Food>(`/foods/favorites/${params._id}`, {
            method: 'POST',
            body: JSON.stringify(params)
        });
    }
    

    /**
     * Remove favorite food
     * This endpoint allows you to remove a food from a profile's favorite list.
     *
     * @param {object} params - The parameters for adding a food to the favorite list.
     * @param {string} params.profile_reference_id - The reference ID of the profile.
     * @param {string} params._id - The ID of the food to add to the favorite list.
     * @returns {Promise<ZenrealApiResponse<void>>} - A promise that resolves to the API response containing the deleted food.
     */
    async deleteFav(params:{profile_reference_id: string, _id: string}): Promise<ZenrealApiResponse<Pick<Food, "_id">>>{
        return this.request<Pick<Food, "_id">>(`/foods/custom/${params._id}`, {
            method: 'DELETE'
        });
    }


    /**
     * List recently eaten
     * This endpoint allows you to list the recently logged foods for the specified profile.
     * 
     * @param {string} profile_reference_id - The reference ID of the profile whose favorite foods to retrieve.
     * @param {PaginationParams} [params={}] - The pagination parameters for the request.
     * @returns {Promise<ZenrealApiResponse<Food[]>>} - A promise that resolves to the API response containing the list of recently eaten foods.
     */
    async getRecents(profile_reference_id: string, params: PaginationParams = {}): Promise<ZenrealApiResponse<Food[]>> {
        const queryParams = new URLSearchParams(params as Record<string, string>);
        queryParams.append('profile_reference_id', profile_reference_id);
        return this.request<Food[]>(`/foods/recently-eaten?${queryParams.toString()}`);
    }


    /**
     * List most eaten
     * This endpoint allows you to list the most logged foods in the past 30 day period for the specified profile.
     * 
     * @param {string} profile_reference_id - The reference ID of the profile whose favorite foods to retrieve.
     * @param {PaginationParams} [params={}] - The pagination parameters for the request.
     * @returns {Promise<ZenrealApiResponse<Food[]>>} - A promise that resolves to the API response containing the list of recently eaten foods.
     */
    async getMostEaten(profile_reference_id: string, params: PaginationParams = {}): Promise<ZenrealApiResponse<Food[]>> {
        const queryParams = new URLSearchParams(params as Record<string, string>);
        queryParams.append('profile_reference_id', profile_reference_id);
        return this.request<Food[]>(`/foods/most-eaten?${queryParams.toString()}`);
    }
 
}