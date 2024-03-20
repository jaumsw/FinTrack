import BaseLayout from "@/components/layout/BaseLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Login = () => {
  return (
    <BaseLayout>
      <span className="text-white text-xl mb-4 font-medium">Faça Login</span>
       <Input placeholder="Email" type="email" className="flex w-1/4 mb-4"/>
      <div className="flex">
       <Input placeholder="Senha" type="password"/>
      </div>
       <Button className="flex ml-4 mt-4 w-40 h-11 text-base font-semibold shadow transition duration-300">Entrar</Button>
    </BaseLayout>
  );
};

export default Login;
