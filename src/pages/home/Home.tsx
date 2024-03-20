import { Button } from "@/components/ui/button";
import BaseLayout from "@/components/layout/BaseLayout";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <BaseLayout>
      <span className="text-white text-xl mb-4 font-medium">Comece aqui</span>
      <div className="flex">
        <Link to="/login">
          <Button className="flex ml-4 mt-4 w-40 h-11 text-base font-semibold shadow transition duration-300">
            Entrar
          </Button>
        </Link>
        <Button className="flex ml-4 mt-4 w-40 h-11 text-base font-semibold shadow transition duration-300">
          Cadastrar
        </Button>
      </div>
    </BaseLayout>
  );
};

export default Home;
