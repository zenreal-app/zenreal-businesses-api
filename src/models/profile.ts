/**
 * `Profile` serves as the primary means of identifying and storing nutrition data for your users.
 */
export class Profile {
    /**
     * Unique identifier for the profile.
     *
     * @type string
     */
    readonly _id: string;

    /**
     * Unique identifier for the profile provided by you.
     *
     * @type string
     */
    readonly reference_id: string;

    /**
     * Checks if the profile has logged into the `FoodDiary` during the current
     *
     * @type boolean
     */
    readonly is_active: boolean;

    /**
     * Resource Created At
     *
     * @type Date
     */
    readonly created_at: Date;

    /**
     * Resource Updated At
     *
     * @type Date
     */
    readonly updated_at: Date;

    constructor(data?: { [field: string]: any }) {
        this._id = data?._id ?? "";
        this.reference_id = data?.reference_id ?? "";
        this.is_active = data?.is_active ?? false;
        this.created_at = data?.created_at ?? new Date();
        this.updated_at = data?.updated_at ?? new Date();
    }

}