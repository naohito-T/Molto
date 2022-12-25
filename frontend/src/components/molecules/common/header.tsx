import { NextComponentType, NextPageContext } from 'next';
// import dynamic from 'next/dynamic';
import Link from 'next/link';
import styled from 'styled-components';

// import { Hamburger } from '@/components/atoms/button';
// import { CircleBounceType } from '@/components/molecules/animation';
import { displayFlex, MediaSP } from '@/styles/modules';

// const CircleBounce = dynamic<CircleBounceType>(
//   () => import('@/components/molecules/animation').then((module) => module.CircleBounce),
//   { ssr: false },
// );

type Props = {
  className?: string;
  isOpen: boolean;
  onToggleMenu: () => void;
};

const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  height: 80px;
  background: transparent;
  z-index: 10;
  user-select: none;
`;

const ItemWrap = styled.div`
  ${displayFlex({ justifyContent: 'space-between', flexDirection: 'row' })};
  height: 100%;

  .item {
    ${displayFlex({ justifyContent: 'space-between', flexDirection: 'row' })};
    padding-left: 0.8rem;

    .logo-title {
      color: ${(props) => props.theme.white};
      margin: 0 1rem;

      ${MediaSP`
        font-size: 1rem;
        font-weight: bold;
      `}
    }
  }

  .hamburger {
    margin: 0 1rem;
  }
`;

export const Header: NextComponentType<NextPageContext, null, Props> = ({
  className = '',
  isOpen,
  onToggleMenu,
}) => {
  return (
    <Wrapper className={className} data-testid='header'>
      <ItemWrap>
        <div className='item'>
          {/* <CircleBounce id='circle-bounce' /> */}
          <Link href={'/'} passHref>
            <a>
              <h1 className='logo-title'>naohito-T</h1>
            </a>
          </Link>
        </div>
        {/* <Hamburger className='hamburger' isOpen={isOpen} onToggleMenu={onToggleMenu} /> */}
      </ItemWrap>
    </Wrapper>
  );
};
