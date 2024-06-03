// import Image from "next/image";
// import aprilia from "@/public/images/aprilia.jpg";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="relative h-screen">
      <h1>Hello world</h1>
      {/* <Image src={aprilia} alt="Group of biker on aprilia" /> */}
      {/* <Image
        src="https://picsum.photos/1920/1080"
        fill
        alt=""
        className="object-cover"
        // Full cover
        // sizes="100vw"

        // (@media property)
        sizes="(max-width: 480px) 100vw, (max-width:768px) 50vw, 33vw "
        quality={100}
        // Lazy by default, if I need image to download before user will see it, I set PRIORITY props
        priority
      /> */}
    </main>
  );
}
