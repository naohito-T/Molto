import type { NextPage, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { TimelineTpl, Layout } from '~/views/components/templates';
import { Meta } from '~/views/components/molecules/common';
import { fullPath } from '~/views/hooks/helper';
import { GuestAPI } from '@/apis/containers';

export const getStaticProps = async () => {
  const timelineList = await GuestAPI.fetchTimelineList();

  return {
    props: {
      timelineList,
    },
  };
};
type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Timeline: NextPage<Props> = ({ timelineList }) => {
  const { asPath } = useRouter();
  return (
    <>
      <Meta pageFullPath={fullPath(asPath)} pageAsPath={asPath} />
      <Layout disableRightClick={true}>
        <TimelineTpl timelineList={timelineList} />
      </Layout>
    </>
  );
};

export default Timeline;
