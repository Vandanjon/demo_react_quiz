import { motion } from "motion/react";

export default function AnimatedDiv() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="quiz-container"
		></motion.div>
	);
}
