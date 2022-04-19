import type { NextPage } from "next";
import { Layout } from "../components/layout";
import { RecipeList } from "../components/RecipeList";
import { Recipe } from "../types";

type Props = {
  recipes: Recipe[];
};

const Recipes: NextPage<Props> = ({ recipes }) => {
  return (
    <Layout>
      <main className="w-full flex justify-center">
        <RecipeList recipes={recipes} />
      </main>
    </Layout>
  );
};

export default Recipes;
