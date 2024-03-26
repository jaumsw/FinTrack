import { useContext } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { AuthContext } from "@/shared/contexts/AuthContext";
import SideBar from "@/pages/painel/components/SideBar";
import userLogo from "../../../public/svg/user.svg"
const Painel = () => {
  const {user} = useContext(AuthContext);
  return (
    <SideBar>
      <div className="bg-[#413f3f] w-full">
         <header className="w-full h-24 bg-[#363333] flex justify-end items-center">
            <div className="text-white mr-3">{user && user.name}</div>
         <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full w-11 h-11 mr-3">
                <img src={userLogo} alt="user image" className="w-auto h-auto"/>
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-zinc-200">
              <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Configurações</DropdownMenuItem>
              <DropdownMenuItem>Suporte</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
         </header>
      </div>
    </SideBar>
  );
};

export default Painel;