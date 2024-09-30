import React, { useState } from 'react';

function Quiz() {
    const questions = [
        {
            questionText: 'What is the purpose of wildlife monitoring?',
            answerOptions: [
                { answerText: 'To protect wildlife', isCorrect: true },
                { answerText: 'To harm wildlife', isCorrect: false },
                { answerText: 'To ignore wildlife', isCorrect: false },
                { answerText: 'To commercialize wildlife', isCorrect: false },
            ],
        },
        {
            questionText: 'Which tool is commonly used in wildlife monitoring?',
            answerOptions: [
                { answerText: 'Cameras', isCorrect: true },
                { answerText: 'Smartphones', isCorrect: false },
                { answerText: 'Drones', isCorrect: true },
                { answerText: 'Laptops', isCorrect: false },
            ],
        },
        {
            questionText: 'What is the main challenge in wildlife monitoring?',
            answerOptions: [
                { answerText: 'Poor visibility', isCorrect: true },
                { answerText: 'Abundant resources', isCorrect: false },
                { answerText: 'Unlimited data', isCorrect: false },
                { answerText: 'Limited species', isCorrect: false },
            ],
        },
        {
            questionText: 'What is a benefit of wildlife monitoring?',
            answerOptions: [
                { answerText: 'Helps with species conservation', isCorrect: true },
                { answerText: 'Increases poaching', isCorrect: false },
                { answerText: 'Reduces wildlife population', isCorrect: false },
                { answerText: 'Harms the ecosystem', isCorrect: false },
            ],
        },
        {
            questionText: 'Which species is often monitored in wildlife conservation efforts?',
            answerOptions: [
                { answerText: 'Elephants', isCorrect: true },
                { answerText: 'Domestic cats', isCorrect: false },
                { answerText: 'Penguins', isCorrect: true },
                { answerText: 'Lions', isCorrect: true },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div className='quiz'>
            {showScore ? (
                <div className='score-section'>
                    You scored {score} out of {questions.length}
                </div>
            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className='question-text'>{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className='answer-section'>
                        {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                            <button key={index} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                                {answerOption.answerText}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default Quiz;
