import Link from "next/link";

export default function Thanks() {
	return (
		<div className="w-full max-w-md m-auto bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800/70 dark:border-gray-700/70 backdrop-blur-sm">
			<div className="flex flex-col items-center p-5">
				<div
					className="w-24 h-24 mb-3 rounded-full shadow-lg"
					style={{
						backgroundImage: "url('./img/profile.jpg')",
						backgroundSize: "cover",
					}}></div>
				<h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
					Kemal
				</h5>
				<span className="text-sm text-gray-500 dark:text-emerald-500 font-bold">
					Thank you for your message!
				</span>
				<Link
					href={"/"}
					className="w-full mt-3 flex justify-center text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gradient-to-r dark:from-emerald-500 dark:to-sky-500 dark:hover:opacity-80 transition duration-300 focus:outline-none ">
					Send Again!
					<svg
						className="w-5 h-5 rotate-90 rtl:-rotate-90 ml-3"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 18 20">
						<path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
					</svg>
				</Link>
			</div>
		</div>
	);
}
