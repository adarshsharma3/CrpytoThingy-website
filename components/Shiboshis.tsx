"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const ShiboshisBanner = () => {
	const imageRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !isVisible) {
						setIsVisible(true);
					}
				});
			},
			{ threshold: 0.5 }
		);

		if (imageRef.current) {
			observer.observe(imageRef.current);
		}

		return () => {
			if (imageRef.current) {
				observer.unobserve(imageRef.current);
			}
		};
	}, [isVisible]);

	return (
		<div className="w-4/5 mx-auto">
			<div className="bg-slate-950 text-white py-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
				{/* Left Section (Text Content) */}
				<div className="flex flex-col items-center justify-center md:items-start md:justify-center gap-6 md:w-3/5 text-center md:text-left">
					<div className="relative">
						<Image
							src="/shiboshis-logo.png"
							alt="Shiboshis Logo"
							width={500}
							height={150}
							className="object-contain"
						/>
					</div>
					<p className="text-lg text-gray-400 max-w-xl">
						Discover *The Shiboshis*, a collection of 10,000 unique Shiba Inu
						NFTs on the Ethereum blockchain. Each Shiboshi boasts unique traits
						and will play an integral role in the upcoming Shiboshi Game.
					</p>
					<div className="flex flex-col gap-3 items-center md:items-start">
						<button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl py-2 px-6 text-lg">
							Shiboshis Collection
						</button>
						<button className="bg-blue-500 rounded-xl hover:bg-blue-600 text-white py-2 px-6 text-sm">
							Buy on OpenSea
						</button>
					</div>
				</div>

				{/* Right Section (Image with Scroll Animation) */}
				<div className="hidden md:flex md:w-2/5 justify-end overflow-hidden">
					<div
						ref={imageRef}
						className={`relative transition-all duration-1000 ${
							isVisible ? "animate-blur-left" : ""
						}`}
					>
						<Image
							src="/SHibosis.jpg"
							alt="Shiboshis Banner"
							width={500}
							height={500}
							className="rounded-lg"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShiboshisBanner;
