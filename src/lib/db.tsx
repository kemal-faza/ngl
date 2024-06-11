import app from "./firebase";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const db = getFirestore(app);

export async function addData(collectionName: "messages", data: any) {
	await addDoc(collection(db, collectionName), data);
}
