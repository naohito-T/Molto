import { NextPage } from 'next';
import type { AppProps } from 'next/app';
// css reset & base
import '@/styles/sass/reset.scss';
import '@/styles/sass/base.scss';
import { ThemeTpl } from '@/components/templates/theme/theme.tpl';

const App: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeTpl>
      <Component {...pageProps} />
    </ThemeTpl>
  );
};

export default App;
