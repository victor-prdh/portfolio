import Head from 'next/head'

export default function CustomHead({title}) {
    return (
      <Head>
        <title>{title ?? "Victor Prudhomme"}</title>
      </Head>
    )
  }