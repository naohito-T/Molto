import { useState, useEffect, useRef } from 'react';
import { NextComponentType, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Header, Footer } from '@/components/molecules/common';

type LayoutProps = {
  disableRightClick?: boolean; // 右クリックを禁止するか default false
  showFooter?: boolean;
  readonly children: Required<React.ReactNode>;
};

const Wrapper = styled.div`
  width: 100%;

  > .footer {
    height: 100vh;
  }
`;

export const Layout: NextComponentType<NextPageContext, null, LayoutProps> = ({
  disableRightClick = false,
  showFooter = true,
  children,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const layoutRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const onToggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', () => {
      setIsMenuOpen(false);
    });
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [router.asPath]);

  return (
    <Wrapper
      className='layout'
      data-testid='layout'
      id='main-container'
      ref={layoutRef}
      onContextMenu={(e) => disableRightClick && e.preventDefault()}
    >
      <Header isOpen={isMenuOpen} onToggleMenu={() => onToggleMenu()} />
      {children}
      {showFooter && <Footer className='footer' />}
    </Wrapper>
  );
};
