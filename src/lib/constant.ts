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
		description: "Framework React Web",
	},
	{
		name: "Tailwind CSS",
		img: "/icons/teknologi/tailwind.svg",
		description: "CSS Framework",
	},
	{
		name: "Laravel",
		img: "/icons/teknologi/laravel.gif",
		description: "PHP Framework",
	},
	{
		name: "React JS",
		img: "/icons/teknologi/react.gif",
		description: "Javascipt Library",
	},
	{
		name: "MySQL",
		img: "/icons/teknologi/mysql.svg",
		description: "Database",
	},
	{
		name: "Github",
		img: "/icons/teknologi/github.svg",
		description: "Repository",
	},
];

export const project = [
	{
		id: 1,
		img: "/benner/ai.png",
		title: "Ask to AI",
		stack: [
			{ icon: IoLogoLaravel, name: "Laravel" },
			{ icon: RiTailwindCssLine, name: "Tailwind" },
		],
		description: "Ask discover new things",
	},
	{
		id: 2,
		img: "/benner/kursus.png",
		title: "Course Registration",
		stack: [
			{ icon: IoLogoLaravel, name: "Laravel" },
			{ icon: RiTailwindCssLine, name: "Tailwind" },
			{ icon: IoRocketOutline, name: "Filament" },
		],
		description: "Online Enrollment System",
	},
	{
		id: 3,
		img: "/benner/donasi.png",
		title: "Donation Raising",
		stack: [
			{ icon: IoLogoLaravel, name: "Laravel" },
			{ icon: RiTailwindCssLine, name: "Tailwind" },
			{ icon: IoRocketOutline, name: "Filament" },
		],
		description: "Donation System with Payment Gateway",
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
