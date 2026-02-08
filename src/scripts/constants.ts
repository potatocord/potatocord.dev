
export const GITHUB_URL = "https://github.com/potatocord/potatocord";
export const SOURCE_CODE = "https://github.com/potatocord/vencord.dev";
export const SPONSOR_URL = "https://github.com/sponsors/potatocord";

export const DOWNLOAD_BASE =
    "https://github.com/potatocord/Installer/releases/latest/download/";

export const PLUGINS_JSON_URL =
    "https://raw.githubusercontent.com/potatocord/builds/main/plugins.json";
export const PLUGIN_READMES_JSON_URL =
    "https://raw.githubusercontent.com/potatocord/builds/main/plugin-readmes.json";

export const IS_SERVER = import.meta.env.SSR;

export const enum StatusCodes {
    MovedPermanently = 301,
    Found = 302,
    SeeOther = 303,
}
