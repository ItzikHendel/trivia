import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Result from './Result';
import ActionButton from './ActionButton';

export default function Summary({ quizData, summaryData, runNewGame }) {
    console.log("=========");
    console.log({ quizData, summaryData });

    const correctAnswersNum = summaryData.reduce((total, current) => current.isCorrect ? total + 1 : total, 0);

    return (
        <Container>
            <Typography component="div" style={{ backgroundColor: 'GhostWhite', padding: '20px' }}  >
                <div>
                    <ActionButton text="New Game" icon="autorenew" onClick={runNewGame} />
                </div>
                <Box display="flex" justifyContent="center">
                    <Box component="span" fontSize="2rem" color="white" bgcolor="palevioletred" borderRadius={60} p={1} m={5}>{correctAnswersNum}/{summaryData.length}</Box>
                </Box>

                {quizData.map((item, index) => {
                    const { question, answers, quote, source, link } = item;
                    const { userAnswer, isCorrect } = summaryData[index];
                    return <Paper key={index} elevation={3} m={5}>
                        <Box color="primary.main"  p={1}>{question}</Box>
                        <Box color={isCorrect ? "success.main" : "error.main"} p={1} boxShadow={1}>{userAnswer}</Box>
                        <Result
                            isAnswerCorrect={isCorrect}
                            correctAnswer={answers[0]} x
                            quote={quote}
                            source={source}
                            link={link} />
                    </Paper>
                })}

            </Typography>
        </Container>

    )
}