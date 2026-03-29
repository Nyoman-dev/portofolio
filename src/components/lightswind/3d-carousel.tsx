/** @format */

// components/ThreeDCarousel.tsx
"use client";

import { useRef, useEffect, useState, TouchEvent } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Card, CardContent } from "./card";
import { useIsMobile } from "@/hooks/use-mobile";
import { IconType } from "react-icons";

type StackItem = {
	icon: IconType;
	name: string;
};

export interface ThreeDCarouselItem {
	id: number;
	title: string;
	img: string;
	stack: StackItem[];
	description: string;
}

interface ThreeDCarouselProps {
	items: ThreeDCarouselItem[];
	autoRotate?: boolean;
	rotateInterval?: number;
	cardHeight?: number;
	title?: string;
	subtitle?: string;
	tagline?: string;
	isMobileSwipe?: boolean;
}

const ThreeDCarousel = ({
	items,
	autoRotate = true,
	rotateInterval = 4000,
	cardHeight = 500,
	isMobileSwipe = true,
}: ThreeDCarouselProps) => {
	const [active, setActive] = useState(0);
	const carouselRef = useRef<HTMLDivElement>(null);
	const [isInView, setIsInView] = useState(false);
	const [isHovering, setIsHovering] = useState(false);
	const [touchStart, setTouchStart] = useState<number | null>(null);
	const [touchEnd, setTouchEnd] = useState<number | null>(null);
	const isMobile = useIsMobile();
	const minSwipeDistance = 50;

	useEffect(() => {
		if (autoRotate && isInView && !isHovering) {
			const interval = setInterval(() => {
				setActive((prev) => (prev + 1) % items.length);
			}, rotateInterval);
			return () => clearInterval(interval);
		}
	}, [isInView, isHovering, autoRotate, rotateInterval, items.length]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => setIsInView(entry.isIntersecting),
			{ threshold: 0.2 },
		);
		return () => observer.disconnect();
	}, []);

	const onTouchStart = (e: TouchEvent) => {
		setTouchStart(e.targetTouches[0].clientX);
		setTouchEnd(null);
	};

	const onTouchMove = (e: TouchEvent) => {
		setTouchEnd(e.targetTouches[0].clientX);
	};

	const onTouchEnd = () => {
		if (!touchStart || !touchEnd) return;
		const distance = touchStart - touchEnd;
		if (distance > minSwipeDistance) {
			setActive((prev) => (prev + 1) % items.length);
		} else if (distance < -minSwipeDistance) {
			setActive((prev) => (prev - 1 + items.length) % items.length);
		}
	};

	const getCardAnimationClass = (index: number) => {
		if (index === active) return "scale-100 opacity-100 z-20";
		if (index === (active + 1) % items.length)
			return "translate-x-[40%] scale-95 opacity-60 z-10";
		if (index === (active - 1 + items.length) % items.length)
			return "translate-x-[-40%] scale-95 opacity-60 z-10";
		return "scale-90 opacity-0";
	};

	return (
		<section
			id='ThreeDCarousel'
			className='bg-transparent  mx-aut 
    flex items-center justify-center'>
			<div
				className='w-full px-4 sm:px-6 lg:px-8 
      min-w-87.5 md:min-w-250 max-w-7xl'>
				<div
					className='relative overflow-hidden h-110'
					onMouseEnter={() => setIsHovering(true)}
					onMouseLeave={() => setIsHovering(false)}
					onTouchStart={onTouchStart}
					onTouchMove={onTouchMove}
					onTouchEnd={onTouchEnd}
					ref={carouselRef}>
					<div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
						{items.map((item, index) => (
							<div
								key={item.id}
								className={`absolute top-0 w-full max-w-md transform transition-all duration-500 ${getCardAnimationClass(
									index,
								)}`}>
								<Card
									className={`overflow-hidden bg-background h-[${cardHeight}px] border shadow-xs 
                hover:shadow-md flex flex-col`}>
									<div
										className='relative bg-black p-6 flex items-center justify-center h-48 overflow-hidden'
										style={{
											backgroundImage: `url(${item.img})`,
											backgroundSize: "cover",
											backgroundPosition: "center",
										}}></div>

									<CardContent className='p-6 flex flex-col grow border border-[#2c2c2c] rounded-b-lg'>
										<h3 className='text-xl font-bold mb-1 text-foreground'>
											{item.title}
										</h3>
										<p className='text-gray-500 text-sm font-medium mb-2'>{item.title}</p>
										<p className='text-gray-600 text-sm grow'>{item.description}</p>

										<div className='mt-4'>
											<div className='flex flex-wrap gap-2 mb-4'>
												{item.stack.map((stack, index) => {
													const Icon = stack.icon;
													return (
														<span
															key={index}
															className='px-2 py-1 bg-gray-50 text-gray-600 rounded-full text-xs animate-pulse-slow flex gap-1 items-center'>
															<Icon /> {stack.name}
														</span>
													);
												})}
											</div>
										</div>
									</CardContent>
								</Card>
							</div>
						))}
					</div>

					{!isMobile && (
						<>
							<button
								className='absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10  rounded-full flex items-center justify-center text-gray-500 hover:bg-[#2c2c2c] z-30 shadow-md transition-all hover:scale-110'
								onClick={() =>
									setActive((prev) => (prev - 1 + items.length) % items.length)
								}
								aria-label='Previous'>
								<ChevronLeft className='w-5 h-5' />
							</button>
							<button
								className='absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:bg-[#2c2c2c] z-30 shadow-md transition-all hover:scale-110'
								onClick={() => setActive((prev) => (prev + 1) % items.length)}
								aria-label='Next'>
								<ChevronRight className='w-5 h-5' />
							</button>
						</>
					)}
					<div className='absolute bottom-6 left-0 right-0 flex justify-center items-center space-x-3 z-30'>
						{items.map((_, idx) => (
							<button
								key={idx}
								className={`w-2 h-2 rounded-full transition-all duration-300 ${
									active === idx ? "bg-gray-500 w-5" : "bg-gray-200 hover:bg-gray-300"
								}`}
								onClick={() => setActive(idx)}
								aria-label={`Go to item ${idx + 1}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ThreeDCarousel;
