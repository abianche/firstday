import SignupForm from "@/components/AuthForm/SignupForm";

export default function SignupPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <SignupForm />
    </div>
  );
}
