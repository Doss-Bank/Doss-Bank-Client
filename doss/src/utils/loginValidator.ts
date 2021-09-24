interface LoginInterfaces {
  id: string;
  pw: string;
}

const loginValidator = ({ id, pw }: LoginInterfaces) => {
  if (!id.trim() || !pw.trim()) {
    return false;
  }
  return true;
};

export default loginValidator;
