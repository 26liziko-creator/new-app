import Header from "../components/Header/Header";
import Footer from "../components/Header/Footer";

export const metadata = {
  title: "CodeIT",
  description: "Next.js app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}