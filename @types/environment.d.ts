declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PRIV_KEY: string;
      PUB_KEY: string;
    }
  }
}

export {};
