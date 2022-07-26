import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap'
          rel='stylesheet'
        />
        <link rel='shortcut icon' href='/logo-ugm.png' />
      </Head>
      <body className='overflow-x-hidden antialiased'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
