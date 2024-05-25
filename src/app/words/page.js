// pages/photo.js
import Image from "next/image";
import React from "react";

function PhotoPage() {
	return (
		<>
			<div className="flex min-h-screen flex-col items-center pt-24 pb-24">
				<Image
					src="/dear.png"
					alt="name"
					className="dark:invert m-6"
					width={200}
					height={24}
					priority
				/>
				<p className="m-10">_ _ _ _ _ _ _</p>
			</div>
		</>
	);
}

export default PhotoPage;
