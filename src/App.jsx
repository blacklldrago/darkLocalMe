import { Route, Routes } from "react-router-dom";
import Layout from "./component/container/Layout/Layout";
import About from "./component/container/About/About";
import Product from "./component/container/Product/Product";
import Homepage from "./component/container/Homepage/Homepage";
import NoMatch from "./component/container/NoMatch/NoMatch";





function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element = {<Layout/>}>
        <Route index element = {<Homepage />} />
        <Route path="/about" element = {<About/>} />
        <Route path="/blog" element = {<Product />} />
        <Route path="*" element = {<NoMatch/>} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
