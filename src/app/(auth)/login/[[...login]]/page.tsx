import { SignIn } from "@clerk/nextjs";

const LoginPage = () => {
  return <SignIn appearance={{ elements: { footer: { display: "none" } } }} />;
};

export default LoginPage;
