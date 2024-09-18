import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';
import { ConstraintMetaConfig } from '@/configs';

type Props = {
  className?: string;
  size: string;
};

const Wrapper = styled.p<Omit<Props, 'className'>>`
  font-size: ${(props) => props.size};
  letter-spacing: 0.05rem;
`;

export const Copyright: NextComponentType<NextPageContext, null, Props> = ({
  className = '',
  size,
}) => {
  return (
    <Wrapper className={className} size={size}>
      <small>{ConstraintMetaConfig.COPYRIGHT}</small>
    </Wrapper>
  );
};
