import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import type { QuestionType } from "../../types/QuizType";
import { fetchQuiz } from "../api/apiFetch";
import QuestionCard from "../cards/QuestionCard";
import { Box, Button, Stack } from "@mui/material";
import LoadingIndicator from "../utils/LoadingIndicator";

const Questions = () => {
  const [questions, setQuestions] = useState<QuestionType[]>([]); //TODO : Question type has to be made
  const params = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (params.id) {
      fetchQuiz(params.id).then((data) => {
        if (data) {
          setQuestions(data.data.data.questions);
          setLoading(false);
        }
      });
    } else {
      throw Error("Cant find the quiz id");
    }
  }, []);

  console.log("Questions fetched :", questions);
  return loading ? (
    <LoadingIndicator />
  ) : (
    <Box>
      <Stack sx={{ gap: 2 }}>
        {questions &&
          questions.map((question, index) => {
            return (
              <QuestionCard
                question={question}
                index={index + 1}
                key={question.id}
              />
            );
          })}
      </Stack>
      <Button>
        See Results & Solutions
      </Button>
    </Box>
  );
};

export default Questions;
