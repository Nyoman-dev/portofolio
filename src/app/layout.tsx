/** @format */

import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const groteskFont = Space_Grotesk({
	variable: "--font-grotesk",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Nyoman Harun",
	description: "Portofolio Nyoman Harun",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className='scroll-smooth'>
			<body className={` ${groteskFont.variable} antialiased`}>{children}</body>
		</html>
	);
}
