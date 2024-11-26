"use client";

import { signup } from "@/app/auth/actions";
import { getErrorMessage } from "@/lib/utils/genericUtils";
import { Box, Button, Link, TextField, Typography } from "@mui/material";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Logo from "./Logo";

export default function SignupForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (formValues.password !== formValues.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await signup({
        name: formValues.name,
        age: parseInt(formValues.age, 10),
        email: formValues.email,
        password: formValues.password,
      });
      router.push("/auth/login");
    } catch (error) {
      setError(getErrorMessage(error));
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ width: "80%", maxWidth: 400, mx: "auto", textAlign: "center" }}
    >
      <Logo />
      <Typography variant="h4" textAlign="center" mb={2}>
        Sign Up
      </Typography>
      <TextField
        label="Name"
        name="name"
        value={formValues.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Age"
        name="age"
        value={formValues.age}
        onChange={handleChange}
        type="number"
        fullWidth
        margin="normal"
      />
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
      <TextField
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        value={formValues.confirmPassword}
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
        Sign Up
      </Button>
      <Typography textAlign="center" mt={2}>
        Already have an account?{" "}
        <Link component={NextLink} href="/auth/login" underline="hover">
          Log In
        </Link>
      </Typography>
    </Box>
  );
}
