import { createContext, useState } from "react";
import Input from "./components/Input";
import Profile from "./components/Profile";
import "./index.css";

export const UserContext = createContext({
  user: {},
});
function App() {
  const [userdata, setUserData] = useState({});
  return (
    <UserContext.Provider value={{ userdata, setUserData }}>
      <div
        className=" w-screen  h-screen  flex justify-center
    items-center
      
    "
      >
        <div className=" flex flex-col justify-center items-center  gap-4 ">
          <Input />
          <Profile />
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
