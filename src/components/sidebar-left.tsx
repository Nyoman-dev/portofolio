/** @format */

"use client";

import { motion } from "motion/react";
import { sideNav } from "@/lib/constant";
import { useEffect, useState } from "react";

export default function SidebarLeft() {
	const [active, setActive] = useState("");

	useEffect(() => {
		const sections = document.querySelectorAll("section");
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActive(`#${entry.target.id}`);
					}
				});
			},
			{
				threshold: 0.6,
			},
		);

		sections.forEach((sec) => observer.observe(sec));

		return () => observer.disconnect();
	}, []);

	return (
		<div className='hidden lg:block row-span-5 border border-[#2c2c2c] lg:relative text-[#808080]'>
			<div className='hidden text-2xl lg:flex flex-col gap-9 justify-center pl-24 h-screen lg:fixed'>
				{sideNav.map((item, index) => (
					<motion.a
						key={index}
						href={item.name}
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 0.6, ease: "easeInOut" }}
						className={`transition ${
							active === item.name ? "text-white scale-125" : "hover:text-white"
						}`}>
						<item.icon />
					</motion.a>
				))}
			</div>
		</div>
	);
}
