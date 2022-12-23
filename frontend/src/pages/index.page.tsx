import type { NextPage, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { Meta } from '@/components/molecules/common';
import { fullPath } from '@/hooks/helper';

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
      <div>Hello</div>
    </>
  );
};

export default Top;
