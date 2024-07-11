import Image from "next/image";

const Hero = () => {
	return (
		<section className="mx-auto max-w-7xl mb-10 sm:mb-12 py-2 sm:py-4 px-4 lg:px-8">
			<div className="flex flex-col gap-2 items-center">
				<div className="self-start sm:self-center my-2 h-8 sm:h-10">
					<Image
						src="dmystified_logo_full.svg"
						alt="Dmsytified"
						width={150}
						height={150}
						className="w-full h-full"
					/>
				</div>

				<h1 className="w-full text-4xl sm:text-5xl md:text-6xl">
					<span className="font-medium text-orange">Empower</span>{" "}
					your future with{" "}
					<span className="font-medium text-orange">Expert</span>{" "}
					learning
				</h1>

				<div className="size-52 sm:size-60 md:size-80">
					<Image
						src="online_learning.svg"
						alt="Learn with Experts"
						width={200}
						height={200}
						className="w-full h-full"
					/>
				</div>

				<p className="w-full md:w-4/5 font-medium text-base sm:text-lg text-gray-800 text-center">
					Welcome to Dmystified, your gateway to mastering the tech
					skills you need to succeed.
				</p>
			</div>
		</section>
	);
};

export default Hero;