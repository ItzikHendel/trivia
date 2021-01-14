import quizDataArray from '../public/quizData';
import Game from '../Components/Game';

export default function Home() {

    return <Game quizDataArray={quizDataArray} />;
}