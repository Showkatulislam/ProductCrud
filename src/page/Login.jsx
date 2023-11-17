import AuthForm from "../components/AuthForm";

const Login = () => {
  return (
    <div
      className="
      flex
      min-h-screen
      flex-col 
      justify-center 
      py-12
      sm:px-6 
      lg:px-8 
      bg-gray-900
      "
    >
      <AuthForm></AuthForm>
    </div>
  );
};

export default Login;
