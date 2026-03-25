/** @format */

"use client";
import { CgBrowser } from "react-icons/cg";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdOutlineAttachEmail, MdContactPage } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaLinkedinIn, FaGithub, FaInstagram, FaCode } from "react-icons/fa";
import { IoBriefcaseOutline, IoExtensionPuzzleOutline } from "react-icons/io5";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import SidebarLeft from "@/components/sidebar-left";
import SidebarRight from "@/components/sidebar-right";
import Footer from "@/components/footer";
import { myStack } from "@/lib/constant";
import { project } from "@/lib/constant";
import HeroImage from "@/components/hero";
import Carousel from "@/components/carousel";

export default function Home() {
	useEffect(() => {
		AOS.init({ once: false, duration: 800, disable: false });
		AOS.refresh();
	}, []);

	return (
		<main className='font-grotesk lg:grid grid-cols-8 relative'>
			<SidebarLeft />
			<SidebarRight />
			{/* navbar */}
			<div className='border-b border-[#2c2c2c] p-4 md:p-8 flex items-center justify-between col-span-6'>
				<p
					data-aos='flip-down'
					className='rounded-full text-xs bg-[#171717] p-2 border-[1px] border-[#2c2c2c]'>
					Web Developer
				</p>
			</div>
			{/* main content */}
			<div className='col-span-6 mx-4 md:mx-10'>
				<div className='pt-10 lg:px-40 md:pt-20 '>
					<section id='hero' className='scroll-mt-20'>
						<div className='grid grid-cols-3 gap-x-4 '>
							<HeroImage></HeroImage>
							<div className=' col-span-2 flex flex-col justify-evenly md:justify-start md:col-span-2'>
								<div className='flex gap-2'>
									<motion.p
										initial={{ opacity: 0 }}
										animate={{ opacity: 1, rotate: [0, 20, 0, 20, 0] }}
										transition={{
											opacity: {
												duration: 0.1,
											},
											rotate: {
												duration: 1.5,
												repeat: Infinity,
												ease: "easeInOut",
												repeatDelay: 0.5,
											},
										}}
										className='origin-bottom-right'>
										👋
									</motion.p>
									<motion.p
										initial={{ opacity: 0, x: 100 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ duration: 1, ease: "easeInOut" }}
										className='font-bold md:text-lg text-[#a3a3a3]'>
										Hello I Am
									</motion.p>
								</div>
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
									Passionate Fullstack Web Developer with 1+ years of professional
									experience. Specializing in creating innovative solutions using modern
									technologies. Proven track record of delivering high-quality.
								</p>
								<div data-aos='fade-up' className='pt-4 flex gap-2 font-semibold'>
									<a
										href='mailto:nyomanharun1@gmail.com'
										className='flex gap-2 items-center justify-center bg-[#171717] p-2 rounded-lg w-1/2 hover:bg-[#2c2c2c]'>
										<MdOutlineAttachEmail /> Email
									</a>
									<Link
										href='/doc/cv.pdf'
										target='_blank'
										className='flex gap-2 items-center justify-center bg-[#171717] p-2 rounded-lg w-1/2 hover:bg-[#2c2c2c]'>
										<FaCode /> CV
									</Link>
								</div>
							</div>
						</div>
						<div data-aos='zoom-in' className='pt-10'>
							<div className='border-dashed border-y-[0.5px] border-[#262626] py-5 flex gap-5 justify-evenly flex-wrap'>
								<div className='flex flex-col items-center'>
									<h1 className='text-4xl font-bold'>5+</h1>
									<p className='text-[#707070] text-sm font-bold'>Projects Completed</p>
								</div>
								<div className='flex flex-col items-center'>
									<h1 className='text-4xl font-bold'>1+</h1>
									<p className='text-[#707070] text-sm font-bold'>Years of Experience</p>
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
							Navigating diverse environments with adaptability and expertise for
							holistic solutions.
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
											<Image width={100} height={100} src='/icons/tbk/tbk.png' alt='' />
										</div>
										<div className='grid grid-cols-2 w-full'>
											<h3 className='font-bold text-base '>BENSMULTI.</h3>
											<p className='text-sm text-[#a3a3a3] mr-1 order-last md:order-none md:hidden'>
												@BENSMULTI
											</p>
											<p className='text-sm font-semibold text-[#a3a3a3] md:text-lg w-full text-end'>
												Sep 2024 - (Present)
											</p>
											<p className='rounded-full text-[#a3a3a3] text-xs bg-[#18181a] hidden md:text-center md:block py-1 p-3 h-fit w-fit md:col-span-4'>
												Full Stack Web Developer
											</p>
										</div>
									</div>
									<div className='w-full bg-black p-3 mt-4 rounded-md border-[1px] border-[#262626]'>
										<h3 className='font-bold'>Full Stack Web Developer</h3>
										<p className='text-[#717171] text-sm mt-1 tracking-wide text-justify'>
											Develop and enhance existing web application features with a focus on
											performance optimization and development of new features. Performed
											code refactoring to optimize processing. Implemented component design
											system on react to improve UI consistency and facilitate developer
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
							Committed and adaptable to new technologies with expertise in them.
						</p>
						<div className='pt-8 flex gap-y-4 flex-wrap justify-between'>
							{myStack.map((stack, index) => (
								<div
									key={index}
									data-aos='fade-up'
									data-aos-anchor-placement='center-bottom'
									data-aos-duration='900'
									data-aos-delay='200'
									className='w-[48%] md:w-[32%] bg-[#09090a] rounded-xl p-2 flex gap-3 items-center border-[1px] border-[#262626]'>
									<div className='w-12 h-12 rounded-lg bg-[#18181a] flex justify-center items-center border-[1px] border-[#262626]'>
										<Image
											width={100}
											height={100}
											src={stack.img}
											alt='tailwind'
											className='w-3/4 bg-white rounded-full'
										/>
									</div>
									<div>
										<h4 className='font-bold'>{stack.name}</h4>
										<p className='text-xs text-[#827f82]'>{stack.deskripsi}</p>
									</div>
								</div>
							))}
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
							Committed and adaptable to new technologies with expertise in them.
						</p>
						<div className='pt-8 flex flex-wrap gap-4 md:gap-y-4 md:gap-x-1 md:justify-between'>
							<div
								data-aos='fade-up'
								data-aos-anchor-placement='center-bottom'
								data-aos-duration='1000'
								data-aos-delay='100'
								className='w-full md:w-[49%]  bg-[#09090a] rounded-lg p-4 border border-[#262626]'>
								<div className='flex gap-4'>
									<div className='w-[160px] bg-[#18181a] border border-[#262626] rounded-lg flex justify-center items-center'>
										<CgBrowser className='w-8 h-8' />
									</div>
									<div className='flex flex-col w-5/6'>
										<h4 className='font-bold text-xl'>Web Development</h4>
										<p className='text-sm mt-4 text-[#827f82]'>
											Developing responsive and dynamic web applications using modern
											technologies.
										</p>
									</div>
								</div>
							</div>
							<div
								data-aos='fade-up'
								data-aos-anchor-placement='center-bottom'
								data-aos-duration='1000'
								data-aos-delay='150'
								className='w-full md:w-[49%] bg-[#09090a] rounded-lg p-4 border border-[#262626]'>
								<div className='flex gap-4'>
									<div className='w-[160px] bg-[#18181a] border border-[#262626] rounded-lg flex justify-center items-center'>
										<MdContactPage className='w-8 h-8' />
									</div>
									<div className='flex flex-col w-5/6'>
										<h4 className='font-bold text-xl'>Portofolio</h4>
										<p className='text-sm mt-4 text-[#827f82]'>
											Creating landing pages to promote your products and services.
										</p>
									</div>
								</div>
							</div>
							<div
								data-aos='fade-up'
								data-aos-anchor-placement='center-bottom'
								data-aos-duration='1000'
								data-aos-delay='200'
								className='w-full md:w-[49%] bg-[#09090a] rounded-lg p-4 border border-[#262626]'>
								<div className='flex gap-4'>
									<div className='w-40 bg-[#18181a] border border-[#262626] rounded-lg flex justify-center items-center'>
										<FaCode className='w-8 h-8' />
									</div>
									<div className='flex flex-col w-5/6'>
										<h4 className='font-bold text-xl'>Fixing Bugs</h4>
										<p className='text-sm mt-4 text-[#827f82]'>
											Fixing bugs and improving the performance of existing systems.
										</p>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section id='products' className='pt-16'>
						<motion.h1
							initial={{ y: 100, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.8, ease: "easeInOut" }}
							className='flex gap-3 items-baseline font-bold text-2xl'>
							<BsPersonWorkspace /> My Project
						</motion.h1>
						<motion.p
							initial={{ y: 100, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.8, ease: "easeInOut" }}
							className='pt-3 pb-9'>
							Showcasing my products that I have made.
						</motion.p>
						{project.map((project, index) => (
							<motion.div
								key={index}
								initial={{ x: -100, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.8, ease: "easeInOut" }}
								viewport={{ once: false, amount: 0.3 }}
								className='border border-[#262626] rounded-lg p-2 md:flex items-center gap-4 mb-4'>
								<div className='border border-[#262626] rounded-lg overflow-hidden md:w-[60%] lg:w-1/2'>
									<Image src={project.img} alt='' width={500} height={500} />
								</div>
								<div className='flex flex-col justify-between md:w-[40%] lg:w-1/2'>
									<div className='p-4 flex justify-between items-baseline border-dashed border-b-[0.5px] border-[#262626]'>
										<h4 className='font-bold text-lg'>{project.title}</h4>
										<p className='text-[#a3a3a3] '>• Free</p>
									</div>
									<div className='text-[#a3a3a3] py-4 flex justify-evenly border-dashed border-b-[0.5px] border-[#262626] md:gap-2'>
										{project.stack.map((stack, index) => {
											const Icon = stack.icon;
											return (
												<div className='flex items-center gap-1' key={index}>
													<Icon /> {stack.name}
												</div>
											);
										})}
									</div>
									<div className='pt-4 px-4'>
										<p>{project.deskripsi}</p>
									</div>
								</div>
							</motion.div>
						))}
						<Carousel></Carousel>
					</section>
				</div>
			</div>
			<Footer />
		</main>
	);
}
