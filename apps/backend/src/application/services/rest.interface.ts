export interface IRestService {
  post<T>(url: string, options: Record<string, any>): Promise<T>;
}
