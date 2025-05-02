// Home.tsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Home() {
	const navigate = useNavigate();

	return (
		<div className="home-container">
			<motion.h1
				initial={{ scale: 0, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ duration: 2, type: "spring" }}
				className="title"
			>
				Êtes-vous prêts à survivre demain ?
			</motion.h1>

			<motion.button
				initial={{ scale: 0, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ delay: 2, duration: 1.5 }}
				className="start-button"
				onClick={() => navigate("/quiz")}
			>
				Commencez le quiz
			</motion.button>
		</div>
	);
}
