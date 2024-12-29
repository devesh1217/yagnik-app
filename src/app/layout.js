import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./globals.css";

export const metadata = {
    title: "Home | Sai General Store",
    description: "All kind of Government and Semi-Government are services available here.",
    themeColor: "#11192d",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta name="apple-mobile-web-app-title" content="Sai General Store" />
                <meta name="application-name" content="Sai General Store" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#000000" />
            </head>
            <body className={"bg-slate-900 min-h-screen"}>
                <NavBar></NavBar>
                {children}
                <Footer></Footer>
            </body>
        </html>
    );
}
