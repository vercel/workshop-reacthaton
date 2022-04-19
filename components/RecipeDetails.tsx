import { Recipe } from "../types";

type Props = {
  recipe: Recipe;
};

export const RecipeDetail: React.VFC<Props> = ({ recipe }) => {
  return (
    <div className="min-h-full">
      <main className="py-10">
        <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
          <div className="space-y-6 lg:col-start-1 lg:col-span-2">
            <section aria-labelledby="applicant-information-title">
              <div className="bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h2
                    id="applicant-information-title"
                    className="text-lg leading-6 font-medium text-gray-900"
                  >
                    {recipe.name}
                  </h2>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                  <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">
                        Ingredients
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        <ul>
                          {recipe.ingredients.map((ingredient) => (
                            <li key={ingredient}>{ingredient}</li>
                          ))}
                        </ul>
                      </dd>
                    </div>

                    <div className="sm:col-span-2">
                      <dt className="text-sm font-medium text-gray-500">
                        Steps
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        <ul>
                          {recipe.steps.map((step) => (
                            <li key={step}>{step}</li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};
