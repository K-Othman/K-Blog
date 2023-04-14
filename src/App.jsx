import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/homePage/Homepage";
import Blog from "./pages/blog/Blog";
import SinglePost from "./pages/singlePage/SinglePage";
import Error from "./pages/error/Error";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog:slug" element={<SinglePost />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
