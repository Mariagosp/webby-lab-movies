export {};

declare global {
  interface Window {
    env: {
      API_URL: string;
      [key: string]: string | undefined;
    };
  }
}