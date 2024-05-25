// pages/photo.js
import Image from "next/image";
import React from "react";

function PhotoPage() {
	return (
		<>
			<div className="flex min-h-screen flex-col items-center pt-24 pb-24 px-8">
				<Image
					src="/title1.png"
					alt="name"
					className="dark:invert m-6"
					width={100}
					height={24}
					priority
				/>
				<div className="h-full overflow-y-scroll whitespace-nowrap flex gap-6 flex-row">
					<Image
						src="/love/love1.png"
						alt="love"
						width={200}
						height={400}
					/>
					<Image
						src="/love/love2.png"
						alt="love"
						width={200}
						height={400}
					/>
					<Image
						src="/love/love3.png"
						alt="love"
						width={200}
						height={400}
					/>
					<Image
						src="/love/love4.png"
						alt="love"
						width={200}
						height={400}
					/>
					<Image
						src="/love/love5.png"
						alt="love"
						width={200}
						height={400}
					/>
					<Image
						src="/love/love6.png"
						alt="love"
						width={200}
						height={400}
					/>
					<Image
						src="/love/love7.png"
						alt="love"
						width={200}
						height={400}
					/>
					<Image
						src="/love/love8.png"
						alt="love"
						width={200}
						height={400}
					/>
					<Image
						src="/love/love9.png"
						alt="love"
						width={200}
						height={400}
					/>
					<Image
						src="/love/love10.png"
						alt="love"
						width={200}
						height={400}
					/>
				</div>
				<Image
					src="/halloween.png"
					alt="name"
					className="dark:invert m-6"
					width={100}
					height={24}
					priority
				/>
				<div className="h-full overflow-y-scroll whitespace-nowrap flex gap-6 flex-row">
					<Image
						src="/blue/blue1.png"
						alt="love"
						width={200}
						height={400}
					/>
					<Image
						src="/blue/blue2.png"
						alt="love"
						width={200}
						height={400}
					/>
					<Image
						src="/blue/blue3.png"
						alt="love"
						width={200}
						height={400}
					/>
					<Image
						src="/blue/blue4.png"
						alt="love"
						width={200}
						height={400}
					/>
					<Image
						src="/blue/blue5.png"
						alt="love"
						width={200}
						height={400}
					/>
					<Image
						src="/blue/blue6.png"
						alt="love"
						width={200}
						height={400}
					/>
				</div>
				<div className=" w-[330px] pt-10">
					<video autoPlay loop muted playsInline>
						<source src="/chika2.mov" type="video/mp4" />
					</video>
				</div>
			</div>
		</>
	);
}

export default PhotoPage;
