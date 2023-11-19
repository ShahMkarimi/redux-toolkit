import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/Header/Header";
import Provide from "@/Redux/provide";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "redux-toolkit & nextjs",
  description: "tree app /counter/ todo list/ shopping cart",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <Provide>
          <Header />
          {children}
        </Provide>
      </body>
    </html>
  );
}
