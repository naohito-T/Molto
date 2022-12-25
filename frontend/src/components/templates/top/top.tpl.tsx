import { useEffect } from 'react';
import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';
import { main } from '@/libs/animation/inertial';


export type TopTplProps = {};

/** 全体の設定 */
const Wrapper = styled.div`
  width: 100%;
  background: ${(props): string => props.theme.white};
`;

const TopSection = styled.section``;

export const TopTpl: NextComponentType<NextPageContext, null, TopTplProps> = ({}) => {
  useEffect(() => {
    main();
  }, []);

  return (
    <Wrapper className='js-inertial-scroll' data-testid='top-tpl'>
      <div className='content js-inertial-scroll_content'>
        <ul>
          <li>
            <img
              src='https://images.pexels.com/photos/96428/pexels-photo-96428.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260'
              alt=''
              loading='lazy'
            />
          </li>
          <li>
            <img
              src='https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260'
              alt=''
              loading='lazy'
            />
          </li>
          <li>
            <img
              src='https://images.pexels.com/photos/1560424/pexels-photo-1560424.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260'
              alt=''
              loading='lazy'
            />
          </li>
          <li>
            <img
              src='https://images.pexels.com/photos/3687957/pexels-photo-3687957.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260'
              alt=''
              loading='lazy'
            />
          </li>
          <li>
            <img
              src='https://images.pexels.com/photos/4587959/pexels-photo-4587959.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260'
              alt=''
              loading='lazy'
            />
          </li>
          <li>
            <img
              src='https://images.pexels.com/photos/1440406/pexels-photo-1440406.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260'
              alt=''
              loading='lazy'
            />
          </li>
          <li>
            <img
              src='https://images.pexels.com/photos/4492150/pexels-photo-4492150.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260'
              alt=''
              loading='lazy'
            />
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};
