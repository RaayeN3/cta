import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className=" h-screen text-white bg-bg h-lvh ">
        <Navbar />
        <div className=" w-4/5 m-auto flex justify-between flex-col my-12">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
