interface JoinInterfaces {
  id: string;
  password: string;
  checkPassword: string;
  nickname: string;
  phoneNumber: string;
  birth: string;
}

export default function joinValidator(joinData: JoinInterfaces) {
  const isValidId = /^[A-Za-z0-9]{4,10}$/.test(joinData.id);
  const isValidPassword = /(?=.*\d)(?=.*[a-z]).{8,}/.test(joinData.password);
  const isValidPhoneNumber = /^[0-9]{3}[-]+[0-9]{4}[-]+[0-9]{4}$/.test(
    joinData.phoneNumber.substr(0, 3) +
      "-" +
      joinData.phoneNumber.substr(3, 4) +
      "-" +
      joinData.phoneNumber.substr(7, 4)
  );
  const isValidNickname = /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{1,10}$/.test(
    joinData.nickname
  );
  const isSamePassword = joinData.password === joinData.checkPassword;
  const isValidBirth = joinData.birth.length > 0;

  // console.log(isValidId, isValidNickname, isValidPhoneNumber, isSamePassword);

  if (!isValidId) {
    return "아이디는 4 ~ 10자 사이여야 합니다.";
  } else if (!isValidPassword) {
    return "비밀번호는 영어소문자, 숫자 포함 8자 이상이여야 합니다.";
  } else if (!isSamePassword) {
    return "비밀번호가 같지 않습니다.";
  } else if (!isValidNickname) {
    return "닉네임은 1 ~ 10자 사이여야 합니다.";
  } else if (!isValidPhoneNumber) {
    return "전화번호 형식이 잘못되었습니다.";
  } else if (!isValidBirth) {
    return "생일을 입력해주세요.";
  } else {
    return null;
  }
}
