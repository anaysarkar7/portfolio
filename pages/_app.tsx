import Head from "next/head";
import { AppProps } from "next/app";
import Layout from "@/components/Layout/Layout";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>🎯Anay Sarkar👇🏽</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
