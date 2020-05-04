import styled from "styled-components";
import Layout from "../components/layout";
import Header from "../components/header";

const Title = styled.h1`
  text-align: left;
  font-family: "Montserrat-bold";
  padding-left: 2rem;
  font-size: 5rem;
`;

const Index = ({}) => {
  return (
    <>
      <Header />
      <Layout>
        <Title> Become a Playmaker </Title>
      </Layout>
    </>
  );
};

export default Index;
