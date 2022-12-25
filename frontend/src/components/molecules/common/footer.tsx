import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';
import { displayFlex, MediaSP } from '~/styles/modules';
import { Copyright } from '@/components/atoms';

type Props = {
  className?: string;
};

const Wrapper = styled.footer`
  height: 100%;
  background-color: ${(props): string => props.theme.black};
  color: ${(props): string => props.theme.descColor};

  .footer-inner {
    ${displayFlex({ justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row' })};
    height: 90%;
  }

  .footer-mail {
    ${displayFlex({})};

    .mail-text {
      ${MediaSP`
      font-size: 1.5rem;
    `}
    }
  }

  .footer-copyright {
    height: 10%;
    text-align: center;
  }
`;

export const Footer: NextComponentType<NextPageContext, null, Props> = ({ className = '' }) => {
  return (
    <Wrapper id='footer' className={className} data-testid='footer'>
      <div className='footer-inner'>
        <div className='footer-mail'>
          <h2>WORK CONTACT</h2>
          <h2>NAOHITO-T</h2>
        </div>
      </div>
      <Copyright className='footer-copyright' size='1rem' />
    </Wrapper>
  );
};
