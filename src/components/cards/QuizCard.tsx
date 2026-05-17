import React, { useState } from "react";
import type { QuizType } from "../../types/QuizType";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Stack,
  LinearProgress,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SchoolIcon from "@mui/icons-material/School";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import HelpIcon from "@mui/icons-material/Help";
import { imgMap } from "../utils/imgMap";
import { useNavigate } from "react-router";

// Styled card with elevation and hover effects
const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: theme.palette.mode === "dark"
      ? "0 12px 32px rgba(0, 0, 0, 0.5)"
      : "0 12px 32px rgba(0, 0, 0, 0.15)",
  },
}));

// Styled media container with overlay
const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 200,
  position: "relative",
  backgroundColor: theme.palette.mode === "dark" ? "#1e1e1e" : "#f5f5f5",
  overflow: "hidden",
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    background: "linear-gradient(135deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 100%)",
    pointerEvents: "none",
  },
}));

// Difficulty badge with color coding
const DifficultyChip = styled(Chip)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "0.75rem",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
}));

const QuizCard = (props: QuizType) => {
  const getDifficultyColor = (
    difficulty: string
  ): "default" | "primary" | "secondary" | "error" | "warning" | "info" | "success" => {
    switch (difficulty?.toLowerCase()) {
      case "easy":
        return "success";
      case "medium":
        return "warning";
      case "hard":
      case "difficult":
        return "error";
      default:
        return "default";
    }
  };

  const [timerModal, setTimerModal] = useState(false);
  const [time, setTime] = useState(10);
  const navigate = useNavigate()
  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Convert to number, or 0 if empty
    setTime(value === '' ? 0 : Number(value));
  };

  const getDifficultyValue = (difficulty: string): number => {
    switch (difficulty?.toLowerCase()) {
      case "easy":
        return 33;
      case "medium":
        return 66;
      case "hard":
      case "difficult":
        return 100;
      default:
        return 0;
    }
  };

  const handleStartQuiz = () => {
    if(timerModal === false) {
      setTimerModal(true);
    }
    else{
      navigate(`/quiz/${time}/${props.id}/`)
    }
  }

  return (
    <StyledCard>
      {/* Header Image */}
      <StyledCardMedia
        image={imgMap[props.category.toLowerCase()]}
        title={props.title}
      />

      {/* Content Section */}
      <CardContent sx={{ flexGrow: 1, pb: 1 }}>
        {/* Title */}
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontWeight: 700,
            mb: 1,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {props.title}
        </Typography>

        {/* Description */}
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            mb: 2,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            lineHeight: 1.5,
          }}
        >
          {props.description}
        </Typography>

        {/* Difficulty Section */}
        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 0.5, gap: 1 }}>
            <DifficultyChip
              label={props.difficulty}
              color={getDifficultyColor(props.difficulty)}
              size="small"
            />
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              Difficulty
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={getDifficultyValue(props.difficulty)}
            sx={{ height: 4, borderRadius: 2 }}
          />
        </Box>

        {/* Stats Section */}
        <Stack spacing={1.5}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <TrendingUpIcon sx={{ fontSize: 18, color: "text.secondary" }} />
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <strong>{props.plays || 0}</strong> plays
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <HelpIcon sx={{ fontSize: 18, color: "text.secondary" }} />
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <strong>{props.questionCount || 0}</strong> questions
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <SchoolIcon sx={{ fontSize: 18, color: "text.secondary" }} />
            <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap" }}>
              {Array.isArray(props.tags)
                ? props.tags.map((tag, index) => (
                    <Chip
                      key={index}
                      label={tag}
                      size="small"
                      variant="outlined"
                      sx={{ height: 24 }}
                    />
                  ))
                : props.tags && (
                    <Chip
                      label={props.tags}
                      size="small"
                      variant="outlined"
                      sx={{ height: 24 }}
                    />
                  )}
            </Box>
          </Box>
        </Stack>
      </CardContent>

      {/* Actions */}
      <CardActions sx={{ pt: 0 }}>
        <Button
          size="small"
          variant="text"
          sx={{
            textTransform: "none",
            fontWeight: 600,
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.04)",
            },
          }}
        >
          Share
        </Button>
        <Button
          size="small"
          variant="contained"
          sx={{
            ml: "auto",
            textTransform: "none",
            fontWeight: 600,
          }}
          onClick={handleStartQuiz}
        >
          Start Quiz
        </Button>
        {
          timerModal && <TextField
            label="Time (seconds)"
            inputMode="numeric"
            type="number"
            variant="outlined"
            value={time}
            onChange={handleTimeChange}
          />
        }
      </CardActions>
    </StyledCard>
  );
};

export default QuizCard;