import { NextComponentType, NextPageContext } from 'next';

import styled from 'styled-components';

const Wrapper = styled.div``;

export const AboutTpl: NextComponentType<NextPageContext> = () => {
  return <Wrapper data-testid='about-tpl'></Wrapper>;
};
