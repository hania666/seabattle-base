# Abstract Development Guidelines

## Chain
- Mainnet: `abstract` (chainId 2741) from viem/chains
- Testnet: `abstractTestnet` (chainId 11124) from viem/chains

## AGW Priority Order
1. `@abstract-foundation/agw-react` hooks
2. `@abstract-foundation/agw-client` utilities  
3. Wagmi hooks (useAccount, useBalance, useWriteContract etc.)
4. Viem clients

## Common Issues
- "must be called within a wagmi provider" → wrap in AbstractWalletProvider
- AbstractWalletProvider includes WagmiProvider + QueryClientProvider automatically
