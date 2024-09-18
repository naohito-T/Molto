import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { AboutTpl, Layout } from '~/views/components/templates';
import { Meta } from '~/views/components/molecules/common';
import { fullPath } from '~/views/hooks/helper';

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
