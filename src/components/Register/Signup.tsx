import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Username is:", formData.username);
    console.log("Password is:", formData.password);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f4f6f8",
        px: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: "100%",
          maxWidth: 420,
          p: 4,
          borderRadius: 3,
        }}
      >
        <Stack spacing={3}>
          <Box sx={{textAlign:"center"}}>
            <Typography variant="h4" sx={{fontWeight:700}}>
              Create Account
            </Typography>
            <Typography variant="body2" sx={{color:"text.secondary"}}>
              Sign up to start taking quizzes
            </Typography>
          </Box>

          <form onSubmit={handleSubmit}>
            <Stack spacing={2.5}>
              <TextField
                label="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                fullWidth
                required
              />

              <TextField
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                fullWidth
                required
              />

              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  py: 1.3,
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: 2,
                }}
              >
                Sign Up
              </Button>
            </Stack>
          </form>

          <Stack direction="row" sx={{justifyContent:"center"}} spacing={0.5}>
            <Typography variant="body2" color="text.secondary">
              Already have an account?
            </Typography>

            <Typography
              component={Link}
              to="/"
              variant="body2"
              sx={{
                color: "primary.main",
                fontWeight: 600,
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Login
            </Typography>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Signup;