import Head from "next/head";

export default function Meta({ pageName }) {
  return (
    <Head>
      <title>{`${pageName}`}</title>

      <meta
        name="description"
        content="Multilingual Text Speaker is a virtual assistant that allows you to transform text into audio read by an AI voice. You can choose your preferred language, such as how your text will be read."
      />
      <link rel="icon" href="/logos/favicon.ico" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta charset="utf-8" />
    </Head>
  );
}
