import { NextComponentType, NextPageContext } from 'next';
import { useEffect } from 'react';
import { AppGSAP } from '@/libs/animation/gsap/base';
import styled from 'styled-components';
import { Timeline } from '@/schemas';
import { TimelineCard } from '@/components/atoms/card';

const Wrapper = styled.section``;

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
    <Wrapper className='ag-section'>
      <div className='ag-format-container'>
        <div className='ag-timeline'>
          <div className='ag-timeline_line'>
            <div className='ag-timeline_line-progress'></div>
          </div>
          <div className='ag-timeline_list'>
            {timelineList.map((t, i) => {
              return (
                <div className='ag-timeline_item' key={t.id}>
                  <div className='ag-timeline-card_box'>
                    <div className='ag-timeline-card_point-box'>
                      <div className='ag-timeline-card_point'>{t.title}</div>
                    </div>
                    <div className='ag-timeline-card_meta-box'>
                      <div className='ag-timeline-card_meta'>{t.projectPeriod}</div>
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
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
