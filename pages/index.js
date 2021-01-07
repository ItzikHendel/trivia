import Head from 'next/head'
//import styles from '../styles/Home.module.css'

import Quiz from '../Components/Quiz';

export default function Home() {

  const isServer = typeof window === 'undefined';  //Temp - to avoid mismatch class name by material ui
  const quizData = {
    question: "Who of the following authors did not receive the Nobel prize?",
    answers: ["Leo Tolstoy", "Isaac Bashevis Singer", "Gabriel García Márquez", "Günter Grass"],
    category: "Literature",
    quote: "Count Lev Nikolayevich Tolstoy (9 September 1828 – 20 November 1910), usually referred to in English as Leo Tolstoy, was a Russian writer who is regarded as one of the greatest authors of all time. He received multiple nominations for Nobel Prize in Literature every year from 1902 to 1906, and nominations for Nobel Peace Prize in 1901, 1902 and 1910, and his miss of the prize is a major Nobel prize controversy.",
    source: "Wikipedia",
    link: "https://en.wikipedia.org/wiki/Leo_Tolstoy"
  };

  return (
    <div>
      <Head>
        <title>Trivia</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

      </Head>

      {isServer ? null : <Quiz quizData={quizData} />}
    </div>
  )
}
