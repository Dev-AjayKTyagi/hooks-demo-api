import React, { useContext } from "react";
import { HashLoader } from "react-spinners";
import GithubContext from "../../context/github/GithubContext";
import UserItem from "./UserItem";

function UserResults() {
  const { users, loading } = useContext(GithubContext);

  if (loading) {
    return (
      <div>
        <HashLoader
          color='#808080'
          loading={loading}
          size={100}
          className='mx-auto'
        />
      </div>
    );
  }
  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user, index) => (
          <UserItem key={index} user={user} />
        ))}
      </div>
    );
  }
}

export default UserResults;
