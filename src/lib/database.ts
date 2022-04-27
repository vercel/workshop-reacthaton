import { createClient } from "@supabase/supabase-js";
import { Recipe, Comment } from "../types";

const NEXT_PUBLIC_SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const NEXT_PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;

export const supabase = createClient(
  NEXT_PUBLIC_SUPABASE_URL ?? "",
  NEXT_PUBLIC_SUPABASE_KEY ?? ""
);

export const database = {
  /**
   *
   * @returns a list of all the recipes
   * @example await database.recipes();
   */
  recipes: async () => {
    try {
      const { data } = await supabase.from<Recipe>("recipes").select("*");

      return data;
    } catch (err) {
      console.log("error", err);
    }
  },
  /**
   *
   * @param id the id of the recipe to get
   * @returns the recipe with the given id
   * @example await database.recipe(1);
   */
  recipe: async (id: string) => {
    try {
      const { data: recipe } = await supabase
        .from<Recipe>("recipes")
        .select("*")
        .eq("id", id)
        .single();
      return recipe;
    } catch (err) {
      console.log(err);
    }
  },

  /**
   *
   * @param recipeId the id of the recipe to get comments for
   * @returns a list of comments for the given recipe
   * @example await database.comments(1);
   */
  comments: async (recipeId: string) => {
    try {
      const { data: comments } = await supabase
        .from<Comment>("comments")
        .select("*")
        // @ts-ignore
        .eq("recipe_id", recipeId);
      return comments;
    } catch (err) {
      console.log(err);
    }
  },

  /**
   *
   * @param comment the comment to add
   * @returns Boolean indicating success
   * @example await database.addComment({ author: "Gui", content: "hello", recipe_id: 1 });
   */
  createComment: async (comment: Comment) => {
    try {
      await supabase.from<Comment>("comments").insert(comment);
      return true;
    } catch (err) {
      console.log(err);
    }
  },
};
