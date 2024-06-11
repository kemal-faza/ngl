import { revalidatePath } from "next/cache";
import { addData } from "./db";
import { redirect } from "next/navigation";

export async function addMessage(formData: FormData) {
	const data = {
		message: formData
			.get("message")
			?.toString()
			.replaceAll(/\n/g, "<br/>")
			.replaceAll(/\s/g, "&nbsp;"),
		date: Date.now().toString(),
	};

	await addData("messages", data);

	redirect("/thanks");
}
