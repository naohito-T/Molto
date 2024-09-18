import type { NextComponentType, NextPageContext } from 'next';
import { RLSProvider } from './rls.context';

type Props = {
  readonly children: Required<React.ReactNode>;
};

export const AppProvider: NextComponentType<NextPageContext, null, Props> = ({ children }) => {
  return <RLSProvider>{children}</RLSProvider>;
};
