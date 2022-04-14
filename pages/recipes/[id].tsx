import type { GetServerSideProps, NextPage } from "next";
import { Layout } from "../../components/layout";
import { Recipe } from "../../types";

const Recipe: NextPage<Recipe> = (props) => {
  return <Layout>{}</Layout>;
};

export default Recipe;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};
