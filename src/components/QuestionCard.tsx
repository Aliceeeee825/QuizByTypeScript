import React from 'react';
import {AnswerObject} from '../App'
import {Wrapper, ButtonWrapper} from './QuestionCard.styled'

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({question, answers, callback, userAnswer, questionNr, totalQuestions}) => (
    <Wrapper>
        <p className='number'>
            Question: {questionNr} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{__html: question}}/>
        <div>
            {answers.map(answer =>{
                return <ButtonWrapper 
                            correct={userAnswer?.correctAnswer === answer} 
                            key={answer} 
                            userClicked={userAnswer?.answer === answer}>
                    <button disabled={userAnswer ? true : false} onClick={callback} value={answer}>
                        <span dangerouslySetInnerHTML={{__html: answer}} />
                    </button>
                </ButtonWrapper>
            })}
        </div>
    </Wrapper>
)

export default QuestionCard