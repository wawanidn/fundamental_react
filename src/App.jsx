import "./App.css";
import { GlobalContext } from "../context";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routers";

function App() {
  const user = {
    username: "John Doe",
  };

  return (
    <div className="App">
      <GlobalContext.Provider value={user}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
