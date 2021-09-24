class Token {
  static setToken(token: string): void {
    localStorage.setItem("token", token);
  }
  static getToken(): string | null {
    return localStorage.getItem("token");
  }

  static removeToken() {
    localStorage.removeItem("token");
  }
}

export default Token;
