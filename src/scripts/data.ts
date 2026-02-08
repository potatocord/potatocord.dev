import { PLUGINS_JSON_URL, PLUGIN_READMES_JSON_URL } from "./constants";
import type { PluginData } from "./types";

export async function fetchPlugins() {
    try {
        const res = await fetch(PLUGINS_JSON_URL);
        if (!res.ok) {
            console.error("Failed to fetch plugins.json: " + res.status);
            return [];
        }

        return res.json() as Promise<PluginData[]>;
    } catch (e) {
        console.error("Failed to fetch plugins:", e);
        return [];
    }
}

export async function fetchPluginReadme(plugin: string) {
    const res = await fetch(PLUGIN_READMES_JSON_URL);
    if (!res.ok)
        throw new Error("Failed to fetch plugin-readmes.json: " + res.status);

    const readmes = await res.json<any>();
    return readmes[plugin] as string | undefined;
}
