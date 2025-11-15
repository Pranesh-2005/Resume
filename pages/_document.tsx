import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          {/* Preload local fonts */}
          <link 
            rel="preload" 
            href="/assets/fonts/SegoeUIVariable.woff2" 
            as="font" 
            type="font/woff2" 
            crossOrigin="anonymous" 
          />
          
          {/* Google Fonts as fallback */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />

          {/* App Icons */}
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/logo.png" />
          
          {/* Meta Tags */}
          <meta property="og:title" content="Pranesh | AIML Engineer" />
          <meta name="author" content="Pranesh" />
          <meta property="og:locale" content="en_US" />
          <meta
            name="description"
            content="Pranesh | AIML Engineer | Resume & Portfolio"
          />
          <meta
            property="og:description"
            content="Pranesh | AIML Engineer | Resume & Portfolio"
          />
          <meta property="og:url" content="https://pranesh.dev/" />
          <meta property="og:site_name" content="Pranesh Portfolio" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}