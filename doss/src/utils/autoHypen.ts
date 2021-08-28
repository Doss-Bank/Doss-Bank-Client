export default function autoHypenPhone(phoneNumber: string) {
  phoneNumber = phoneNumber.replace(/[^0-9]/g, "");
  let tmp = "";
  if (phoneNumber.length < 4) {
    return phoneNumber;
  } else if (phoneNumber.length < 7) {
    tmp += phoneNumber.substr(0, 3);
    tmp += "-";
    tmp += phoneNumber.substr(3);
    return tmp;
  } else if (phoneNumber.length < 11) {
    tmp += phoneNumber.substr(0, 3);
    tmp += "-";
    tmp += phoneNumber.substr(3, 3);
    tmp += "-";
    tmp += phoneNumber.substr(6);
    return tmp;
  } else {
    tmp += phoneNumber.substr(0, 3);
    tmp += "-";
    tmp += phoneNumber.substr(3, 4);
    tmp += "-";
    tmp += phoneNumber.substr(7);
    return tmp;
  }
}
