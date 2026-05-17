import React, { useState } from "react";
import type { AnswerType, QuestionType } from "../../types/QuizType";
import {
  Paper,
  Typography,
  Box,
  Stack,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../redux/store";
import { incrementScore } from "../../redux/slices/scoreSlice";

// Styled answer button with hover effects
const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  padding: "16px",
  marginBottom: "12px",
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: "8px",
  cursor: "pointer",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
    borderColor: theme.palette.primary.main,
  },
}));

interface QuestionProps {
  index: number;
  question: QuestionType;
}

const QuestionCard = (props: QuestionProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [ansSelect, setAnsSelect] = useState<boolean>(false);

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    console.log("selected radio value:", val);
    setSelectedAnswer(val);
  };

  const handleSubmitAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
    const correctId = props.question.answers.find((a) => a.isCorrect)?.id;
    console.log({ selectedAnswer, correctId });
    if (selectedAnswer && correctId && selectedAnswer === String(correctId)) {
      console.log("dispatching incrementScore");
      dispatch(incrementScore());
    } else {
      console.log("answer mismatch or not selected");
    }
    setAnsSelect(true);
  };

  return (
    <Paper
      elevation={3}
      sx={{ p: 3, borderRadius: 2, backgroundColor: "background.paper" }}
    >
      <Stack spacing={3}>
        <Typography>{props.index}</Typography>
        {/* Question Text */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: "text.primary",
            fontSize: "1.1rem",
            lineHeight: 1.6,
          }}
        >
          {props.question.text}
        </Typography>

        {/* Answers */}
        <FormControl fullWidth>
          <RadioGroup
            value={selectedAnswer}
            onChange={handleAnswerChange}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 0,
            }}
          >
            <Stack spacing={1.5}>
              {props.question.answers.map((answer: AnswerType) => (
                <StyledFormControlLabel
                  key={answer.id}
                  value={answer.id}
                  control={<Radio />}
                  disabled={ansSelect}
                  label={
                    <Typography
                      sx={{
                        fontSize: "0.95rem",
                        fontWeight: 500,
                        color: "text.secondary",
                      }}
                    >
                      {answer.text}
                    </Typography>
                  }
                />
              ))}
            </Stack>
          </RadioGroup>
        </FormControl>
        <Button disabled={ansSelect} onClick={handleSubmitAnswer}>Submit</Button>
      </Stack>
    </Paper>
  );
};

export default QuestionCard;
