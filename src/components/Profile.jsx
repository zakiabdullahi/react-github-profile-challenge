import { useContext } from "react";
import { UserContext } from "../App";

const Profile = () => {
  const { userdata } = useContext(UserContext);
  return (
    <div className="w-72 lg:w-full h-full bg-indigo-400  flex flex-col items-center p-4 text-gray-300 ">
      <img
        className="w-32 h-32 border rounded-full"
        src={userdata && userdata.avatar_url}
        alt=""
      />
      <h2>{userdata && userdata.name}</h2>
      <span>@{userdata && userdata.login}</span>
      <span>joined:{userdata && userdata.created_at?.slice(0, 4)}</span>
      <div className=" flex justify-between  gap-4">
        <div className="flex gap-4 items-center">
          <span className="text-lg ">{userdata && userdata.following}</span>
          <span className="text-lg font-bold">Following</span>
        </div>
        <div className="flex gap-4 items-center">
          <span className="text-lg ">{userdata && userdata.followers}</span>
          <span className="text-lg font-bold">Followers</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
