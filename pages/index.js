import quizData from '../public/quizData';
import Head from 'next/head'
//import styles from '../styles/Home.module.css'

import Game from '../Components/Game';

export default function Home() {

  const isServer = typeof window === 'undefined';  //Temp - to avoid mismatch class name by material ui

  return (
    <div>
      <Head>
        <title>Trivia</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

      </Head>

      {isServer ? null : <Game quizData={quizData} />}
    </div>
  )
}
