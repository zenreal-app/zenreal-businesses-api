export interface ZenrealApiConfig {
    api_key: string;
}

export interface ZenrealApiResponse<T> {
    data: T;
    status: number;
}

export interface PaginationParams {
    page?: number;
    limit?: number;
}