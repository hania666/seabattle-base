import { createConfig, http } from "wagmi";
import { baseSepolia } from "viem/chains";
import { coinbaseWallet } from "wagmi/connectors";

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

declare module "wagmi" {
  interface Register {
    config: typeof wagmiConfig;
  }
}
