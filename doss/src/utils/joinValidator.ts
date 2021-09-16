export interface JoinInterfaces {
  id: string;
  password: string;
  checkPassword: string;
  name: string;
  nickname: string;
  socialNumber: string;
}

export default function joinValidator(joinData: JoinInterfaces) {}
