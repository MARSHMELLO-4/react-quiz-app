import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategories, fetchQuizzes } from "../api/apiFetch";
import type { QuizType } from "../../types/QuizType";
import QuizCard from "../cards/QuizCard";
import { Grid, Stack } from "@mui/material";
const Dashboard = () => {
  const [quizData, setQuizData] = useState<QuizType[]>([]);
  useEffect(() => {
    fetchQuizzes().then((data) => {
      if (data) {
        setQuizData(data.data);
      }
    });
  }, []);
  console.log("Quiz data got is ", quizData);
  return (
    <div>
      <Grid container spacing={2}>
        {quizData.map((quiz: QuizType) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={quiz.id}>
            <QuizCard {...quiz} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Dashboard;
