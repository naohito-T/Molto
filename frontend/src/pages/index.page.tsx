import type { NextPage, InferGetStaticPropsType } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { Layout, TopTplProps } from '@/components/templates';
import { Meta } from '@/components/molecules/common';
import { fullPath } from '@/hooks/helper';

// const TopTpl = dynamic<TopTplProps>(
//   () => import('@/components/templates/top/top.tpl').then((module) => module.TopTpl),
//   {
//     ssr: false,
//   },
// );

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Top: NextPage<Props> = ({}) => {
  const { asPath } = useRouter();
  return (
    <>
      <Meta pageFullPath={fullPath(asPath)} pageAsPath={asPath} />
      <Layout showFooter={true} disableRightClick={true}>
        {/* <TopTpl /> */}
      </Layout>
    </>
  );
};

export default Top;
