import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./globals.css";

export const metadata = {
    title: "Home | Sai General Store",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={"bg-slate-900 min-h-screen"}>
                <NavBar></NavBar>
                {children}
                <Footer></Footer>
            </body>
        </html>
    );
}
