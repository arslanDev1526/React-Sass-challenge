
import { Nav } from "./components/nav";
import { MainBody } from "./components/mainbody";
import { CardsData } from "./components/cardsdata";
import { PostMainBody } from "./components/postmainbody";
import { Testimonials } from "./components/testimonials";
import { Subscripition } from "./components/subscripition";
import { Footer } from "./components/footer";
import "../src/components/wrapper.scss"

function App() {
  return (
    <div className="wrapper">
      <Nav />
      <MainBody />
      <CardsData />
      <PostMainBody />
      <Testimonials />
      <Subscripition />
      <Footer />
      </div>
  );
}

export default App;
