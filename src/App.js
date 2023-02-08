import React, { useState } from 'react';

export default  function App() {
	const  questions= [
		{
			questionText: 'Столица РФ?',
			answerOptions: [
				{ answerText: 'Токио', isCorrect: false },
				{ answerText: 'Лондон', isCorrect: false },
				{ answerText: 'Париж', isCorrect: false },
				{ answerText: 'Москва', isCorrect: true },
			],
		},
		{
			questionText: 'Какая компания выпускает Iphone?',
			answerOptions: [
				{ answerText: 'Tesla', isCorrect: false },
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Blizzard', isCorrect: false },
				{ answerText: 'Stark ind.', isCorrect: false },
			],
		},
		{
			questionText: 'Какой сейчас год?',
			answerOptions: [
				{ answerText: '2021', isCorrect: false },
				{ answerText: '2022', isCorrect: false },
				{ answerText: '2023', isCorrect: true },
				{ answerText: '2024', isCorrect: false },
			],
		},
		{
			questionText: 'Сколько человек должен спать?',
			answerOptions: [
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: false },
				{ answerText: '8', isCorrect: true },
				{ answerText: '9', isCorrect: false },
			],
		},
		{
			questionText: 'Самое высокое здание в мире?',
			answerOptions: [
				{ answerText: '565', isCorrect: false },
				{ answerText: '790', isCorrect: false },
				{ answerText: '828', isCorrect: true },
				{ answerText: '1000', isCorrect: false },
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
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					Вы набрали {score} из {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Вопрос {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}