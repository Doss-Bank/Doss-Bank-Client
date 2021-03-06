import { atom } from "recoil";
import { JoinTypes, LoginTypes } from "./AuthInterface";

export const loginRecoilState = atom<LoginTypes>({
  key: "Auth/LoginState",
  default: { loginDone: false },
});

export const joinRecoilState = atom<JoinTypes>({
  key: "Auth/JoinState",
  default: {
    joinDone: false,
  },
});
