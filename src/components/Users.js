import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useApiMoviesArraySelector } from "../store/selectors";
import React from "react";

export default function Profile() {
  const location = useLocation();
  const apiMoviesArray = useApiMoviesArraySelector();
  useEffect(() => {
    new URLSearchParams(location.search);
  }, [location);
  const searchParams = new URLSearchParams(location.search);

  const gender = searchParams.get("title");
  const age = searchParams.get("rating");
  var filteredUsers = gender
    ? apiMoviesArray.filter((u) => u.title === gender)
    : apiMoviesArray;
  filteredUsers = age
    ? filteredUsers.filter((u) => u.rating >= age)
    : filteredUsers;

  //   let filteredUsers = gender ? users.filter((u) => u.gender === gender) : users;
  //   filteredUsers = age
  // ? filteredUsers.filter((u) => u.age >= age)
  // : filteredUsers;
  return (
    <div>
      {filteredUsers.map((f) => f.rating)}
      hi
    </div>
  );
}
