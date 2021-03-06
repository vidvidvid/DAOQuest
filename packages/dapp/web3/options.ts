import WalletConnectProvider from '@walletconnect/web3-provider';
import { IProviderOptions } from 'web3modal';

import { NETWORK_INFO } from './networks';

const providerOptions: IProviderOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: Object.fromEntries(
        Object.entries(NETWORK_INFO).map(([id, { rpc }]) => [Number(id), rpc]),
      ),
    },
  },
};

export const WEB3_MODAL_OPTIONS = {
  cacheProvider: true,
  providerOptions,
  theme: 'dark',
};
