import React, { useState } from 'react';
import questions from './questions.json';

const App = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);

	return (
		<div className="container-fluid">
			<main>
				<section className="shadow rounded-4 p-5 mt-5 min-vh-50">
					<h2>{`${currentQuestion + 1}. ${
						questions[currentQuestion].question
					}`}</h2>
					<ol className="my-5 list-group list-group-numbered list-group-flush">
						{questions[currentQuestion].answers.map((ans) => {
							return (
								<li className="list-group-item text-capitalize">
									{ans.text}
								</li>
							);
						})}
					</ol>
					<article className="alert alert-light">
						<p>{questions[currentQuestion].feedback}</p>
					</article>
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
