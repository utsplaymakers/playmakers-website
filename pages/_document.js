import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="UTS Playmakers" />
          <meta name="robots" content="all" />
          <meta name="googlebot" content="all" />
          <meta property="og:image" content="" />

          {/* Twitter meta tags */}
          <meta name="twitter:card" content="UTS Playmakers" />
          <meta name="twitter:site" content="@utsplaymakers" />
          <meta name="twitter:title" content="UTS Playmakers" />
          <meta
            name="twitter:description"
            content="UTS Games development student society"
          />

          {/* Facebook meta tags */}
          <meta property="og:type" content="article" />
          <meta property="og:title" content="UTS Playmakers" />
          <meta property="og:site_name" content="UTSPlaymakers" />
          <meta property="og:url" content="https://www.utsplaymakers.com" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
