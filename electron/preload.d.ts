import { electronAPI } from "@electron-toolkit/preload";

export type IpcApiResponse<T = void> = Promise<{
  success: boolean;
  data?: T;
  message?: string;
}>;

// 현재는 빈 객체이지만, 나중에 메서드가 추가될 수 있음
export type Api = Record<string, never>;

declare global {
  interface Window {
    electron: typeof electronAPI;
    api: Api;
  }
}
