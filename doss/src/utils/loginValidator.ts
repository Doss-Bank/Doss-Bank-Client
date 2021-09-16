interface LoginInterfaces {
  id: string;
  password: string;
}

const loginValidator = ({ id, password }: LoginInterfaces) => {
  if (!id.trim() || !password.trim()) {
    return false;
  }
  return true;
};

export default loginValidator;
