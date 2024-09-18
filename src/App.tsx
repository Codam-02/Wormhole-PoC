import React, { useEffect, useState } from "react";
import './App.css';
import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES, IProvider, WEB3AUTH_NETWORK } from "@web3auth/base";
import { SolanaWallet, SolanaPrivateKeyProvider } from "@web3auth/solana-provider";
import WormholeConnect, { WormholeConnectConfig } from '@wormhole-foundation/wormhole-connect';
import { Connection, PublicKey } from "@solana/web3.js";
import { getAccount, getAssociatedTokenAddress } from "@solana/spl-token";

const clientId = "BKCkDLnIVQf1_q2VzT4Hz2B5g7HJOLoJ0Eb2HdawWci2dA3F5bhHyow6_tS7gFLq-LqAtfGW9lZj0FApTyZF5Uc";

const USDC_DEVNET_MINT_ADDRESS = "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU"; 

const config: WormholeConnectConfig = {
  env: "testnet",
  networks: ["sepolia", "solana"],
  tokens: ["USDCsepolia", "USDCsol"],
  rpcs: {
    sepolia: "https://sepolia.infura.io/v3/060fcd8bc2ae459c99523251e06536b3",
    solana: "https://api.devnet.solana.com",
  }
};

function App() {
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  const [walletAddress, setWalletAddress] = useState("");
  const [solBalance, setSolBalance] = useState(0);
  const [usdcBalance, setUsdcBalance] = useState(0);
  const [showWormhole, setShowWormhole] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const connection = new Connection("https://api.devnet.solana.com");

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
        } else {
          console.error('Failed to connect. Provider is null.');
          return;
        }

        const solanaProvider = new SolanaWallet(typedProvider);
        const userAddress = await solanaProvider.requestAccounts();
        const userPublicKey = new PublicKey(userAddress[0]);
        setWalletAddress(userAddress[0]);

        const solBalance = await connection.getBalance(userPublicKey);
        setSolBalance(solBalance / 1e9);

        const usdcMint = new PublicKey(USDC_DEVNET_MINT_ADDRESS);
        const usdcTokenAddress = await getAssociatedTokenAddress(usdcMint, userPublicKey);

        try {
          const usdcAccount = await getAccount(connection, usdcTokenAddress);
          setUsdcBalance(Number(usdcAccount.amount) / 1e6);
        } catch (error) {
          console.log("User does not have a USDC account on Devnet.");
          setUsdcBalance(0);
        }

      } catch (error) {
        console.error("Error initializing Web3Auth:", error);
      }
    };

    initWeb3Auth();
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const shortenAddress = (address: string) => {
    return address.slice(0, 4) + '...' + address.slice(-4);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Wormhole PoC</h1>
      </header>
      <div className="content">
        {walletAddress ? (
          <>
            <div className="wallet-info">
              <h3>Welcome!</h3>
              <p>
                <strong>Address:</strong>{" "}
                <span className="wallet-address" onClick={copyToClipboard}>
                  {shortenAddress(walletAddress)}
                </span>
                {copySuccess && <span className="copy-success">Copied!</span>}
              </p>
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
