import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Kemal | ngl",
	description: "Send an anonymous message!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className="dark">
			<body
				className={`${inter.className} p-5 flex justify-center items-center bg-gradient-to-br from-emerald-500 via-sky-500 to-fuchsia-500 w-[100vw] h-[100vh]`}>
				{children}
			</body>
		</html>
	);
}
