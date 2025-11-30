/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_COUNTRY?: 'ID' | 'MY' | 'SG';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
