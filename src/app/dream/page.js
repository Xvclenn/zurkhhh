// pages/photo.js
import Image from "next/image";
import React from "react";

function PhotoPage() {
	return (
		<>
			<div className="flex min-h-screen flex-col items-center pt-24 pb-24 px-8">
				<Image
					src="/dream.png"
					alt="name"
					className="dark:invert m-6"
					width={150}
					height={24}
					priority
				/>
				<p className="m-10">_ _ _ _ _ _ _</p>
				<div className=" w-[330px] pt-10">
					<video autoPlay loop muted playsInline>
						<source src="/chika3.mov" type="video/mp4" />
					</video>
				</div>
				<h3 className=" text-center">
					Энэ хэсэгт үнэхээр амжсангүйээ Хайраа <br />
					🙏🏾
					<br /> Уг нь зөндөө их юм бодцон байсээн.
				</h3>
			</div>
		</>
	);
}

export default PhotoPage;
