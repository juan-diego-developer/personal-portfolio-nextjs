import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
            <Head>
                <title>My Portfolio</title>
                <meta name="description" content="Juan Tejada Portolio Website"/>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
      </Html>
    )
  }
}

export default MyDocument