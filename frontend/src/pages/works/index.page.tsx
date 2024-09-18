import type { NextPage, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { WorksTpl, Layout } from '~/views/components/templates';
import { Meta } from '~/views/components/molecules/common';
import { fullPath } from '~/views/hooks/helper';

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Works: NextPage<Props> = () => {
  const { asPath } = useRouter();
  return (
    <>
      <Meta pageFullPath={fullPath(asPath)} pageAsPath={asPath} />
      <Layout disableRightClick={true}>
        <WorksTpl />
      </Layout>
    </>
  );
};

export default Works;
