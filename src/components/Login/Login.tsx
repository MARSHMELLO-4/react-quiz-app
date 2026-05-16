import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '/Users/aman2/OneDrive/Documents/react-quiz-app/src/Config/firebaseconfig'
const Login = () => {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await signInWithEmailAndPassword(auth, formData.email, formData.password).then((userCredential) => {
        const user = userCredential.user;
        console.log("user logged in : ", user)
        navigate('/dashboard')
    }).catch((error : Error) => {
        console.log("Error occurred while loggin in : ", error.message )
    })
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
          <Box sx={{justifyContent:"center"}}>
            <Typography variant="h4" sx={{fontWeight:700}}>
              Welcome Back
            </Typography>

            <Typography variant="body2" sx={{color:"text.secondary"}} >
              Log in to continue your quizzes
            </Typography>
          </Box>

          <form onSubmit={handleSubmit}>
            <Stack spacing={2.5}>
              <TextField
                label="Email"
                name="email"
                value={formData.email}
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
                Login
              </Button>
            </Stack>
          </form>

          <Stack direction="row" sx={{justifyContent:"center"}} spacing={0.5}>
            <Typography variant="body2" color="text.secondary">
              Don&apos;t have an account?
            </Typography>

            <Typography
              component={Link}
              to="/signup"
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
              Sign up
            </Typography>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Login;