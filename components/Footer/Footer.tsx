import React from "react";
import { Center } from "../Center";
import { Container } from "./style";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <Center>
        <a href="https://fullstack.io">Fullstack.io</a> {currentYear}
      </Center>
    </Container>
  );
};
