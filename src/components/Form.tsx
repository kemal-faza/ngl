"use client";
import { addMessage } from "@/lib/action";

export default function Form() {
	return (
		<div className="flex mt-4 md:mt-6 w-full">
			<form
				className="w-full"
				action={addMessage}>
				<label
					htmlFor="message"
					className="sr-only">
					Your message
				</label>
				<textarea
					id="message"
					name="message"
					rows={2}
					required
					className="whitespace-pre-line outline-none resize-none block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500 dark:bg-gradient-to-tr dark:from-slate-700 dark:to-slate-800"
					placeholder="Your message..."></textarea>
				<button
					type="submit"
					className="w-full mt-3 flex justify-center text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gradient-to-r dark:from-emerald-500 dark:to-sky-500 dark:hover:opacity-80 transition duration-300 focus:outline-none ">
					<svg
						className="w-5 h-5 rotate-90 rtl:-rotate-90"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 18 20">
						<path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
					</svg>
				</button>
			</form>
		</div>
	);
}
