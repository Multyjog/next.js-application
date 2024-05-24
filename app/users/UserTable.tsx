import React from "react";
import Link from "next/link";
import { sort } from "fast-sort";
import { useParams } from "next/navigation";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: User[] = await res.json();

  let sortedUsers: User[] = [];
  switch (sortOrder) {
    default:
      sortedUsers = sort(users).asc((user) => user.name);
      break;
    case "-name":
      sortedUsers = sort(users).desc((user) => user.name);
      break;
    case "email":
      sortedUsers = sort(users).asc((user) => user.email);
      break;
    case "-email":
      sortedUsers = sort(users).desc((user) => user.email);
      break;
  }

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>
            <Link
              href={
                sortOrder === "name"
                  ? "/users?sortOrder=-name"
                  : "/users?sortOrder=name"
              }
            >
              Name
            </Link>
          </th>
          <th>
            <Link
              href={
                sortOrder === "email"
                  ? "/users?sortOrder=-email"
                  : "/users?sortOrder=email"
              }
            >
              Email
            </Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
