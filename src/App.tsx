import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow"> 
        <Content />
      </div>
      <Footer />
    </div>
  );
}

