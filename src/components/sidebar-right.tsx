/** @format */

import { FaLinkedinIn, FaGithub, FaInstagram, FaCode } from "react-icons/fa";

export default function SidebarRight() {
	return (
		<div className='hidden lg:block row-span-5 col-start-8 border border-[#2c2c2c] lg:relative'>
			<div className='hidden lg:flex flex-col gap-4 justify-center items-center pl-9 h-screen lg:fixed'>
				<a
					href='https://www.linkedin.com/in/nyomanharun'
					target='_blank'
					data-aos='zoom-in'
					data-aos-duration='500'
					className='text-xl border border-[#2c2c2c] text-[#808080] p-3.5 rounded-lg hover:bg-[#2c2c2c]'>
					<FaLinkedinIn />
				</a>
				<a
					href='https://github.com/Nyoman-dev'
					target='_blank'
					data-aos='zoom-in'
					data-aos-duration='800'
					data-aos-delay='50'
					className='text-xl border border-[#2c2c2c] text-[#808080] p-3.5 rounded-lg hover:bg-[#2c2c2c]'>
					<FaGithub />
				</a>
				<a
					href='https://www.instagram.com/mann_arunn/profilecard/?igsh=dDdnZmRwMDc3eDR2'
					target='_blank'
					data-aos='zoom-in'
					data-aos-duration='1100'
					data-aos-delay='100'
					className='text-xl border border-[#2c2c2c] text-[#808080] p-3.5 rounded-lg hover:bg-[#2c2c2c]'>
					<FaInstagram />
				</a>
			</div>
		</div>
	);
}
