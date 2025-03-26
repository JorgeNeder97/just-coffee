import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "./normalize.css";
import NavBar from "@/components/NavBar";
import tropikaFont from 'next/font/local';

const tropika = tropikaFont({
    src: '../../public/font/aiyari-tropika-island-int.otf',
    variable: "--font-tropika",
    display: "swap",
});

const poppins = Poppins({
    weight: ["300", "400", "500", "600", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Just Coffee",
    description: "Un sitio para los amantes del café.",
    icons: "Logo.png",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className={tropika.variable}>
            
            <body className={poppins.className}>
                <NavBar />
                {children}
            </body>
        </html>
    );
}
