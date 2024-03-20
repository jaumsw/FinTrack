import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";
import { Label } from "@radix-ui/react-label";
import { AuthContext } from "@/shared/contexts/AuthContext";
import Swal from "sweetalert2";
import BaseLayout from "@/components/layout/BaseLayout";

interface handleForm {
  email: string;
  password: string;
}

const Login = () => {
  const { authenticateUser } = useContext(AuthContext);
  const { register, handleSubmit } = useForm<handleForm>();
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  async function handleSignIn(data: handleForm) {
    if (!data.email) {
      Swal.fire({
        title: "Por favor, informe seu email",
        text: "Preencha o campo de email corretamente",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }
    if (!data.password) {
      Swal.fire({
        title: "Por favor, informe sua senha",
        text: "Preencha o campo de senha corretamente",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }

    if (data.email && data.password) {
      try {
        const response = await authenticateUser(data);
        if (response?.success === true) {
          const result = await Swal.fire({
            title: "Sucesso!",
            text: "Autenticado com sucesso!",
            icon: "success",
            confirmButtonText: "Ok",
          });
          if (result.isConfirmed) {
            navigate("/painel");
          }
        }
      } catch (error) {
        console.error("Error:", error);
        Swal.fire({
          title: "Falha na autenticação",
          text: "Verifique suas credenciais",
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    }
  }

  return (
    <form onSubmit={handleSubmit(handleSignIn)}>
      <BaseLayout>
        <span className="text-white text-xl mb-4 font-medium">Faça Login</span>
        <div className="flex flex-col mb-4 w-1/3">
          <Label className="text-white pr-20">Email</Label>
          <Input
            placeholder="Digite seu Email"
            type="email"
            className="flex"
            {...register("email")}
          />
        </div>
        <div className="flex flex-col mb-4 w-1/3 relative">
          <Label className="text-white semibold">Senha</Label>
          <div className="relative">
            <Input
              placeholder="Digite sua Senha"
              type={showPassword ? "text" : "password"}
              {...register("password")}
            />
            <Button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-gray-300 text-gray-700 rounded shadow-md"
            >
              {showPassword ? (
                <EyeSlashIcon className="h-6 w-6" />
              ) : (
                <EyeIcon className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
        <Button
          className="flex ml-4 mt-4 w-40 h-11 text-base font-semibold shadow transition duration-300"
          type="submit"
        >
          Entrar
        </Button>
      </BaseLayout>
    </form>
  );
};

export default Login;
