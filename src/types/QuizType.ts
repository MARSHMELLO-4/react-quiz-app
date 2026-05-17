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

export type QuestionType = {
  id : string,
  text : string,
  type : string,
  difficulty : string,
  explaination : string,
  order : number,
  answers : AnswerType[]
}

export type AnswerType = {
  id : string,
  text : string,
  isCorrect : boolean
}
