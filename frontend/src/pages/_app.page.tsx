import { useRef, useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import '@/views/styles/sass/reset.scss';
import '@/views/styles/sass/base.scss';
import { ThemeTpl } from '~/views/components/templates/theme/theme.tpl';
import { AppProvider } from '@/views/context';

const App: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  const { asPath } = useRouter();
  const direction = asPath === '/' ? 'horizontal' : 'vertical';
  return (
    <AppProvider>
      <ThemeTpl>
        <Component {...pageProps} />
      </ThemeTpl>
    </AppProvider>
  );
};

export default App;
