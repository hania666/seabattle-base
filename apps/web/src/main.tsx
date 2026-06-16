import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createConfig, http, WagmiProvider } from "wagmi";
import { baseSepolia } from "viem/chains";
import { coinbaseWallet } from "wagmi/connectors";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ToastProvider } from "./components/ui";

const queryClient = new QueryClient();

export const wagmiConfig = createConfig({
  chains: [baseSepolia],
  connectors: [
    coinbaseWallet({
      appName: "SeaBattle",
      appLogoUrl: "https://seabattle.xyz/favicon.svg",
      preference: "smartWalletOnly",
    }),
  ],
  transports: {
    [baseSepolia.id]: http("https://api.developer.coinbase.com/rpc/v1/base-sepolia/kJtWgEgTe48SfOnALxdHmoEkoGFCETFu"),
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <ToastProvider>
          <App />
        </ToastProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>,
);
