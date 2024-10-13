/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_SCOREBOARD_BASEURL: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}