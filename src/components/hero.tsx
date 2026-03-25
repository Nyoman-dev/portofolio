/** @format */

"use client";

import {
	motion,
	useMotionValue,
	useMotionTemplate,
	animate,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function HeroImage() {
	const MotionImage = motion(Image);

	// posisi awal mouse
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	// radius circle
	const radius = useMotionValue(0);

	// flag biar cuma ambil posisi pertama
	const hasEntered = useRef(false);

	// clip-path dinamis
	const clipPath = useMotionTemplate`circle(${radius}px at ${mouseX}px ${mouseY}px)`;

	const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
		const rect = e.currentTarget.getBoundingClientRect();

		// ambil posisi pertama saja
		if (!hasEntered.current) {
			mouseX.set(e.clientX - rect.left);
			mouseY.set(e.clientY - rect.top);
			hasEntered.current = true;
		}

		// animasi "gelombang" membesar
		animate(radius, 800, {
			duration: 0.8,
			ease: "easeOut",
		});
	};

	const handleMouseLeave = () => {
		// reset
		animate(radius, 0, { duration: 0.4 });
		hasEntered.current = false;
	};

	return (
		<motion.div
			initial={{ rotateY: 0, opacity: 0 }}
			animate={{ rotateY: 360, opacity: 1 }}
			transition={{ duration: 1, ease: "easeInOut" }}
			className='relative rounded-lg bg-[#171717] overflow-hidden md:row-span-2'
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			{/* BASE grayscale */}
			<Image
				src='/personal/hero.jpg'
				alt='nyoman'
				width={500}
				height={500}
				className='object-cover grayscale'
			/>

			{/* COLOR layer */}
			<MotionImage
				src='/personal/hero.jpg'
				alt='nyoman'
				width={500}
				height={500}
				className='object-cover absolute top-0 left-0'
				style={{ clipPath }}
			/>
		</motion.div>
	);
}
