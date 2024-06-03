"use client";
// import { getServerSession } from "next-auth";
// import { authOptions } from "./api/auth/[...nextauth]/route";

export default function Home() {
  // const session = await getServerSession(authOptions);
  return (
    <main className="relative h-screen">
      <h1>Hello world</h1>
      <button
        onClick={async () => {
          const _ = (await import("lodash")).default;
          const users = [{ name: "c" }, { name: "a" }, { name: "b" }];
          const sortedArr = _.orderBy(users, ["name"]);
          console.log(sortedArr);
        }}
      >
        Show
      </button>
    </main>
  );
}

// Static meta
// export const metadata: Metadata = {
//   title: "Home Page",
//   description: "My home page",
// };

// Dynamic meta
// export async function generateMetada(): Promise<Metadata> {
//   const product = await fetch('')

//   return {
//     title: 'product.title'
//     // ...
//   }
// }
