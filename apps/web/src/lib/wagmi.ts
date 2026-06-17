import { createConfig, http } from "wagmi";
import { base } from "viem/chains";
import { coinbaseWallet } from "wagmi/connectors";

export const wagmiConfig = createConfig({
  chains: [base],
  connectors: [
    coinbaseWallet({
      appName: "SeaBattle",
      appLogoUrl: "https://seabattle.xyz/favicon.svg",
      preference: { options: "smartWalletOnly" },
    }),
  ],
  transports: {
    [base.id]: http("https://api.developer.coinbase.com/rpc/v1/base/kJtWgEgTe48SfOnALxdHmoEkoGFCETFu"),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof wagmiConfig;
  }
}
