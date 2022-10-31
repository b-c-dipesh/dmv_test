import React, { useState } from 'react';
import questions from './questions.json';
import './App.css';

const App = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);

	return (
		<div className="container-fluid min-vh-100 bg-light">
			<main className="d-flex flex-column justify-content-center align-items-start min-vh-100 py-5">
				<section className="qna-section rounded-4 min-vh-50">
					<h1 className="fw-bold question">{`${
						currentQuestion + 1
					}. ${questions[currentQuestion].question}`}</h1>
					<article className="mt-5 feedback shadow rounded alert alert-light">
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
					onClick={(e) => setCurrentQuestion(currentQuestion + 1)}
				>
					Next Question
				</button>
			</main>
		</div>
	);
};

export default App;
