import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import BaseLayout from "@/components/layout/BaseLayout";

interface handleForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const { register } = useForm<handleForm>();

  return (
    <BaseLayout>
      <span className="text-white text-xl mb-4 font-medium">Cadastrar Conta</span>
      <div className="flex flex-col mb-4 w-1/3">
        <Label className="text-white pr-20">Nome Completo</Label>
        <Input
          placeholder="Digite seu Nome Completo"
          type="text"
          className="flex"
          {...register("name")}
        />
      </div>
      <div className="flex flex-col mb-4 w-1/3">
        <Label className="text-white pr-20">Email</Label>
        <Input
          placeholder="Digite seu Email"
          type="email"
          className="flex"
          {...register("email")}
        />
      </div>
      <div className="flex flex-col mb-4 w-1/3">
          <Label className="text-white semibold">Senha</Label>
          <div className="relative">
           <Input
           placeholder="Digite sua Senha"
           type="password"
           className="flex"
           {...register("password")}
           />
          </div>
        </div>

        <div className="flex flex-col mb-4 w-1/3">
          <Label className="text-white semibold">Confirmar Senha</Label>
          <div className="relative">
           <Input
           placeholder="Digite sua senha novamente"
           type="password"
           className="flex"
           {...register("confirmPassword")}
           />
          </div>
        </div>
      <Button
        className="flex bg-blue-400 text-white ml-4 mt-4 w-40 h-11 text-base font-semibold shadow transition duration-300"
        type="submit"
      >
        Cadastrar
      </Button>
    </BaseLayout>
  );
};

export default Register;
