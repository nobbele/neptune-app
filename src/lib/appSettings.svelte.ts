import { browser } from "$app/environment";
import { getContext, setContext } from "svelte";

export type Theme = 'dark' | 'light';

export class AppSettingsState {
    private _theme: Theme | 'system' = $state('dark')

    constructor() {
        if (!browser) return

        const stored = JSON.parse(localStorage.getItem('appSettings') ?? "{}")
        if (stored) {
            this._theme = stored.theme ?? 'system'
        }

        $effect(() => {
            localStorage.setItem('appSettings', JSON.stringify({
                theme: this._theme
            }))
        })
    }

    get theme(): Theme {
        return this._theme != 'system'
            ? this._theme
            : window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
    }
    set theme(value: Theme | 'system') { this._theme = value }
}

export function initAppSettings() {
    return setContext('appSettings', new AppSettingsState())
}

export function getAppSettings() {
    return getContext<AppSettingsState>('appSettings')
}