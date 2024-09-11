import React, { useEffect, useState } from "react";
import './App.css';
import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES, IProvider, WEB3AUTH_NETWORK } from "@web3auth/base";
import { SolanaWallet, SolanaPrivateKeyProvider } from "@web3auth/solana-provider";
import WormholeConnect, { WormholeConnectConfig } from '@wormhole-foundation/wormhole-connect';

const clientId = "BGdt3Ny7JC8-pWutbt9c-FD9XeLhi3tcEaQ2T5BFm6stueZ0BhhWI3GsiqbsIj7xuI4xuoJN6DOzgHUYiolh8Ss";

const config: WormholeConnectConfig = {
  env: "testnet",
  networks: ["sepolia", "solana"],
  tokens: ["USDCsepolia", "USDCsol"],
  rpcs: {
    sepolia: "https://sepolia.infura.io/v3/060fcd8bc2ae459c99523251e06536b3",
    solana: "https://solana-devnet.gateway.tatum.io/",
  }
};

function App() {
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  const [provider, setProvider] = useState<IProvider | null>(null);
  const [walletAddress, setWalletAddress] = useState("");
  const [solBalance, setSolBalance] = useState(0);
  const [usdcBalance, setUsdcBalance] = useState(0);
  const [showWormhole, setShowWormhole] = useState(false);

  useEffect(() => {
    const initWeb3Auth = async () => {
      try {
        const chainConfig = {
          chainNamespace: CHAIN_NAMESPACES.SOLANA,
          chainId: "0x3",
          rpcTarget: "https://api.devnet.solana.com",
          displayName: "Solana Devnet",
          blockExplorerUrl: "https://explorer.solana.com",
          ticker: "SOL",
          tickerName: "Solana",
          logo: "https://images.toruswallet.io/solana.svg",
        };
        const privateKeyProvider = new SolanaPrivateKeyProvider({
          config: { chainConfig: chainConfig },
        });
        const web3authInstance = new Web3Auth({
          clientId,
          web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
          privateKeyProvider: privateKeyProvider,
        });

        await web3authInstance.initModal();
        setWeb3auth(web3authInstance);

        const provider = await web3authInstance.connect();
        let typedProvider: IProvider | undefined;
        if (provider) {
          typedProvider = provider;
        }
        else {
          console.error('Failed to connect. Provider is null.');
          return;
        }
        
        const solanaProvider = new SolanaWallet(typedProvider);
        const userAddress = await solanaProvider.requestAccounts();
        setWalletAddress(userAddress[0]);

        const solBalance = 666;
        // -/-/-/-/-/-/-/-/-/-/-/
        setSolBalance(solBalance);
        // -/-/-/-/-/-/-/-/-/-/-/

        const usdcBalance = 999;
        // -/-/-/-/-/-/-/-/-/-/-/
        setUsdcBalance(usdcBalance);
        // -/-/-/-/-/-/-/-/-/-/-/

      } catch (error) {
        console.error("Error initializing Web3Auth:", error);
      }
    };

    initWeb3Auth();
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1>My Crypto App</h1>
      </header>
      <div className="content">
        {walletAddress ? (
          <>
            <div className="wallet-info">
              <h3>Welcome!</h3>
              <p><strong>Address:</strong> {walletAddress}</p>
              <p><strong>SOL Balance:</strong> {solBalance} SOL</p>
              <p><strong>USDC Balance:</strong> {usdcBalance} USDC</p>
              <button onClick={() => setShowWormhole(true)} className="button">
                Deposit from Ethereum
              </button>
            </div>
            {showWormhole && (
              <div className="wormhole-container">
                <WormholeConnect config={config} />
              </div>
            )}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;
