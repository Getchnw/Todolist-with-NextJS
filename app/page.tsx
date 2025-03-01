"use client";
import { Button } from "@/components/ui/button";

export default function Home() {
  const go_to_todolist = () =>{
    window.location.href = "/Todo";
  }
  return (
    <div className="flex flex-col justify-center items-center gap-5 h-screen">
      <h1 className="text-4xl ">Welcome to Web Todo List</h1>
      <Button 
      onClick={go_to_todolist}
      className='bg-gray-800 '
      >
        Go to Todo-List
      </Button>
    </div>
  );
}
