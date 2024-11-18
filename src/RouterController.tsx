import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";

const RouterController = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default RouterController
