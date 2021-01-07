import Head from 'next/head'
//import styles from '../styles/Home.module.css'

import Quiz from '../Components/Quiz';

export default function Home() {

  const isServer = typeof window === 'undefined';

  return (
    <div>
      <Head>
        <title>Trivia</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

      </Head>

      {isServer ? null :  <Quiz />} //Temp - to avoid mismatch class name by material ui
    </div>
  )
}
