import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { AboutTpl, Layout } from '@/components/templates';
import { Meta } from '@/components/molecules/common';
import { fullPath } from '@/hooks/helper';

const About: NextPage = () => {
  const { asPath } = useRouter();
  return (
    <>
      <Meta pageFullPath={fullPath(asPath)} pageAsPath={asPath} />
      <Layout disableRightClick={true}>
        <AboutTpl />
      </Layout>
    </>
  );
};

export default About;
