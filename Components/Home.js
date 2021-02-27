import { useState } from 'react';
import quizDataArray from '../public/quizData';
import Game from '../Components/Game';
import Summary from '../Components/Sumarry';

let summaryData;
export default function Home() {
    const [gameStatus, setGameStatus] = useState("playing");

    const goToSummary = (gameData) => {
        summaryData = gameData;
        setGameStatus("summary");
    }
    return (
        gameStatus === "playing" ?
            <Game quizDataArray={quizDataArray} goToSummary={goToSummary} /> :
            <Summary summaryData={summaryData} />
    );
}