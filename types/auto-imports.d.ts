// Minimal ambient declarations for common Nuxt auto-imported helpers and project convenience
// These are intentionally permissive (any) to unblock TypeScript checks in typical Nuxt 3 projects.

declare const defineNuxtConfig: any;
declare function defineNuxtPlugin(cb: any): any;
declare function defineNuxtRouteMiddleware(cb: any): any;
declare function defineI18nConfig(cb: any): any;

declare function useFetch(...args: any[]): any;
declare function useApiFetch(...args: any[]): any;
declare function useNuxtApp(): any;
declare type Ref<T = any> = { value: T };
declare function useState<T = any>(key: string, init?: T | (() => T)): Ref<T>;
declare function useHead(...args: any[]): any;
declare function navigateTo(...args: any[]): any;
declare function useRuntimeConfig(): any;
declare type NitroFetchRequest = any;
declare type NitroFetchOptions<T = any> = any;
declare function useRequestHeaders(names?: string[]): any;
declare function useCookie(name?: string, opts?: any): any;
declare function useRequestEvent(): any;

// Pinia
declare function defineStore(...args: any[]): any;

// Provider-specific declarations (project-level placeholders)
declare function useAuthStore(): any;
declare function useApiFetch<T = any>(...args: any[]): Promise<T>;

// Vite/Nuxt environment flag
interface ImportMeta {
  readonly browser?: boolean;
}
