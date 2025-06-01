import { Injectable } from '@nestjs/common';
import { fetch } from 'undici';

@Injectable()
export class RestService {
  constructor() {}

  async post<T>(
    url: string,
    body: any,
    headers: Record<string, string> = {},
  ): Promise<T> {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      return data as T;
    } catch (err) {
      console.error(`Request to ${url} failed`, err);
      throw err;
    }
  }
}
