import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/Newsletter/Newsletter";
import Deals from "./components/Deals/Deals";
import Products from "./components/Products/Products";
import "./styles/style.scss";
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <Products />
        <Deals />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
