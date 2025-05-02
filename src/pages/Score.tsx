// Score.tsx
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Score() {
	const navigate = useNavigate();
	const location = useLocation();
	const score = location.state?.score ?? 0;

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="score-container"
		>
			<h2>Votre score final : {score}/4</h2>
			<motion.button
				whileHover={{ scale: 1.05 }}
				className="replay-button"
				onClick={() => navigate("/quiz")}
			>
				Rejouer ?
			</motion.button>
		</motion.div>
	);
}
