import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Tailwind,
  Container,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Text className="font-bold text-3xl">Hello {name}</Text>
            <Link href="'https://github.com/Multyjog">github/Multyjog</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

const body: CSSProperties = {};
const heading: CSSProperties = {
  fontSize: "32px",
};

export default WelcomeTemplate;
