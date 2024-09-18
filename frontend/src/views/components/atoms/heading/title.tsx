import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';

type Props = {
  className?: string;
  readonly children: Required<React.ReactNode>;
};

const Wrapper = styled.div`
  letter-spacing: 0.05rem;
  text-align: center;

  .title {
    color: #fff;
  }
`;

export const Title: NextComponentType<NextPageContext, null, Props> = ({
  className = '',
  children,
}) => {
  return (
    <Wrapper className={className}>
      <h2 className='title'>{children}</h2>
    </Wrapper>
  );
};
