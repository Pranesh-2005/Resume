import React, { FC } from 'react';
import * as Styled from './PortfolioLayout.styles';
import Head from 'next/head';

export interface Props {
  title: string;
  children: React.ReactNode;
}

const PortfolioLayout: FC<Props> = ({ children, title }): JSX.Element => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000000" />

        <title>{title}</title>

        {/* ⭐ Your logo favicon + apple-touch-icon */}
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </Head>

      <Styled.Container>{children}</Styled.Container>
    </>
  );
};

export default PortfolioLayout;
