/** @format */

import { FaLinkedinIn, FaGithub, FaInstagram, FaCode } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className='mt-9 border-t border-[#262626] col-span-6 p-7'>
			<div>
				<p className='text-[#a3a3a3] text-sm'>Copyright © 2025 Nyoman Harun</p>
			</div>
			<div className='flex gap-2 lg:hidden pt-1'>
				<a
					href='https://www.linkedin.com/in/nyomanharun'
					className='border border-[#262626] p-2 rounded-lg'>
					<FaLinkedinIn />
				</a>
				<a
					href='https://github.com/Nyoman-dev'
					className='border border-[#262626] p-2 rounded-lg'>
					<FaGithub />
				</a>
				<a
					href='https://www.instagram.com/mann_arunn/profilecard/?igsh=dDdnZmRwMDc3eDR2'
					className='border border-[#262626] p-2 rounded-lg'>
					<FaInstagram />
				</a>
			</div>
		</footer>
	);
}
