import Nav from "./components/Nav";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
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
