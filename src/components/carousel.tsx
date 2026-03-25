/** @format */

"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const images = ["/benner/ai.png", "/benner/kursus.png", "/benner/donasi.png"];

export default function Carousel() {
	const [active, setActive] = useState(2);

	return (
		<div className='flex items-center justify-center h-screen bg-gray-100 overflow-hidden'>
			<div className='relative flex items-center justify-center w-full max-w-6xl'>
				{images.map((src, index) => {
					const offset = index - active;

					return (
						<motion.div
							key={index}
							onClick={() => setActive(index)}
							className='absolute cursor-pointer rounded-2xl overflow-hidden shadow-xl'
							animate={{
								x: offset * 220,
								scale: index === active ? 1 : 0.8,
								rotateY: offset * -40,
								zIndex: images.length - Math.abs(offset),
								opacity: Math.abs(offset) > 2 ? 0 : 1,
							}}
							transition={{ type: "spring", stiffness: 200, damping: 20 }}
							style={{ width: 300, height: 400 }}>
							<img src={src} alt='carousel' className='w-full h-full object-cover' />

							{/* overlay gradient */}
							{index !== active && <div className='absolute inset-0 bg-black/40' />}
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}
