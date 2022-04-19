import type { GetServerSideProps, NextPage } from "next";
import { Layout } from "../../components/layout";
import { Recipe } from "../../types";

type Props = {
  recipe: Recipe;
};

const Recipe: NextPage<Props> = ({ recipe }) => {
  return <Layout>{}</Layout>;
};

export default Recipe;

export const getServerSideProps: GetServerSideProps = async (context) => {
  // keep this here to ensure typescript is happy
  if (typeof context.params?.id !== "string") {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  // data fetching will go here

  return {
    props: {},
  };
};
