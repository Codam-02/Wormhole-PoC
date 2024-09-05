import React, { useEffect, useState } from "react";
import './App.css';
import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES, WEB3AUTH_NETWORK } from "@web3auth/base";
import { SolanaWallet, SolanaPrivateKeyProvider } from "@web3auth/solana-provider";

const clientId = "BGdt3Ny7JC8-pWutbt9c-FD9XeLhi3tcEaQ2T5BFm6stueZ0BhhWI3GsiqbsIj7xuI4xuoJN6DOzgHUYiolh8Ss";

function App() {
  const [web3auth, setWeb3auth] = useState(null);
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    const initWeb3Auth = async () => {
      try {
        const chainConfig = {
          chainNamespace: CHAIN_NAMESPACES.SOLANA,
          chainId: "0x2",
          rpcTarget: "https://api.testnet.solana.com",
          displayName: "Solana Testnet",
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
        const solanaProvider = new SolanaWallet(provider);
        const userAddress = await solanaProvider.requestAccounts();
        setWalletAddress(userAddress[0]);
      } catch (error) {
        console.error("Error initializing Web3Auth:", error);
      }
    };

    initWeb3Auth();
  }, []);

  return (
    <div className="container">
      <div className="box">
        {walletAddress ? (
          <div>
            <h3>Your Solana Wallet Address:</h3>
            <p>{walletAddress}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;
