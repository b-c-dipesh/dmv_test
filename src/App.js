import React, { useState, useRef } from 'react';
import questions from './questions.json';
import './App.css';

const App = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [isCorrect, setIsCorrect] = useState(false);
	const [score, setScore] = useState(0);
	const feedbackRef = useRef();

	const checkAnswer = (value) => {
		if (value === questions[currentQuestion].correctAnswer) {
			feedbackRef.current.classList.remove('d-none');
			setScore(score + 1);
			setIsCorrect(true);
		} else {
			feedbackRef.current.classList.remove('d-none');
			setIsCorrect(false);
		}
	};

	const displayNextQuestion = () => {
		feedbackRef.current.classList.add('d-none');
		setCurrentQuestion(currentQuestion + 1);
	};

	return (
		<div className="container-fluid min-vh-100 bg-light">
			<main className="d-flex flex-column justify-content-center align-items-start min-vh-100 py-5">
				<span className="fw-bold fs-5">{score}</span>
				<span className="badge bg-info">
					{isCorrect ? 'Correct' : 'Wrong'}
				</span>
				<section className="qna-section rounded-4 min-vh-50">
					<h1 className="fw-bold question">{`${
						currentQuestion + 1
					}. ${questions[currentQuestion].question}`}</h1>
					<article
						ref={feedbackRef}
						className="mt-5 feedback shadow rounded alert alert-secondary"
					>
						<p>Feedback</p>
						<p>{questions[currentQuestion].feedback}</p>
					</article>
					<ol className="my-5 list-group list-group-numbered list-group-flush">
						{questions[currentQuestion].answers.map(
							(ans, index) => {
								return (
									<li
										key={index * 3}
										className="shadow rounded my-2 list-group-item text-capitalize"
										onClick={(e) => checkAnswer(ans.value)}
									>
										{ans.text}
									</li>
								);
							}
						)}
					</ol>
				</section>
				<button
					type="button"
					className="mt-5 btn btn-secondary shadow rounded-4"
					onClick={displayNextQuestion}
				>
					Next Question
				</button>
			</main>
		</div>
	);
};

export default App;
