import Image from "next/image";
// import aprilia from "@/public/images/aprilia.jpg";

import React from "react";

const ImageComponent = () => {
  return (
    // <Image src={aprilia} alt="Group of biker on aprilia" />
    <Image
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
    />
  );
};

export default ImageComponent;
