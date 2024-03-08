import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRow from "../../ui/FormRow";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";

function LoginForm() {
  const [email, setEmail] = useState("moz@maxy.com");
  const [password, setPassword] = useState("pass0123");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow type="vertical" label="Email address">
        <Input
          type="email"
          id="email"
          disabled={isLoading}
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRow>
      <FormRow type="vertical" label="Password">
        <Input
          type="password"
          id="password"
          disabled={isLoading}
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRow>
      <FormRow type="vertical">
        <Button disabled={isLoading} variation="primary" size="large">
          {isLoading ? <SpinnerMini /> : "Login"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default LoginForm;
