import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import SideBar from "@/pages/painel/components/SideBar";

const SobreIob = () => {
  return (
    <SideBar>
      <div className="bg-[#413f3f] w-full h-screen flex justify-center items-center">
        <Card className="">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </SideBar>
  );
};

export default SobreIob;
