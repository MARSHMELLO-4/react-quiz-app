export type CategoryType = {
  categories: QuizCategoryType[];
  icon: string;
  id: string;
  name: string;
  slug: string;
};

export type QuizCategoryType = {
  id: string;
  name: string;
  quizCount: number;
  slug: string;
  tags: string[];
};

export type QuizType = {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  difficulty: string;
  tags: string[];
  questionCount: number;
  plays: number;
};
