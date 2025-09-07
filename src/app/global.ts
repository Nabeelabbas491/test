export {};

declare global {
  interface Window {
    AndroidBridge?: {
      launchAttendance: (payload: string) => void;
    };
  }
}
