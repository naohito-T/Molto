import { NextComponentType, NextPageContext } from 'next';
import Image from 'next/image';
import styled from 'styled-components';
import { MediaSP } from '~/styles/modules';

const Wrapper = styled.div`
  .img-box {
    position: relative;
    width: 100%;
    height: 360px;

    ${MediaSP`
      height: 240px;
    `}
  }
`;

type Props = {
  className?: string;
  id?: string;
  img: string;
  title: string;
  desc: string;
};

export const TimelineCard: NextComponentType<NextPageContext, null, Props> = ({
  className = '',
  id = '',
  img,
  title,
  desc,
}) => {
  return (
    <Wrapper className={className} id={id} data-testid='timeline-card'>
      <div className='ag-timeline-card_inner'>
        <div className='img-box'>
          <Image
            className='ag-timeline-card_img'
            src={img}
            layout='fill'
            objectFit='cover'
            alt={title}
          />
        </div>
        <div className='ag-timeline-card_info'>
          <div className='ag-timeline-card_title'>{title}</div>
          <div className='ag-timeline-card_desc'>{desc}</div>
        </div>
      </div>
    </Wrapper>
  );
};
