/** @format */

"use client";
import { FiCommand } from "react-icons/fi";
import { CgBrowser } from "react-icons/cg";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdOutlineAttachEmail, MdContactPage } from "react-icons/md";
import { RiCustomerService2Line, RiTailwindCssLine } from "react-icons/ri";
import { FaLinkedinIn, FaGithub, FaInstagram, FaCode } from "react-icons/fa";
import {
	IoLogoLaravel,
	IoBriefcaseOutline,
	IoExtensionPuzzleOutline,
	IoRocketOutline,
} from "react-icons/io5";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const pdfLink = "/public/pdf/nyoman-cv.pdf";
export default function Home() {
	useEffect(() => {
		AOS.init();
	});

	return (
		<main className='font-grotesk lg:grid grid-cols-8 relative'>
			{/* sidebar left */}
			<div className='hidden lg:block row-span-5 border border-[#2c2c2c] lg:relative text-[#808080]'>
				<div className='hidden text-2xl lg:flex flex-col gap-9 justify-center pl-24 h-screen lg:fixed'>
					<a
						href='#hero'
						data-aos='zoom-in'
						data-aos-duration='500'
						className='hover:text-[#2c2c2c]'>
						<FiCommand />
					</a>
					<a
						href='#experience'
						data-aos='zoom-in'
						data-aos-duration='800'
						data-aos-delay='50'
						className='hover:text-[#2c2c2c]'>
						<IoBriefcaseOutline />
					</a>
					<a
						href='#stack'
						data-aos='zoom-in'
						data-aos-duration='1100'
						data-aos-delay='100'
						className='hover:text-[#2c2c2c]'>
						<IoExtensionPuzzleOutline />
					</a>
					<a
						href='#services'
						data-aos='zoom-in'
						data-aos-duration='1400'
						data-aos-delay='150'
						className='hover:text-[#2c2c2c]'>
						<RiCustomerService2Line />
					</a>
					<a
						href='#product'
						data-aos='zoom-in'
						data-aos-duration='1700'
						data-aos-delay='200'
						className='hover:text-[#2c2c2c]'>
						<BsPersonWorkspace />
					</a>
				</div>
			</div>
			{/* siderbar right */}
			<div className='hidden lg:block row-span-5 col-start-8 border border-[#2c2c2c] lg:relative'>
				<div className='hidden lg:flex flex-col gap-4 justify-center items-center pl-9 h-screen lg:fixed'>
					<a
						href='https://www.linkedin.com/in/nyoman-harun'
						data-aos='zoom-in'
						data-aos-duration='500'
						className='text-xl border border-[#2c2c2c] text-[#808080] p-3.5 rounded-lg hover:bg-[#2c2c2c]'>
						<FaLinkedinIn />
					</a>
					<a
						href='https://github.com/Nyoman-dev'
						data-aos='zoom-in'
						data-aos-duration='800'
						data-aos-delay='50'
						className='text-xl border border-[#2c2c2c] text-[#808080] p-3.5 rounded-lg hover:bg-[#2c2c2c]'>
						<FaGithub />
					</a>
					<a
						href='https://www.instagram.com/mann_arunn/profilecard/?igsh=dDdnZmRwMDc3eDR2'
						data-aos='zoom-in'
						data-aos-duration='1100'
						data-aos-delay='100'
						className='text-xl border border-[#2c2c2c] text-[#808080] p-3.5 rounded-lg hover:bg-[#2c2c2c]'>
						<FaInstagram />
					</a>
				</div>
			</div>
			{/* navbar */}
			<div className='border-b border-[#2c2c2c] p-4 md:p-8 flex items-center justify-between col-span-6'>
				<p
					data-aos='flip-down'
					className='rounded-full text-xs bg-[#171717] p-2 border-[1px] border-[#2c2c2c]'>
					Web Developer
				</p>
				<div className='flex gap-2'>
					{/* <a
						href=''
						data-aos='flip-down'
						className='bg-gradient-to-r from-gray-400 to-cyan-900 px-3 py-1 rounded-md hover:bg-gradient-to-l transition duration-700 ease-in-out'>
						Block
					</a> */}
				</div>
			</div>
			{/* main content */}
			<div className='col-span-6 mx-4 md:mx-10'>
				<div className='pt-10 lg:px-40 md:pt-20 '>
					<section id='hero' className='scroll-mt-20'>
						<div className='grid grid-cols-3 gap-x-4 '>
							<div
								data-aos='flip-left'
								data-aos-duration='1000'
								className=' rounded-lg bg-[#171717] overflow-hidden md:row-span-2'>
								<img
									src='/personal/nyoman.png'
									alt=''
									className='object-cover grayscale'
								/>
							</div>
							<div className=' col-span-2 flex flex-col justify-evenly md:justify-start md:col-span-2'>
								<p
									data-aos='fade-left'
									data-aos-duration='1000'
									className='font-bold md:text-lg text-[#a3a3a3]'>
									👋 Hello I Am
								</p>
								<h1
									data-aos='fade-left'
									data-aos-duration='1000'
									className='font-bold text-2xl'>
									Nyoman Harun
								</h1>
								<div
									data-aos='fade-left'
									data-aos-duration='1000'
									data-aos-delay='50'
									className='flex gap-2 md:hidden'>
									<a
										href='https://www.linkedin.com/in/nyoman-harun'
										className='bg-[#171717] p-2 rounded-lg'>
										<FaLinkedinIn />
									</a>
									<a
										href='https://github.com/Nyoman-dev'
										className='bg-[#171717] p-2 rounded-lg'>
										<FaGithub />
									</a>
									<a
										href='https://www.instagram.com/mann_arunn/profilecard/?igsh=dDdnZmRwMDc3eDR2'
										className='bg-[#171717] p-2 rounded-lg'>
										<FaInstagram />
									</a>
								</div>
							</div>
							<div
								data-aos='fade-left'
								data-aos-duration='1000'
								data-aos-delay='80'
								className=' col-span-3 md:col-span-2 md:col-start-2 md:grid-rows-subgrid'>
								<p className='pt-4 tracking-wide text-justify text-[#a3a3a3]'>
									Passionate Fullstack Web Developer with 1+ years of
									professional experience. Specializing in creating innovative
									solutions using modern technologies. Proven track record of
									delivering high-quality.
								</p>
								<div
									data-aos='fade-up'
									className='pt-4 flex gap-2 font-semibold'>
									<a
										href='mailto:nyomanharun@gmail.com'
										className='flex gap-2 items-center justify-center bg-[#171717] p-2 rounded-lg w-1/2 hover:bg-[#2c2c2c]'>
										<MdOutlineAttachEmail /> Email
									</a>
									{/* <a
										href='/cv'
										target='_blank'
										className='flex gap-2 items-center justify-center bg-[#171717] p-2 rounded-lg w-1/2 hover:bg-[#2c2c2c]'>
										Download CV
									</a> */}
								</div>
							</div>
						</div>
						<div className='flex gap-12 text-xl font-bold overflow-hidden'>
							{/* <p className='flex gap-2 items-center pt-10 text-[#707070] text-base'>
								<IoLogoReact /> React
							</p>
							<div className='flex gap-2 items-center pt-10 text-[#707070] text-base'>
								<IoLogoLaravel /> Laravel
							</div>
							<div className='flex gap-2 items-center pt-10 text-[#707070]'>
								<TbBrandNextjs /> Next Js
							</div> */}
							{/* <div className='flex gap-2 items-center pt-10 text-[#707070]'>
							<RiTailwindCssFill /> Tailwind Css
						</div> */}
						</div>
						<div data-aos='zoom-in' className='pt-10'>
							<div className='border-dashed border-y-[0.5px] border-[#262626] py-5 flex gap-5 justify-evenly flex-wrap'>
								<div className='flex flex-col items-center'>
									<h1 className='text-4xl font-bold'>5+</h1>
									<p className='text-[#707070] text-sm font-bold'>
										Projects Completed
									</p>
								</div>
								<div className='flex flex-col items-center'>
									<h1 className='text-4xl font-bold'>1+</h1>
									<p className='text-[#707070] text-sm font-bold'>
										Years of Experience
									</p>
								</div>
							</div>
						</div>
					</section>
					<section id='experience' className='pt-16'>
						<h1
							data-aos='fade-up'
							data-aos-anchor-placement='center-bottom'
							data-aos-duration='1000'
							className='flex gap-3 items-baseline font-bold text-2xl'>
							<IoBriefcaseOutline /> My Experience
						</h1>
						<p
							data-aos='fade-up'
							data-aos-anchor-placement='center-bottom'
							data-aos-duration='1000'
							data-aos-delay='50'
							className='pt-3 border-dashed border-b-[0.5px] text-[#a3a3a3] border-[#262626] pb-9'>
							Navigating diverse environments with adaptability and expertise
							for holistic solutions.
						</p>
						<div className='pt-8'>
							<div className='flex flex-col gap-4'>
								<div
									data-aos='fade-up'
									data-aos-anchor-placement='center-bottom'
									data-aos-duration='1000'
									data-aos-delay='100'
									className='w-full rounded-lg bg-[#09090a] p-4 md:p-6 border-[1px] border-[#262626]'>
									<div className='flex gap-4 items-center'>
										<div className='w-14 rounded-xl bg-[#18181a] border-[1px] border-[#262626]'>
											<img src='/icons/tbk/tbk.png' alt='' />
										</div>
										<div className='grid grid-cols-3 md:grid-cols-12'>
											<h3 className='font-bold text-base col-span-3 md:col-span-4 '>
												BENSMULTI.
											</h3>
											<p className=' rounded-full text-[#a3a3a3] text-xs bg-[#18181a] hidden md:text-center md:block py-1 p-3 h-fit w-fit md:col-span-4'>
												Frontend Web Developer
											</p>
											<a
												href=''
												className='text-sm text-[#a3a3a3] mr-1 md:order-last'>
												@BENSMULTI
											</a>
											<p className=' text-sm font-semibold text-[#a3a3a3] col-span-2 md:col-span-4 md:text-lg'>
												2024 (Present)
											</p>
										</div>
									</div>
									<div className='w-full bg-black p-3 mt-4 rounded-md border-[1px] border-[#262626]'>
										<h3 className='font-bold'>Frontend Web Developer</h3>
										<p className='text-[#717171] text-sm mt-1 tracking-wide text-justify'>
											Develop and enhance existing web application features with
											a focus on performance optimization and development of new
											features. Performed code refactoring to optimize
											processing. Implemented component design system on react
											to improve UI consistency and facilitate developer
											collaboration.
										</p>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section id='stack' className='pt-16'>
						<h1
							data-aos='fade-up'
							data-aos-anchor-placement='center-bottom'
							data-aos-duration='1000'
							className='flex gap-3 items-baseline font-bold text-2xl'>
							<IoExtensionPuzzleOutline /> My Stacks
						</h1>
						<p
							data-aos='fade-up'
							data-aos-anchor-placement='center-bottom'
							data-aos-duration='1000'
							data-aos-delay='50'
							className='pt-3 border-dashed border-b-[0.5px] border-[#262626] pb-9'>
							Committed and adaptable to new technologies with expertise in
							them.
						</p>
						<div className='pt-8 flex gap-y-4 flex-wrap justify-between'>
							<div
								data-aos='fade-up'
								data-aos-anchor-placement='center-bottom'
								data-aos-duration='900'
								data-aos-delay='200'
								className='w-[48%] md:w-[32%] bg-[#09090a] rounded-xl p-2 flex gap-3 items-center border-[1px] border-[#262626]'>
								<div className='w-12 h-12 rounded-lg bg-[#18181a] flex justify-center items-center border-[1px] border-[#262626]'>
									<img
										src='/icons/teknologi/next-js.svg'
										alt='tailwind'
										className='w-3/4 bg-white rounded-full'
									/>
								</div>
								<div>
									<h4 className='font-bold'>Next JS</h4>
									<p className='text-xs text-[#827f82]'>Framework React Web</p>
								</div>
							</div>
							<div
								data-aos='fade-up'
								data-aos-anchor-placement='center-bottom'
								data-aos-duration='1000'
								data-aos-delay='250'
								className='w-[48%] md:w-[32%] bg-[#09090a] rounded-xl p-2 flex gap-3 items-center border-[1px] border-[#262626]'>
								<div className='w-12 h-12 rounded-lg bg-[#18181a] flex justify-center items-center border-[1px] border-[#262626]'>
									<img
										src='/icons/teknologi/tailwind.svg'
										alt='tailwind'
										className='w-3/4'
									/>
								</div>
								<div>
									<h4 className='font-bold'>Tailwind</h4>
									<p className='text-xs text-[#827f82]'>CSS Framework</p>
								</div>
							</div>
							<div
								data-aos='fade-up'
								data-aos-anchor-placement='center-bottom'
								data-aos-duration='1000'
								data-aos-delay='300'
								className='w-[48%] md:w-[32%] bg-[#09090a] rounded-xl p-2 flex gap-3 items-center border-[1px] border-[#262626]'>
								<div className='w-12 h-12 rounded-lg bg-[#18181a] flex justify-center items-center border-[1px] border-[#262626]'>
									<img
										src='/icons/teknologi/laravel.png'
										alt='tailwind'
										className='w-3/4'
									/>
								</div>
								<div>
									<h4 className='font-bold'>Laravel</h4>
									<p className='text-xs text-[#827f82]'>PHP Framework</p>
								</div>
							</div>
							<div
								data-aos='fade-up'
								data-aos-anchor-placement='center-bottom'
								data-aos-duration='1000'
								data-aos-delay='400'
								className='w-[48%] md:w-[32%] bg-[#09090a] rounded-xl p-2 flex gap-3 items-center border-[1px] border-[#262626]'>
								<div className='w-12 h-12 rounded-lg bg-[#18181a] flex justify-center items-center border-[1px] border-[#262626]'>
									<img
										src='/icons/teknologi/react.svg'
										alt='tailwind'
										className='w-3/4'
									/>
								</div>
								<div>
									<h4 className='font-bold'>React</h4>
									<p className='text-xs text-[#827f82]'>Javascipt Library</p>
								</div>
							</div>
							<div
								data-aos='fade-up'
								data-aos-anchor-placement='center-bottom'
								data-aos-duration='1000'
								data-aos-delay='500'
								className='w-[48%] md:w-[32%] bg-[#09090a] rounded-xl p-2 flex gap-3 items-center border-[1px] border-[#262626]'>
								<div className='w-12 h-12 rounded-lg bg-[#18181a] flex justify-center items-center border-[1px] border-[#262626]'>
									<img
										src='/icons/teknologi/mysql.svg'
										alt='tailwind'
										className='w-3/4'
									/>
								</div>
								<div>
									<h4 className='font-bold'>MySQL</h4>
									<p className='text-xs text-[#827f82]'>Database</p>
								</div>
							</div>
							<div
								data-aos='fade-up'
								data-aos-anchor-placement='center-bottom'
								data-aos-duration='1000'
								data-aos-delay='600'
								className='w-[48%] md:w-[32%] bg-[#09090a] rounded-xl p-2 flex gap-3 items-center border-[1px] border-[#262626]'>
								<div className='w-12 h-12 rounded-lg bg-[#18181a] flex justify-center items-center border-[1px] border-[#262626]'>
									<img
										src='/icons/teknologi/github.svg'
										alt='tailwind'
										className='w-3/4 bg-white rounded-full'
									/>
								</div>
								<div>
									<h4 className='font-bold'>Github</h4>
									<p className='text-xs text-[#827f82]'>Repository</p>
								</div>
							</div>
						</div>
					</section>
					<section id='services' className='pt-16'>
						<h1
							data-aos='fade-up'
							data-aos-anchor-placement='center-bottom'
							data-aos-duration='1000'
							className='flex gap-3 items-baseline font-bold text-2xl'>
							<RiCustomerService2Line /> My Services
						</h1>
						<p
							data-aos='fade-up'
							data-aos-anchor-placement='center-bottom'
							data-aos-duration='1000'
							data-aos-delay='50'
							className='pt-3 border-dashed border-b-[0.5px] border-[#262626] pb-9'>
							Committed and adaptable to new technologies with expertise in
							them.
						</p>
						<div className='pt-8 flex flex-wrap gap-4 md:gap-y-4 md:gap-x-1 md:justify-between'>
							<div
								data-aos='fade-up'
								data-aos-anchor-placement='center-bottom'
								data-aos-duration='1000'
								data-aos-delay='100'
								className='w-full md:w-[49%] bg-[#09090a] rounded-lg p-4 border border-[#262626]'>
								<div className='flex gap-4 items-center'>
									<div className='w-14 h-14 bg-[#18181a] border border-[#262626] rounded-lg flex justify-center items-center'>
										<CgBrowser className='w-8 h-8' />
									</div>
									<h4 className='font-bold text-xl'>Web Development</h4>
								</div>
								<p className='text-sm mt-4 text-[#827f82]'>
									Developing responsive and dynamic web applications using
									modern technologies.
								</p>
							</div>
							<div
								data-aos='fade-up'
								data-aos-anchor-placement='center-bottom'
								data-aos-duration='1000'
								data-aos-delay='150'
								className='w-full md:w-[49%] bg-[#09090a] rounded-lg p-4 border border-[#262626]'>
								<div className='flex gap-4 items-center'>
									<div className='w-14 h-14 bg-[#18181a] border border-[#262626] rounded-lg flex justify-center items-center'>
										<MdContactPage className='w-8 h-8' />
									</div>
									<h4 className='font-bold text-xl'>Portofolio</h4>
								</div>
								<p className='text-sm mt-4 text-[#827f82]'>
									Creating landing pages to promote your products and services.
								</p>
							</div>
							<div
								data-aos='fade-up'
								data-aos-anchor-placement='center-bottom'
								data-aos-duration='1000'
								data-aos-delay='200'
								className='w-full md:w-[49%] bg-[#09090a] rounded-lg p-4 border border-[#262626]'>
								<div className='flex gap-4 items-center'>
									<div className='w-14 h-14 bg-[#18181a] border border-[#262626] rounded-lg flex justify-center items-center'>
										<FaCode className='w-8 h-8' />
									</div>
									<h4 className='font-bold text-xl'>Fixing Bugs</h4>
								</div>
								<p className='text-sm mt-4 text-[#827f82]'>
									Fixing bugs and improving the performance of existing systems.
								</p>
							</div>
						</div>
					</section>
					<section id='product' className='pt-16'>
						<h1
							data-aos='fade-up'
							data-aos-anchor-placement='center-bottom'
							data-aos-duration='1000'
							className='flex gap-3 items-baseline font-bold text-2xl'>
							<BsPersonWorkspace /> My Project
						</h1>
						<p
							data-aos='fade-up'
							data-aos-anchor-placement='center-bottom'
							data-aos-duration='1000'
							data-aos-delay='50'
							className='pt-3 border-dashed border-b-[0.5px] border-[#262626] pb-9'>
							Showcasing my products that I have made.
						</p>
						<div className='pt-8'>
							<div
								data-aos='fade-up'
								data-aos-anchor-placement='center-bottom'
								data-aos-duration='1000'
								data-aos-delay='50'
								className='border border-[#262626] rounded-lg p-2 md:flex items-center gap-4 mb-4'>
								<div className='border border-[#262626] rounded-lg overflow-hidden lg:w-1/2'>
									<img src='/benner/ai.png' alt='' />
								</div>
								<div className='flex flex-col justify-between lg:w-1/2'>
									<div className='p-4 flex justify-between items-baseline border-dashed border-b-[0.5px] border-[#262626]'>
										<h4 className='font-bold text-lg'>Ask to AI</h4>
										<p className='text-[#a3a3a3] '>• Free</p>
									</div>
									<div className='text-[#a3a3a3] py-4 flex border-dashed border-b-[0.5px] border-[#262626] md:gap-2'>
										<div className='flex items-center '>
											<IoLogoLaravel /> Laravel
										</div>
										<div className='flex items-center'>
											<RiTailwindCssLine /> Tailwind
										</div>
									</div>
									<div className='pt-4 px-4'>
										<p>Ask discover new things</p>
									</div>
								</div>
							</div>
							<div
								data-aos='fade-up'
								data-aos-anchor-placement='center-bottom'
								data-aos-duration='1000'
								data-aos-delay='50'
								className='border border-[#262626] rounded-lg p-2 md:flex items-center gap-4 mb-4'>
								<div className='border border-[#262626] rounded-lg overflow-hidden lg:w-1/2'>
									<img src='/benner/kursus.png' alt='' />
								</div>
								<div className='flex flex-col justify-between lg:w-1/2'>
									<div className='p-4 flex justify-between items-baseline border-dashed border-b-[0.5px] border-[#262626]'>
										<h4 className='font-bold text-lg'>Course Registration</h4>
										<p className='text-[#a3a3a3] '>• Free</p>
									</div>
									<div className='text-[#a3a3a3] py-4 flex justify-between border-dashed border-b-[0.5px] border-[#262626] md:gap-2'>
										<div className='flex items-center '>
											<IoLogoLaravel /> Laravel
										</div>
										<div className='flex items-center'>
											<IoRocketOutline /> Filament
										</div>
										<div className='flex items-center'>
											<RiTailwindCssLine /> Tailwind
										</div>
									</div>
									<div className='pt-4 px-4'>
										<p>Online Enrollment System</p>
									</div>
								</div>
							</div>
							<div
								data-aos='fade-up'
								data-aos-anchor-placement='center-bottom'
								data-aos-duration='1000'
								data-aos-delay='50'
								className='border border-[#262626] rounded-lg p-2 md:flex items-center gap-4 mb-4'>
								<div className='border border-[#262626] rounded-lg overflow-hidden lg:w-1/2'>
									<img src='/benner/donasi.png' alt='' />
								</div>
								<div className='flex flex-col justify-between lg:w-1/2'>
									<div className='p-4 flex justify-between items-baseline border-dashed border-b-[0.5px] border-[#262626]'>
										<h4 className='font-bold text-lg'>Donation Raising</h4>
										<p className='text-[#a3a3a3] '>• Free</p>
									</div>
									<div className='text-[#a3a3a3] py-4 flex justify-between border-dashed border-b-[0.5px] border-[#262626] md:gap-2'>
										<div className='flex items-center '>
											<IoLogoLaravel /> Laravel
										</div>
										<div className='flex items-center'>
											<IoRocketOutline /> Filament
										</div>
										<div className='flex items-center'>
											<RiTailwindCssLine /> Tailwind
										</div>
									</div>
									<div className='pt-4 px-4'>
										<p>Donation System with Payment Gateway</p>
									</div>
								</div>
							</div>
							<div
								data-aos='fade-up'
								data-aos-anchor-placement='center-bottom'
								data-aos-duration='1000'
								data-aos-delay='50'
								className='border border-[#262626] rounded-lg p-2 md:flex items-center gap-4'>
								<div className='border border-[#262626] rounded-lg overflow-hidden lg:w-1/2'>
									<img src='/benner/spk.png' alt='' />
								</div>
								<div className='flex flex-col justify-between lg:w-1/2'>
									<div className='p-4 flex justify-between items-baseline border-dashed border-b-[0.5px] border-[#262626]'>
										<h4 className='font-bold text-lg'>
											Decision Making System
										</h4>
										<p className='text-[#a3a3a3] '>• Free</p>
									</div>
									<div className='text-[#a3a3a3] py-4 flex justify-between border-dashed border-b-[0.5px] border-[#262626] md:gap-2'>
										<div className='flex items-center '>
											<IoLogoLaravel /> Laravel
										</div>
										<div className='flex items-center'>
											<IoRocketOutline /> Filament
										</div>
										<div className='flex items-center'>
											<RiTailwindCssLine /> Tailwind
										</div>
									</div>
									<div className='pt-4 px-4'>
										<p>
											Selection of the best junior high school using the saw
											method
										</p>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
			<footer
				data-aos='fade-up'
				data-aos-anchor-placement='center-bottom'
				data-aos-duration='1000'
				data-aos-delay='100'
				className='mt-9 border-t border-[#262626] col-span-6 p-7'>
				<div>
					<p className='text-[#a3a3a3] text-sm'>
						Copyright © 2025 Nyoman Harun
					</p>
				</div>
				<div className='flex gap-2 lg:hidden pt-1'>
					<a href='' className='border border-[#262626] p-2 rounded-lg'>
						<FaLinkedinIn />
					</a>
					<a href='' className='border border-[#262626] p-2 rounded-lg'>
						<FaGithub />
					</a>
					<a href='' className='border border-[#262626] p-2 rounded-lg'>
						<FaInstagram />
					</a>
				</div>
			</footer>
		</main>
	);
}
