import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import quizData from "../datas/quiz.json";

interface Question {
	id: number;
	question: string;
	options: {
		text: string;
		correct: boolean;
	}[];
}
export default function Quiz() {
	const [questions, setQuestions] = useState<Question[]>([]);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
	const navigate = useNavigate();

	useEffect(() => {
		const shuffled = quizData
			.slice()
			.sort(() => 0.5 - Math.random())
			.slice(0, 4);
		setQuestions(shuffled);
	}, []);

	const handleAnswer = (optionIndex: number, isCorrect: boolean) => {
		setSelectedAnswer(optionIndex);

		if (isCorrect) setScore((prev) => prev + 1);

		setTimeout(() => {
			if (currentQuestion < 3) {
				setCurrentQuestion((prev) => prev + 1);
				setSelectedAnswer(null);
			} else {
				navigate("/score", { state: { score } });
			}
		}, 1500);
	};

	if (questions.length === 0) return <div>Chargement...</div>;

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="quiz-container"
		>
			<h2>Question {currentQuestion + 1}/4</h2>
			<p>{questions[currentQuestion]?.question}</p>

			<div className="options-grid">
				{questions[currentQuestion]?.options.map((option, optionIndex) => (
					<motion.button
						key={`${questions[currentQuestion].id}-${optionIndex}`}
						whileHover={{ scale: 1.05 }}
						className={`option ${
							selectedAnswer === optionIndex
								? option.correct
									? "correct"
									: "incorrect"
								: ""
						}`}
						onClick={() => handleAnswer(optionIndex, option.correct)}
						disabled={selectedAnswer !== null}
					>
						{option.text}
					</motion.button>
				))}
			</div>
		</motion.div>
	);
}
