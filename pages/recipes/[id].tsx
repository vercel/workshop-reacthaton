import type { GetServerSideProps, NextPage } from "next";
import { Layout } from "../../components/layout";
import { RecipeDetail } from "../../components/RecipeDetails";
import useSWR from "swr";
import { SyntheticEvent, useState } from "react";

import { database } from "../../lib/database";
import { Comment, Recipe } from "../../types";
import { Comments } from "../../components/Comments";

type Props = {
  recipe: Recipe;
  comments: Comment[];
};

const Recipe: NextPage<Props> = ({ recipe }) => {
  const { data: comments, error } = useSWR(
    String(recipe.id),
    database.comments
  );

  const [comment, setComment] = useState("");

  const handleChange = (newComment: string) => {
    setComment(newComment);
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    database.createComment({
      author: "Gui",
      content: comment,
      recipe_id: String(recipe.id),
    });
    setComment("");
  };

  return (
    <Layout>
      <RecipeDetail recipe={recipe} />
      {comments ? <Comments comments={comments} /> : null}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="comment" className="sr-only">
            Comment
          </label>
          <input
            id="comment"
            name="comment"
            value={comment}
            onChange={(event) => handleChange(event.target.value)}
            className="shadow-sm block w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm border border-gray-300 rounded-md"
            placeholder="Add a comment"
            defaultValue={""}
          />
        </div>
        <button type="submit">Add Comment</button>
      </form>
    </Layout>
  );
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

  const recipe = await database.recipe(context.params.id);

  return {
    props: {
      recipe,
    },
  };
};
