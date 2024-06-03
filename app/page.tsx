"use client";

import { useState } from "react";
// import { getServerSession } from "next-auth";
// import { authOptions } from "./api/auth/[...nextauth]/route";

// Dynamic import
import dynamic from "next/dynamic";
const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
  ssr: false, // Disable pre-rendering
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  // const session = await getServerSession(authOptions);
  const [isVisible, setVisible] = useState(false);
  return (
    <main className="relative h-screen">
      <h1>Hello world</h1>
      <button onClick={() => setVisible(true)}>Show</button>
      {isVisible && <HeavyComponent />}
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
