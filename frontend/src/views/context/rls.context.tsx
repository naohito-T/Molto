import { useRef } from 'react';
import type { NextComponentType, NextPageContext } from 'next';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

type Props = {
  readonly children: Required<React.ReactNode>;
};

export const RLSProvider: NextComponentType<NextPageContext, null, Props> = ({ children }) => {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        smartphone: {
          smooth: true,
        },
      }}
      watch={[]}
      containerRef={containerRef}
    >
      {children}
    </LocomotiveScrollProvider>
  );
};
