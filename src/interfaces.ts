export interface Recipes {
  id: string;
  bookmarked: boolean;
  image_url: string;
  publisher: string;
  title: string;
}

export interface ingredient {
  description: string;
  quantity: number;
  unit: string;
}

export interface bookmarks {
  id: string;
  bookmarked: boolean;
  cooking_time: number;
  servings: number;
  publisher: string;
  title: string;
  image_url: string;
}
