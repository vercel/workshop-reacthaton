import Link from "next/link";
import { database } from "../lib/database";
import { Recipe } from "../types";

type Props = {
  recipes: Recipe[];
};

export const RecipeList: React.VFC<Props> = ({ recipes }) => {
  return (
    <div className="flow-root mt-6 max-w-xl mb-5">
      <ul role="list" className="-my-5 divide-y divide-gray-200">
        {recipes.map((recipe) => (
          <li key={recipe.id} className="py-5">
            <Link href={`/recipes/${recipe.id}`}>
              <div className="relative focus-within:ring-2 focus-within:ring-indigo-500 cursor-pointer">
                <h3 className="text-sm font-semibold text-gray-800">
                  <p className="hover:underline focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {recipe.name}
                  </p>
                </h3>
                <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                  {recipe.ingredients.join(", ")}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
