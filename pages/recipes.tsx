import type { NextPage } from "next";
import { Layout } from "../components/layout";
import { Recipe } from "../types";

type Props = {
  recipes: Recipe[];
};

const Recipes: NextPage<Props> = ({ recipes }) => {
  return (
    <Layout>
      <main className="w-full flex justify-center">
        {/* You can render RecipeList here or create your own component! */}
      </main>
    </Layout>
  );
};

export default Recipes;
