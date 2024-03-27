import { useContext } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { AuthContext } from "@/shared/contexts/AuthContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

import SideBar from "@/pages/painel/components/SideBar";
import userLogo from "/svg/user.svg";

const Painel = () => {
  const { user } = useContext(AuthContext);
  
  const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
   ];
  
  return (
    <SideBar>
      <div className="bg-[#413f3f] w-full">
        <header className="w-full h-24 bg-[#363333] flex justify-end items-center">
          <div className="text-white mr-3">{user && user.name}</div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full w-11 h-11 mr-3">
                <img src={userLogo} alt="user image" className="w-auto h-auto" />
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
        <div className="flex ml-5 mt-5 mr-4">
          <Card className="w-[60%]">
            <CardHeader>
              <CardTitle>Titulo</CardTitle>
              <CardDescription>Descrição</CardDescription>
            </CardHeader>
            <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
            <CardFooter>
            </CardFooter>
          </Card>

          <Card className="ml-5 w-[60%]">
            <CardHeader>
              <CardTitle>Titulo</CardTitle>
              <CardDescription>Descrição</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Conteudo</p>
            </CardContent>
            <CardFooter>
              <p>Rodapé</p>
            </CardFooter>
          </Card>

          <Card className="ml-5 w-[60%]">
            <CardHeader>
              <CardTitle>Titulo</CardTitle>
              <CardDescription>Descrição</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Conteudo</p>
            </CardContent>
            <CardFooter>
              <p>Rodapé</p>
            </CardFooter>
          </Card>

          <Card className="ml-5 w-[60%]">
            <CardHeader>
              <CardTitle>Titulo</CardTitle>
              <CardDescription>Descrição</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Conteudo</p>
            </CardContent>
            <CardFooter>
              <p>Rodapé</p>
            </CardFooter>
          </Card>
        </div>

        <Card className="ml-5 w-auto mt-7 mr-4">
          <CardHeader>
            <CardTitle>Visão Geral</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
          <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5, right: 30, left: 20, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="pv" fill="#427386" />
          </BarChart>            
          </CardContent>
          <CardFooter>
            <p>Rodapé</p>
          </CardFooter>
        </Card>
      </div>
    </SideBar>
  );
};

export default Painel;
