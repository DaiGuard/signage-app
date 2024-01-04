import Head from 'next/head'
import { Roboto } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import ClockScreen from '@/pages/clockscreen'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})


export default function Home() {
  return (
    <>
      <Head>
        <title>Signage App</title>
        <meta name="description" content="my signage application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

        <div>
          <ClockScreen />
        </div>
      </main>
    </>
  )
}
