import { useContext, useEffect } from "react";
import { useState } from "react";
import { UserContext } from "../App";

// `https://api.github.com/users/${searchUser}`

const Input = () => {
  const [search, setSearch] = useState("zakiabdullahi");
  const { userdata, setUserData } = useContext(UserContext);
  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(`https://api.github.com/users/${search}`);
      const data = await response.json();
      setUserData(data);
    };
    getUser();
  }, [search]);
  return (
    <div className=" w-72 flex justify-center lg:w-full">
      <input
        className=" w-[400px] px-4 rounded-sm   border border-gray-600 outline-none"
        type="text"
        placeholder="enter a user"
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      {/* <button
        className="px-4 bg-indigo-600 text-white rounded-sm"
        type="submit"
      >
        Search
      </button> */}
    </div>
  );
};

export default Input;
