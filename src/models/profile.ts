export class Profile {
    readonly _id: string;
    readonly reference_id: string;
    readonly is_active: boolean;
    readonly created_at: Date;
    readonly updated_at: Date;

    constructor(
        _id: string,
        reference_id: string,
        is_active: boolean,
        created_at: Date,
        updated_at: Date
    ) {
        this._id = _id;
        this.reference_id = reference_id;
        this.is_active = is_active;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

}