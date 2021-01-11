import Container from '@material-ui/core/Container';

import Quiz from './Quiz';
import Result from './Result';

export default function Game({ quizData }) {
    return (
        <Container>
            <Quiz quizData={quizData} />
            <Result />
        </Container>
    );
};