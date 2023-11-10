import Content from "./Content";
import Footer from "./Footer";
import Logo from "./Logo";
import Main from "./Main";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Main>
        <Logo />
        <Content />
        <Footer />
      </Main>
    </div>
  );
}

export default App;
