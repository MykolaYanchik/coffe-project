import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Layout from "./components/Layout/Layout";
import links from "./utils/links";
import Authtorization from "./pages/Authtorization/Authtorization";
import Registration from "./pages/Registration/Registration";
import SignIn from "./pages/SignIn/SignIn";

function App() {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      />
      <Route path={links.authorization} element={<Authtorization />} />
      <Route path={links.registration} element={<Registration />} />
      <Route path={links.signIn} element={<SignIn />} />
    </Routes>
  );
}

export default App;
