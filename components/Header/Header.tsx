import React from "react";
import Link from "next/link";
import { Center } from "../Center";
import { Container, Logo } from "./style";

export const Header: React.FC = () => {
  return (
    <Container>
      <Center>
        <Logo>
          <Link href="/">
            <a> Whats new?!</a>
          </Link>
        </Logo>
      </Center>
    </Container>
  );
};
