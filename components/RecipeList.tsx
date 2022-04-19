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
            <div className="relative focus-within:ring-2 focus-within:ring-indigo-500">
              <h3 className="text-sm font-semibold text-gray-800">
                <a href="#" className="hover:underline focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  {recipe.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                {recipe.ingredients.join(", ")}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
