import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Component";
import { SignUp } from "./Component";
import { Login } from "./Component";
import RequireAuth from "./Component/Auth/RequireAuth";
import Inventory from "./Component/Inventory/Inventory";
import ManageInt from "./Component/Manage/ManageInt";
import { NotFound } from "./Component";
import { Blog } from "./Component";
import Additem from "./Component/AddItem/Additem";
import Myitem from "./Component/Myitem/Myitem";

function App() {
  // const [user] = useAuthState(auth);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/manageinvt" element={<ManageInt />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/additem" element={<Additem />} />
        <Route path="/myitem" element={<Myitem />} />
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <Inventory />
            </RequireAuth>
          }
        />

        {/* <Route path={"/checkout"} element={<CheckOut />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/signup" element={<SignUp />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} /> */}

        {/* <Banner />
        <Services />
        <Footer />
        <Blog />
        <AboutUs /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
