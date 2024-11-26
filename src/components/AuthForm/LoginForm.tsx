"use client";

import { login } from "@/app/auth/actions";
import { getErrorMessage } from "@/lib/utils/genericUtils";
import { Box, Button, Link, TextField, Typography } from "@mui/material";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Logo from "./Logo";

export default function LoginForm() {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const { token } = await login({
        email: formValues.email,
        password: formValues.password,
      });

      console.log("Token:", token); // For debugging, replace this with your actual token handling logic
      router.push("/home");
    } catch (error) {
      setError(getErrorMessage(error));
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ width: "80%", maxWidth: 400 }}
    >
      <Logo />
      <Typography variant="h4" textAlign="center" mb={2}>
        Log In
      </Typography>
      <TextField
        label="Email"
        name="email"
        value={formValues.email}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        value={formValues.password}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      {error && (
        <Typography color="error" mt={1}>
          {error}
        </Typography>
      )}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
      >
        Log In
      </Button>
      <Typography textAlign="center" mt={2}>
        {"Don't have an account? "}
        <Link component={NextLink} href="/auth/signup" underline="hover">
          Sign Up
        </Link>
      </Typography>
    </Box>
  );
}
