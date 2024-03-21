import { parseCookies } from "nookies";
import { delay } from "../services/Auth";
import axios from "axios";

interface RegisterInterface {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const registerUser = async ({
  name,
  email,
  password,
  confirmPassword,
}: RegisterInterface) => {
  delay(1000);

  if (password !== confirmPassword) {
    return { success: false, message: "Senhas não conferem" };
  }
  const response = await axios.post("http://127.0.0.1:8000/api/user", { name, email, password });
  if (response.status === 201) {
    return { success: true, message: "Usuário criado com sucesso!" };
  } else if (response.status === 400) {
    return { success: false, message: "Email ja existe!" };
  } else {
    return { success: false, message: "Falha na criação do usuário" };
  }
};
