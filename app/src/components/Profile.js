// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { useApiMoviesArraySelector } from "../store/selectors";

// export default function Profile() {
//   const location = useLocation();
//   const apiMoviesArray = useApiMoviesArraySelector();

//   useEffect(() => {
//     // const currentPath = location.pathname;
//     const searchParams = new URLSearchParams(location.search);
//     const gender = searchParams.get("gender");
//     const age = searchParams.get("age");
//     let filteredUsers = gender
//       ? users.filter((u) => u.gender === gender)
//       : users;
//     filteredUsers = age
//       ? filteredUsers.filter((u) => u.age >= age)
//       : filteredUsers;
//   }, [location);

//   let filteredUsers = gender ? users.filter((u) => u.gender === gender) : users;
//   filteredUsers = age
//     ? filteredUsers.filter((u) => u.age >= age)
//     : filteredUsers;
//   return <p>Profile</p>;
// }
