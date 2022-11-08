import React, { useState, useRef } from 'react';
import questions from './questions.json';
import './App.css';

const App = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [isCorrect, setIsCorrect] = useState(false);
	const [score, setScore] = useState(0);
	const answerRef = useRef();
	const rightWrongInfoRef = useRef();

	const viewAnswer = () => {
		answerRef.current.classList.toggle('d-none');
	};

	const checkAnswer = (value) => {
		if (value === questions[currentQuestion].correctAnswer) {
			setScore(score + 1);
			setIsCorrect(true);
		} else {
			setIsCorrect(false);
		}
		rightWrongInfoRef.current.classList.remove('d-none');
	};

	const displayNextQuestion = () => {
		answerRef.current.classList.add('d-none');
		rightWrongInfoRef.current.classList.add('d-none');
		setCurrentQuestion(currentQuestion + 1);
	};

	return (
		<div className="container-fluid min-vh-100 bg-light">
			<main className="d-flex flex-column justify-content-center align-items-start min-vh-100 py-5">
				<section ref={rightWrongInfoRef} className="right-wrong-info">
					{isCorrect && (
						<p className="fw-bold fs-5 d-flex align-items-center">
							{score}{' '}
							<span className="ms-1 badge bg-info shadow">
								Correct
							</span>
						</p>
					)}
					{isCorrect || (
						<p className="fw-bold fs-5 badge bg-danger shadow">
							Incorrect
						</p>
					)}
				</section>
				<section className="qna-section rounded-4 min-vh-50">
					<h1 className="fw-bold question">{`${
						currentQuestion + 1
					}. ${questions[currentQuestion].question}`}</h1>
					<button
						type="button"
						className="btn btn-secondary shadow rounded-4"
						onClick={viewAnswer}
					>
						View Answer
					</button>
					<article
						ref={answerRef}
						className="mt-5 feedback shadow rounded alert alert-secondary d-none answer"
					>
						<p>Answer</p>
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
