/** @format */
import { RiTailwindCssLine } from "react-icons/ri";
import { IoLogoLaravel, IoRocketOutline } from "react-icons/io5";
import { FiCommand } from "react-icons/fi";
import { IoBriefcaseOutline, IoExtensionPuzzleOutline } from "react-icons/io5";
import { RiCustomerService2Line } from "react-icons/ri";
import { BsPersonWorkspace } from "react-icons/bs";

export const myStack = [
	{
		name: "Next JS",
		img: "/icons/teknologi/next-js.svg",
		deskripsi: "Framework React Web",
	},
	{
		name: "Tailwind CSS",
		img: "/icons/teknologi/tailwind.svg",
		deskripsi: "CSS Framework",
	},
	{
		name: "Laravel",
		img: "/icons/teknologi/laravel.png",
		deskripsi: "PHP Framework",
	},
	{
		name: "React JS",
		img: "/icons/teknologi/react.svg",
		deskripsi: "Javascipt Library",
	},
	{
		name: "MySQL",
		img: "/icons/teknologi/mysql.svg",
		deskripsi: "Database",
	},
	{
		name: "Github",
		img: "/icons/teknologi/github.svg",
		deskripsi: "Repository",
	},
];

export const project = [
	{
		img: "/benner/ai.png",
		title: "Ask to AI",
		stack: [
			{ icon: IoLogoLaravel, name: "Laravel" },
			{ icon: RiTailwindCssLine, name: "Tailwind" },
		],
		deskripsi: "Ask discover new things",
	},
	{
		img: "/benner/kursus.png",
		title: "Course Registration",
		stack: [
			{ icon: IoLogoLaravel, name: "Laravel" },
			{ icon: RiTailwindCssLine, name: "Tailwind" },
			{ icon: IoRocketOutline, name: "Filament" },
		],
		deskripsi: "Online Enrollment System",
	},
	{
		img: "/benner/donasi.png",
		title: "Donation Raising",
		stack: [
			{ icon: IoLogoLaravel, name: "Laravel" },
			{ icon: RiTailwindCssLine, name: "Tailwind" },
			{ icon: IoRocketOutline, name: "Filament" },
		],
		deskripsi: "Donation System with Payment Gateway",
	},
];

export const sideNav = [
	{
		name: "#hero",
		icon: FiCommand,
	},
	{
		name: "#experience",
		icon: IoBriefcaseOutline,
	},
	{
		name: "#stack",
		icon: IoExtensionPuzzleOutline,
	},
	{
		name: "#services",
		icon: RiCustomerService2Line,
	},
	{
		name: "#products",
		icon: BsPersonWorkspace,
	},
];
