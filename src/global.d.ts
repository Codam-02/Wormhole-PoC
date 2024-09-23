
interface Window {
    solana?: {
      isPhantom?: boolean;
      request: (args: { method: string, params?: any[] }) => Promise<any>;
      on: (event: string, handler: (...args: any[]) => void) => void;
      connect: () => Promise<{ publicKey: string }>;
      disconnect: () => void;
    };
  }
  