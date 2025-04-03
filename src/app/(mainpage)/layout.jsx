import Logo from "@/components/logo";
import "../globals.css";
import Sidebar from "@/app/(mainpage)/_components/sidebar";
import { ToastContainer } from "react-toastify";
import Navbar from "./_components/navbar";

export const metadata = {
  title: {
    template: "%s | Monster",
    default: "Todo List | Monster",
  },
  description: "Homework 006 - Next.js",
};

export default function AuthenticationLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-charcoal">
        <div className="grid grid-cols-5">
          <Sidebar />
          <div className="col-span-4">
            <div className="mt-5">
              <Navbar />
              {children}
              <ToastContainer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
