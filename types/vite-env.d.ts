/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** 环境 */
  readonly VITE_APP_MODE: string;
  /** APP名称 */
  readonly VITE_APP_TITLE: string;
  /** 网站前缀 */
  readonly VITE_BASE_URL: string;
  /** base api */
  readonly VITE_BASE_API: string;
  /** mock api */
  readonly VITE_MOCK_API: string;
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
