/**
 * All macro-nutrients for the `Food`.
 */

export class MacroNutrients {
    /**
     * Energy content in kcal
     *
     * @type number
     */
    readonly energy_kcal: number;

    /**
     * Total fat content in grams
     *
     * @type number
     */
    readonly total_fat_in_gm: number;

    /**
     * Total carbohydrate content in grams
     *
     * @type number
     */
    readonly total_carbohydrates_in_gm: number;

    /**
     * Protein content in grams
     *
     * @type number
     */
    readonly total_protein_in_gm: number;

  
    constructor(data?: { [field: string]: any }) {
        this.energy_kcal = data?.energy_kcal ?? 0;
        this.total_fat_in_gm = data?.total_fat_in_gm ?? 0;
        this.total_carbohydrates_in_gm = data?.total_carbohydrates_in_gm ?? 0;
        this.total_protein_in_gm = data?.total_protein_in_gm ?? 0;
    }
}

/**
 * All vitamins for the `Food`.
 */
export class Vitamins {
    /**
     * Vitamin A content in micrograms (where available)
     *
     * @type number
     */
    readonly vitamin_a_in_mcg: number | null;

    /**
     * Vitamin B1 content in milligrams (where available)
     *
     * @type number
     */
    readonly vitamin_b1_in_mg: number | null;

    /**
     * Vitamin B2 content in milligrams (where available)
     *
     * @type number
     */
    readonly vitamin_b2_in_mg: number | null;

    /**
     * Vitamin B3 content in milligrams (where available)
     *
     * @type number
     */
    readonly vitamin_b3_in_mg: number | null;

    /**
     * Vitamin B5 content in milligrams (where available)
     *
     * @type number
     */
    readonly vitamin_b5_in_mg: number | null;


    /**
     * Vitamin B6 content in milligrams (where available)
     *
     * @type number
     */
    readonly vitamin_b6_in_mg: number | null;


    /**
     * Vitamin B12 content in micrograms (where available)
     *
     * @type number
     */
    readonly vitamin_b12_in_mcg: number | null;


    /**
     * Vitamin C content in milligrams (where available)
     *
     * @type number
     */
    readonly vitamin_c_in_mg: number | null;


    /**
     * Vitamin D content in IU (where available)
     *
     * @type number
     */
    readonly vitamin_d_in_iu: number | null;

    /**
     * Vitamin E content in milligrams (where available)
     *
     * @type number
     */
    readonly vitamin_e_in_mg: number | null;


    /**
     * Vitamin K content in micrograms (where available)
     *
     * @type number
     */
    readonly vitamin_k_in_mcg: number | null;


    /**
     * Folate content in micrograms (where available)
     *
     * @type number
     */
    readonly folate_in_mcg: number | null;


    constructor(data?: { [field: string]: any }) {
        this.vitamin_a_in_mcg = data?.vitamin_a_in_mcg ?? 0;
        this.vitamin_b1_in_mg = data?.vitamin_b1_in_mg ?? 0;
        this.vitamin_b2_in_mg = data?.vitamin_b2_in_mg ?? 0;
        this.vitamin_a_in_mcg = data?.vitamin_a_in_mcg ?? 0;
        this.vitamin_b3_in_mg = data?.vitamin_b3_in_mg ?? 0; 
        this.vitamin_b5_in_mg = data?.vitamin_b5_in_mg ?? 0;
        this.vitamin_b6_in_mg = data?.vitamin_b6_in_mg ?? 0;
        this.vitamin_b12_in_mcg = data?.vitamin_b12_in_mcg ?? 0;
        this.vitamin_c_in_mg = data?.vitamin_c_in_mg ?? 0;
        this.vitamin_d_in_iu = data?.vitamin_d_in_iu ?? 0;
        this.vitamin_e_in_mg = data?.vitamin_e_in_mg ?? 0;
        this.vitamin_k_in_mcg = data?.vitamin_k_in_mcg ?? 0;
        this.folate_in_mcg = data?.folate_in_mcg ?? 0;
    }

}

/**
 * All minerals for the `Food`.
 */

export class Minerals {
    /**
     * Sodium content in milligrams (where available)
     *
     * @type number
     */
    readonly sodium_in_mg: number | null;

    /**
     * Calcium content in milligrams (where available)
     *
     * @type number
     */
    readonly calcium_in_mg: number | null;

    /**
     * Iron content in milligrams (where available)
     *
     * @type number
     */
    readonly iron_in_mg: number | null;

    /**
     * Potassium content in milligrams (where available)
     *
     * @type number
     */
    readonly potassium_in_mg: number | null;

    /**
     * Copper content in milligrams (where available)
     *
     * @type number
     */
    readonly copper_in_mg: number | null;

    /**
     * Magnesium content in milligrams (where available)
     *
     * @type number
     */
    readonly magnesium_in_mg: number | null;

    /**
     * Zinc content in milligrams (where available)
     *
     * @type number
     */
    readonly zinc_in_mg: number | null;

    constructor(data?: { [field: string]: any }) {
       this.sodium_in_mg = data?.sodium_in_mg ?? 0;
       this.calcium_in_mg = data?.calcium_in_mg ?? 0;
       this.iron_in_mg = data?.iron_in_mg ?? 0;
       this.potassium_in_mg = data?.potassium_in_mg ?? 0;
       this.copper_in_mg = data?.copper_in_mg ?? 0;
       this.magnesium_in_mg = data?.magnesium_in_mg ?? 0;   
       this.zinc_in_mg = data?.zinc_in_mg ?? 0;
    }
}

/**
 * All carbohydrates for the `Food`.
 */

export class Carbohydrates {
    /**
     * Fiber content in grams (where available)
     *
     * @type number
     */
    readonly fiber_in_g: number | null;

    /**
     * Net carbs fat content in grams (where available)
     *
     * @type number
     */
    readonly net_carbs_in_g: number | null;

    /**
     * Starch content in grams (where available)
     *
     * @type number
     */
    readonly starch_in_g: number | null;

    /**
     * Sugars content in grams (where available)
     *
     * @type number
     */
    readonly sugars_in_g: number | null;

    /**
     * Added sugars content in grams (where available)
     *
     * @type number
     */
    readonly added_sugars_in_g: number | null;

  
    constructor(data?: { [field: string]: any }) {
        this.fiber_in_g = data?.fiber_in_g ?? 0;
        this.net_carbs_in_g = data?.net_carbs_in_g ?? 0;
        this.starch_in_g = data?.starch_in_g ?? 0; 
        this.sugars_in_g = data?.sugars_in_g ?? 0;
        this.added_sugars_in_g = data?.added_sugars_in_g ?? 0;
    }
}

/**
 * All lipids for the `Food`.
 */
export class Lipids {
    /**
     * Cholesterol content in milligrams (where available)
     *
     * @type number
     */
    readonly cholesterol_in_mg: number | null;

    /**
     * Monounsaturated fat content in grams (where available)
     *
     * @type number
     */
    readonly monounsaturated_fat_g: number | null;

    /**
     * Polyunsaturated fat content in grams (where available)
     *
     * @type number
     */
    readonly polyunsaturated_fat_g: number | null;

    /**
     * Trans fat content in grams (where available)
     *
     * @type number
     */
    readonly trans_fat_g: number | null;

    /**
     * Saturated fat content in grams (where available)
     *
     * @type number
     */
    readonly saturated_fat_g: number | null;

  
    constructor(data?: { [field: string]: any }) {
        this.cholesterol_in_mg = data?.cholesterol_in_mg ?? 0;
        this.monounsaturated_fat_g = data?.monounsaturated_fat_g ?? 0;
        this.polyunsaturated_fat_g = data?.polyunsaturated_fat_g ?? 0;
        this.trans_fat_g = data?.trans_fat_g ?? 0;
        this.saturated_fat_g = data?.saturated_fat_g ?? 0;
    }
}

/**
 * All proteins in the `food`.
 */
export class Proteins {
    /**
     * Cystine content in grams (where available)
     *
     * @type number
     */
    readonly cystine_in_g: number | null;

    /**
     * Histidine content in grams (where available)
     *
     * @type number
     */
    readonly histidine_in_g: number | null;

    /**
     * Isoleucine content in grams (where available)
     *
     * @type number
     */
    readonly isoleucine_in_g: number | null;

    /**
     * Leucine content in grams (where available)
     *
     * @type number
     */
    readonly leucine_in_g: number | null;

    /**
     * Methionine content in grams (where available)
     *
     * @type number
     */
    readonly methionine_in_g: number | null;

    /**
     * Phenylalanine content in grams (where available)
     *
     * @type number
     */
    readonly phenylalanine_in_g: number | null;

    /**
     * Threonine content in grams (where available)
     *
     * @type number
     */
    readonly threonine_in_g: number | null;

    /**
     * Tyrosine content in grams (where available)
     *
     * @type number
     */
    readonly tyrosine_in_g: number | null;

    /**
     * Valine content in grams (where available)
     *
     * @type number
     */
    readonly valine_in_g: number | null;
  
    constructor(data?: { [field: string]: any }) {
        this.cystine_in_g = data?.cystine_in_g ?? 0;
        this.histidine_in_g = data?.histidine_in_g ?? 0;
        this.isoleucine_in_g = data?.isoleucine_in_g ?? 0;
        this.leucine_in_g = data?.leucine_in_g ?? 0;
        this.methionine_in_g = data?.methionine_in_g ?? 0;
        this.phenylalanine_in_g = data?.phenylalanine_in_g ?? 0;
        this.threonine_in_g = data?.threonine_in_g ?? 0;
        this.tyrosine_in_g = data?.tyrosine_in_g ?? 0;
        this.valine_in_g = data?.valine_in_g ?? 0;
    }
}

/**
 * `Food` helps create custom or favorite list of foods that profiles can quickly add to their FoodDiary.
 */
export class Food {
    /**
     * Unique food identifier
     *
     * @type string
     */
    readonly _id: string;

    /**
     * Name of the food, not including the brand name. E.G.: "Instant Oatmeal"
     *
     * @type string
     */
    readonly food_name: string;

    /**
     * Takes the value `brand` or `generic`. Indicates whether the food is a brand or generic item
     *
     * @enum {'generic'|'brand'}
     */
    readonly food_type: "generic" | "brand";

    /**
     * Brand name, only when `food_type=brand`. E.G.: "Quaker"
     *
     * @type string
     */
    readonly brand_name: string | null;

    /**
     * Full description of the serving size. E.G.: "1 cup" or "100 g"
     *
     * @type string
     */
    readonly serving_description: string;

    /**
     * Metric quantity combined with `metric_serving_unit` to derive the total standardized quantity of the serving (where available)
     *
     * @type number
     */
    readonly metric_serving_amount: number;

    /**
     * Metric unit of measure for the serving size – either `g` or `ml` or `oz` – combined with `metric_serving_amount` to derive the total standardized quantity of the serving (where available)
     *
     * @enum {'g'|'ml'|'oz'}
     */
    readonly metric_serving_unit: "g" | "ml" | "oz";

    /**
     * General macro-nutrients for the food.
     *
     * @type MacroNutrients
     */
    readonly macro_nutrients: MacroNutrients;

    /**
     * Water content in grams
     *
     * @type number
     */
    readonly water_in_gm: number;

    /**
     * All vitamins in the food.
     *
     * @type Vitamins
     */
    readonly vitamins: Vitamins;

    /**
     * All minerals in the food.
     *
     * @type Minerals
     */
    readonly minerals: Minerals;

    /**
     * All applicable carbohydrates in the food.
     *
     * @type Carbohydrates
     */
    readonly carbohydrates: Carbohydrates;

    /**
     *All applicable lipids in the food.
     *
     * @type Lipids
     */
    readonly lipids: Lipids;

    /**
     *All applicable proteins in the food.
     *
     * @type Proteins
     */
    readonly proteins: Proteins;

    /**
     * If this is a custom `food` defined by a profile, there will be an reference_id of the profile.
     *
     * @type string
     */
    readonly profile_reference_id: string | null;

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
        this.food_name = data?.food_name ?? "";
        this.food_type = data?.food_type ?? "generic";
        this.brand_name = data?.brand_name ?? "";
        this.serving_description = data?.serving_description ?? "";
        this.metric_serving_amount = data?.metric_serving_amount ?? 0;
        this.metric_serving_unit = data?.metric_serving_unit ?? "g";
        this.macro_nutrients = new MacroNutrients(data?.macro_nutrients ?? {});
        this.water_in_gm = data?.water_in_gm ?? null;
        this.vitamins = new Vitamins(data?.vitamins ?? {});
        this.minerals = new Minerals(data?.minerals ?? {});
        this.carbohydrates = new Carbohydrates(data?.carbohydrates ?? {});
        this.lipids = new Lipids(data?.lipids ?? {});
        this.proteins = new Proteins(data?.proteins ?? {});
        this.profile_reference_id = data?.profile_reference_id ?? "";
        this.created_at = data?.created_at ?? new Date();
        this.updated_at = data?.updated_at ?? new Date();
    }
}