import { useInput } from "./use-input-hook";

export const useRegisterForm = (defaultValues: {names: string, email: string, username: string, password: string}) => {
  const { bind: namesBind, reset: resetNames } = useInput(defaultValues.names);
  const { bind: emailBind, reset: resetEmail } = useInput(defaultValues.email);
  const { bind: usernameBind, reset: resetUsername } = useInput(defaultValues.username);
  const { bind: passwordBind, reset: resetPassword } = useInput(defaultValues.password);

  const clearForm = (event: React.MouseEvent) => {
    event.preventDefault()
    resetNames();
    resetEmail();
    resetUsername();
    resetPassword();
  };

  return {
    namesBind,
    emailBind,
    usernameBind,
    passwordBind,
    clearForm
  };
};
