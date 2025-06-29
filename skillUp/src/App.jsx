import {useEffect} from "react";
import Nav from "./components/Nav";
import MainRoutes from "./routes/MainRoutes";
import {asynccurrentuser} from "./store/actions/userActions";
import {useDispatch} from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asynccurrentuser());
  }, []);
  return (
    <>
      {/* Fixed navbar container */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Nav />
      </div>

      {/* Content with padding and no horizontal scroll */}
      <div className="pt-20 overflow-x-hidden">
        <MainRoutes />
      </div>
    </>
  );
};

export default App;
