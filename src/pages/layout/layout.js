import Welcome from "../welcome/welcome";
import About from "../about/about";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Layout() {
  return (
    <div>
      <Header />
      <Welcome />
      <Footer />
    </div>
  );
}
