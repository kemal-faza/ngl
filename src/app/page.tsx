import Form from "@/components/Form";
import { addMessage } from "@/lib/action";

export default async function Home() {
	return (
		<>
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
					<span className="text-sm text-gray-500 dark:text-gray-400">
						Send to me an anonymous message!
					</span>
					<Form />
				</div>
			</div>
		</>
	);
}
