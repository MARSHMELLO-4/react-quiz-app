import axios from "axios";
import { apiConfig } from "./apiCongif";
import type { QuizType } from "../../types/QuizType";

export const BASE_URL = "https://quizapi.io/api/v1";

interface CategoryType {
  data: any;
  status: number;
  headers: any;
  config: any;
  request?: any;
}

export const fetchCategories = async () => {
  try {
    const res: CategoryType = await axios.get(
      `${BASE_URL}/categories`,
      apiConfig,
    );
    console.log("Data fetched from api", res);
    return res.data;
  } catch (error: any) {
    console.log("Cant fetch initial categories due to error", error.message);
  }
};

export const fetchQuizzes = async () => {
  try {
    const res: Record<any, any> = await axios.get(
      `${BASE_URL}/quizzes`,
      apiConfig,
    );
    console.log("Data fetched from api", res);
    return res.data;
  } catch (error: any) {
    console.log("Cant fetch initial categories due to error", error.message);
  }
};

export const fetchQuiz = async (id : string) => {
  try {
    const res: Record<any, any> = await axios.get(
      `${BASE_URL}/quizzes/${id}`,
      apiConfig,
    );
    console.log("Quiz Data fetched from api", res);
    return res;
  } catch (error: any) {
    console.log("Cant fetch questions due to error", error.message);
  }
};
