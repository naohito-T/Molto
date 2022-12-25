import { NextComponentType, NextPageContext } from 'next';
import { useEffect } from 'react';
import { AppGSAP } from '@/libs/animation/gsap/base';
import styled from 'styled-components';
import { Timeline } from '@/schemas';
import { Title } from '@/components/atoms/heading';
import { TimelineCard } from '@/components/atoms/card';
import { MediaSmallPC, MediaSP } from '~/styles/modules';

const Wrapper = styled.div`
  background-color: #1d1d1b;
  padding: 300px 0;
  overflow: hidden;

  .container {
    max-width: 1160px;
    width: 96%;
    margin: 0 auto;
    position: relative;

    ${MediaSmallPC`
      max-width: 960px;
    `}

    ${MediaSP`
      max-width: 750px;
    `}
  }

  .ag-timeline_item {
    margin: 0 0 50px;
    position: relative;
  }

  /* 偶数を右に配置する */
  .ag-timeline_item:nth-child(2n) {
    text-align: right;
  }

  .ag-timeline {
    display: inline-block;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;

    position: relative;
  }

  .ag-timeline_line {
    width: 2px;
    background-color: #393935;
    position: absolute;
    top: 2px;
    left: 50%;
    bottom: 0;
    overflow: hidden;
    transform: translateX(-50%);
  }

  .ag-timeline_line-progress {
    width: 100%;
    height: 20%;
    background-color: #ff0;
  }

  .ag-timeline-card_box {
    padding: 0 0 20px 50%;
  }
  .ag-timeline_item:nth-child(2n) .ag-timeline-card_box {
    padding: 0 50% 20px 0;
  }
  .ag-timeline-card_point-box {
    display: inline-block;
    margin: 0 14px 0 -28px;
  }
  .ag-timeline_item:nth-child(2n) .ag-timeline-card_point-box {
    margin: 0 -28px 0 14px;
  }
  .ag-timeline-card_point {
    height: 50px;
    line-height: 50px;
    width: 50px;
    border: 3px solid #ff0;
    background-color: #1d1d1b;
    text-align: center;
    font-family: 'ESL Legend', sans-serif;
    font-size: 20px;
    color: #fff;

    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
  .js-ag-active .ag-timeline-card_point {
    color: #1d1d1b;
    background-color: #ff0;
  }
  .ag-timeline-card_meta-box {
    display: inline-block;
  }
  .ag-timeline-card_meta {
    margin: 10px 0 0;

    font-family: 'ESL Legend', sans-serif;
    font-weight: bold;
    font-size: 28px;
    color: #ff0;
  }
  .ag-timeline-card_item {
    display: inline-block;
    width: 45%;
    margin: -77px 0 0;
    background-color: #282828;

    opacity: 0;
    border-radius: 6px;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.5);
    transition: transform 0.5s, opacity 0.5s;

    position: relative;
  }
  /* 奇数 */
  .ag-timeline_item:nth-child(2n + 1) .ag-timeline-card_item {
    transform: translateX(-200%);
  }
  /* 偶数 */
  .ag-timeline_item:nth-child(2n) .ag-timeline-card_item {
    transform: translateX(200%);
  }

  .ag-timeline-card_img {
    width: 100%;
  }
  .ag-timeline-card_info {
    padding: 20px 30px;
  }
  .ag-timeline-card_title {
    display: none;
    margin: 10px 0 0;
    font-family: 'ESL Legend', sans-serif;
    font-weight: bold;
    font-size: 28px;
    color: #ff0;
  }

  .ag-timeline-card_desc {
    line-height: 1.45;
    font-size: 16px;
    color: #fff;
  }

  @media only screen and (max-width: 979px) {
    .ag-timeline_line {
      left: 30px;
    }

    .ag-timeline_item:nth-child(2n) {
      text-align: left;
    }

    .ag-timeline-card_box,
    .ag-timeline_item:nth-child(2n) .ag-timeline-card_box {
      padding: 0 0 20px;
    }
    .ag-timeline-card_meta-box {
      display: none;
    }
    .ag-timeline-card_point-box,
    .ag-timeline_item:nth-child(2n) .ag-timeline-card_point-box {
      margin: 0 0 0 8px;
    }
    .ag-timeline-card_point {
      height: 40px;
      line-height: 40px;
      width: 40px;
    }
    .ag-timeline-card_item {
      width: auto;
      margin: -65px 0 0 75px;
    }
    .ag-timeline_item:nth-child(2n + 1) .ag-timeline-card_item,
    .ag-timeline_item:nth-child(2n) .ag-timeline-card_item {
      -webkit-transform: translateX(200%);
      -moz-transform: translateX(200%);
      -ms-transform: translateX(200%);
      -o-transform: translateX(200%);
      transform: translateX(200%);
    }
    .ag-timeline_item:nth-child(2n + 1) .ag-timeline-card_arrow {
      right: auto;
      left: 0;
    }
    .ag-timeline-card_title {
      display: block;
    }
    .ag-timeline-card_arrow {
      margin-top: 12px;
    }
  }
`;

type Props = {
  timelineList: Timeline[];
};

export const TimelineTpl: NextComponentType<NextPageContext, null, Props> = ({ timelineList }) => {
  useEffect(() => {
    AppGSAP.appGsap.registerEffect({
      name: 'fadeInForTimeLine',
      effect: (target: string, config: any) => {
        return AppGSAP.appGsap.to(target, {
          translateX: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: config.trigger,
            toggleActions: 'play reset resume reset',
            start: 'top center+=30%', // topとは、triggerとして設定した.containerのトップ部分を指していて、centerはブラウザ側の中央部分を指しています。
            end: config.end,
          },
        });
      },
    });

    AppGSAP.appGsap.effects.fadeInForTimeLine('#left_1', { trigger: '#left_1' });
    AppGSAP.appGsap.effects.fadeInForTimeLine('#left_2', { trigger: '#left_2' });
    AppGSAP.appGsap.effects.fadeInForTimeLine('#left_3', { trigger: '#left_3' });
    AppGSAP.appGsap.effects.fadeInForTimeLine('#left_4', { trigger: '#left_4' });
    AppGSAP.appGsap.effects.fadeInForTimeLine('#left_5', { trigger: '#left_5' });
    AppGSAP.appGsap.effects.fadeInForTimeLine('#left_6', { trigger: '#left_6' });
    AppGSAP.appGsap.effects.fadeInForTimeLine('#left_7', { trigger: '#left_7' });

    AppGSAP.appGsap.effects.fadeInForTimeLine('#right_1', { trigger: '#right_1' });
    AppGSAP.appGsap.effects.fadeInForTimeLine('#right_2', { trigger: '#right_2' });
    AppGSAP.appGsap.effects.fadeInForTimeLine('#right_3', { trigger: '#right_3' });
    AppGSAP.appGsap.effects.fadeInForTimeLine('#right_4', { trigger: '#right_4' });
    AppGSAP.appGsap.effects.fadeInForTimeLine('#right_5', { trigger: '#right_5' });
    AppGSAP.appGsap.effects.fadeInForTimeLine('#right_6', { trigger: '#right_6' });
  }, []);

  return (
    <Wrapper data-testid='timeline-tpl'>
      <Title>TimeLine</Title>

      <section className='section'>
        <div className='container'>
          <div className='ag-timeline'>
            <div className='ag-timeline_line'>
              <div className='ag-timeline_line-progress'></div>
            </div>
            <div className='ag-timeline_list'>
              <div className='ag-timeline_item'>
                <div className='ag-timeline-card_box'>
                  <div className='ag-timeline-card_point-box'>
                    <div className='ag-timeline-card_point'>1</div>
                  </div>
                  <div className='ag-timeline-card_meta-box'>
                    <div className='ag-timeline-card_meta'>Season 13</div>
                  </div>
                </div>
                <TimelineCard
                  className='ag-timeline-card_item'
                  id='left_1'
                  img='/images/default/winter.webp'
                  title='Season 13'
                  desc='Webエンジニアとして会社に属しながら働く。'
                />
              </div>

              <div className='ag-timeline_item'>
                <div className='ag-timeline-card_box'>
                  <div className='ag-timeline-card_meta-box'>
                    <div className='ag-timeline-card_meta'>Season 12</div>
                  </div>
                  <div className='ag-timeline-card_point-box'>
                    <div className='ag-timeline-card_point'>2</div>
                  </div>
                </div>
                <TimelineCard
                  className='ag-timeline-card_item'
                  id='right_1'
                  img='/images/default/autumn.webp'
                  title='Season 12'
                  desc='Webエンジニアとして会社に属しながら働く。'
                />
              </div>
              <div className='ag-timeline_item'>
                <div className='ag-timeline-card_box'>
                  <div className='ag-timeline-card_point-box'>
                    <div className='ag-timeline-card_point'>3</div>
                  </div>
                  <div className='ag-timeline-card_meta-box'>
                    <div className='ag-timeline-card_meta'>Season 11</div>
                  </div>
                </div>
                <TimelineCard
                  className='ag-timeline-card_item'
                  id='left_2'
                  img='/images/default/summer.webp'
                  title='Season 11'
                  desc='Webエンジニアとして会社に属しながら働く。'
                />
              </div>
              <div className='ag-timeline_item'>
                <div className='ag-timeline-card_box'>
                  <div className='ag-timeline-card_meta-box'>
                    <div className='ag-timeline-card_meta'>Season 10</div>
                  </div>
                  <div className='ag-timeline-card_point-box'>
                    <div className='ag-timeline-card_point'>4</div>
                  </div>
                </div>
                <TimelineCard
                  className='ag-timeline-card_item'
                  id='right_2'
                  img='/images/default/spring.webp'
                  title='Season 10'
                  desc='Webエンジニアとして会社に属しながら働く。'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
