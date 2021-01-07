import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export default function Quiz() {
    const quizData = {
        question: "Who of the following authors did not receive the Nobel prize?",
        answers: ["Leo Tolstoy", "Isaac Bashevis Singer", "Gabriel García Márquez", "Günter Grass"],
        category: "Literature",
        quote: "Count Lev Nikolayevich Tolstoy (9 September 1828 – 20 November 1910), usually referred to in English as Leo Tolstoy, was a Russian writer who is regarded as one of the greatest authors of all time. He received multiple nominations for Nobel Prize in Literature every year from 1902 to 1906, and nominations for Nobel Peace Prize in 1901, 1902 and 1910, and his miss of the prize is a major Nobel prize controversy.",
        source: "Wikipedia",
        link: "https://en.wikipedia.org/wiki/Leo_Tolstoy"
    };

    return (
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} >
            <Box bgcolor="primary.main" color="primary.contrastText" p={2}>{quizData.question}</Box>
            {quizData.answers.map((answer) => <Box key={answer} bgcolor="text.disabled" color="background.paper" m={2} p={2}>{answer}</Box>)}
        </Typography>
    );
}