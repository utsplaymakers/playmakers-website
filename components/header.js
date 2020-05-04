import Link from "next/link";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { defaultTheme } from "../theme";

const HeaderContainer = styled.div`
  display: flex;
  background: ${defaultTheme.text.black};
`;

const MenuIcon = styled.button`
  @media (min-width: 800px) {
    display: none;
  }
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 100;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${defaultTheme.text.black};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  @media (max-width: 800px) {
    display: flex;
    background: ${defaultTheme.bg.black};
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    height: 100vh;
    text-align: left;
    padding: 1rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    transition: transform 0.3s ease-in-out;
  }
`;

const PageLink = styled.p`
  padding: 1rem;
  font-family: "FiraSans";
  font-weight: 500;
  list-style-type: none;

  a {
    color: ${defaultTheme.text.white};
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;

    display: inline-block;
    padding: 15px 20px;
    position: relative;
  }
`;

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <HeaderContainer>
      <title>UTS Playmakers</title>
      <MenuIcon open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </MenuIcon>
      <Links open={open}>
        {[{ title: "Playmakers", route: "/" }].map((navigationItem) => (
          <PageLink key={navigationItem.title}>
            <Link href={navigationItem.route}>
              <a>{navigationItem.title}</a>
            </Link>
          </PageLink>
        ))}
      </Links>
    </HeaderContainer>
  );
}

export default Header;
