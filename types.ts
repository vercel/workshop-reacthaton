export interface Recipe {
  id: number /* primary key */;
  created_at?: string;
  ingredients: string[];
  likes: number;
  name: string;
  steps: string[];
}

export interface Comment {
  id: number;
  created_at?: string;
  content: string;
  author: string;
  recipe_id: string;
  recipes?: Recipe;
}
