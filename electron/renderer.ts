// TODO: 파일 전체 수정

// 전역 타입 선언
declare global {
  interface Window {
    electronAPI: {
      send: (channel: string, data: unknown) => void;
      on: (channel: string, callback: (data: unknown) => void) => void;
    };
  }
}

export {};
