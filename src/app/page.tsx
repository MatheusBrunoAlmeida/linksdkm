import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="w-screen flex flex-col items-center h-screen bg-white">
      <div className="mt-20">
        <img src="/logodkm.jpg" className="w-20 h-20 rounded-full" alt="" />
      </div>

      <div className="mt-10">
        <h1 className="text-gray-800 font-bold">Selecione um plano de leitura abaixo</h1>
      </div>

      <div className="w-full p-16 gap-4 flex lg:items-center flex-col">
        <Card className="flex justify-start hover:bg-gray-50 cursor-pointer shadow-md gap-4 w-full lg:w-1/4 p-4 items-center">
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>

          <h1>40 dias com Jesus</h1>
        </Card>

        <Card className="flex justify-start hover:bg-gray-50 cursor-pointer shadow-md gap-4 w-full lg:w-1/4 p-4 items-center">
          <div className="w-2 h-2 bg-red-600 rounded-full"></div>

          <h1>Plano 2</h1>
        </Card>

        <Card className="flex justify-start hover:bg-gray-50 cursor-pointer shadow-md gap-4 w-full lg:w-1/4 p-4 items-center">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>

          <h1>Plano 3</h1>
        </Card>
      </div>
    </div>
  );
}
