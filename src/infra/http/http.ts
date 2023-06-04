
export interface HTTPClient {
    get <T>(urlParams?: string): Promise<T | undefined>;
    post <T>(content: T, urlParams?: string): Promise<void>;
    put <T>(content: T, urlParams?: string): Promise<void>;
    delete (urlParams: string): Promise<void>;
}