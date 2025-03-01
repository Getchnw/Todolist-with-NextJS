"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState,useEffect } from "react";
import Addtodo from "./Addtodo"
import { typefilter, typeTodo } from "../type"
import Todolist_all from "./Todolist_all"
import Todolist_pending from "./Todolist_pending"
import Todolist_complete from "./Todolist_complete"

const Todo = ({Todo}:{Todo:typeTodo}) => {
  const [tasks, setTasks] = useState<typeTodo>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [serach,setSerach] = useState('')
  useEffect(() => {
  if (Todo) {
    setTasks(Todo);
    setIsLoaded(true);
  }
  if (isLoaded){
    console.log(tasks)
  }
  console.log(Todo);
 },[Todo]);
 const [Mystatus,setMystatus] = useState<typefilter>("All")

 const toggleStatus = (id: number) => {
  setTasks(prevTasks => {
    const updateTasks = prevTasks.map(task => 
      task.id === id ? { ...task, status: task.status === "Completed" ? "Pending" : "Completed" } : task
    );
    localStorage.setItem("Todolist", JSON.stringify(updateTasks));
    return updateTasks;
  });
};

const deleteTask = (id: number) => {
  setTasks(Tasks => {
    const newTasks = Tasks.filter((task:typeTodo) => task.id !== id);
    localStorage.setItem("Todolist", JSON.stringify(newTasks));
    window.location.reload() 
  });
};

const serachtask = (Name:string) => {
  if (Name) {
    const newTasks = tasks.filter((task:typeTodo) => task.Name === Name);
    setTasks(newTasks)
  }
  if (!Name){
    window.location.reload() 
  }
    
} 
  
  return (
    <div className="flex justify-center items-center h-screen p-3">
        <Tabs defaultValue="mytodo" className="w-full max-w-3xl">
        <TabsList className="grid w-full h-12 grid-cols-2">
          <TabsTrigger value="mytodo" className="text-lg">Todo List</TabsTrigger>
          <TabsTrigger value="addtodo" className="text-lg" >Add Todo List</TabsTrigger>
        </TabsList>
        {/*Show Mytodo start */}
        <TabsContent value="mytodo">
          <Card>
            <CardHeader>
              <CardTitle>
                <div className="flex justify-between">
                  <div className="text-2xl">
                      MyTodo 
                  </div>

                  {/*ปุ่มsearch start*/}
                  <div className="flex gap-3">
                    <Input 
                    placeholder="serach your Task" 
                    onChange={(e) => {setSerach(e.target.value)}}
                    className="w-[300px]"
                    />
                    <Button 
                      type="submit"
                      onClick={() => serachtask(serach)}
                      className="w-[100px] border">
                        search
                    </Button>
                  </div>
                  {/*ปุ่มsearch end*/}
                  
                  {/*ปุ่มกรอง Todo list start*/}
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <svg className="w-7 h-7 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M5.05 3C3.291 3 2.352 5.024 3.51 6.317l5.422 6.059v4.874c0 .472.227.917.613 1.2l3.069 2.25c1.01.742 2.454.036 2.454-1.2v-7.124l5.422-6.059C21.647 5.024 20.708 3 18.95 3H5.05Z"/>
                      </svg>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel className="text-center">เลือกประเภทข้อมูลที่จะแสดง</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      {
                        Mystatus === "All" && 
                        <>
                          <DropdownMenuItem>
                            <button value="Pending" onClick={(e) => {setMystatus(e.target.value) }} className="w-[200px]">
                            Pending
                            </button>
                          </DropdownMenuItem>
                          <DropdownMenuItem><button value="Completed" onClick={(e) => setMystatus(e.target.value)} className="w-[200px]">Completed</button></DropdownMenuItem>
                          <DropdownMenuItem>
                              <button 
                                value="All" 
                                onClick={(e) => setMystatus(e.target.value)}
                                className="w-[200px] underline underline-offset-4"
                                >
                                  All
                                </button>
                          </DropdownMenuItem>
                        </>
                      }
                      {
                        Mystatus === "Pending" && 
                        <>
                          <DropdownMenuItem>
                              <button 
                              value="Pending" 
                              onClick={(e) => setMystatus(e.target.value)}
                              className="w-[200px] underline underline-offset-4">
                                Pending
                              </button>
                          </DropdownMenuItem>
                          <DropdownMenuItem><button value="Completed" onClick={(e) => setMystatus(e.target.value)} className="w-[200px]">Completed</button></DropdownMenuItem>
                          <DropdownMenuItem>
                              <button value="All" onClick={(e) => setMystatus(e.target.value)} className="w-[200px]">All</button>
                          </DropdownMenuItem>
                        </>
                      }
                      {
                        Mystatus === "Completed" && 
                        <>
                          <DropdownMenuItem>
                            <button value="Pending" onClick={(e) => setMystatus(e.target.value)} className="w-[200px] ">Pending</button>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                              <button 
                              value="Completed" 
                              onClick={(e) => setMystatus(e.target.value)} 
                              className="w-[200px] underline underline-offset-4">
                                Completed
                              </button>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                              <button value="All" onClick={(e) => setMystatus(e.target.value)} className="w-[200px]">All</button>
                          </DropdownMenuItem>
                        </>
                      }
                    </DropdownMenuContent>
                  </DropdownMenu>
                  {/*ปุ่มกรอง Todo list end*/}
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">

            {
            Mystatus === "All" && (
                
                <Todolist_all tasks={tasks} toggleStatus={toggleStatus} deleteTask={deleteTask} />
            )
            }

            {
            Mystatus === "Pending" && (
                <Todolist_pending tasks={tasks} toggleStatus={toggleStatus} deleteTask={deleteTask} />
            )
            }

            {
            Mystatus === "Completed" && (
                <Todolist_complete tasks={tasks} toggleStatus={toggleStatus} deleteTask={deleteTask} />
            )
            }
              
             
            </CardContent>
            <CardFooter>
              <div className="w-full text-gray-400 text-center">{tasks.length > 0 ? `last time to add ${tasks[tasks.length - 1].timestamp} ` : 'ยังไม่เคยเพิ่มข้อมูล'}</div>
            </CardFooter>
          </Card>
          {/*Show Todo list end */}
{/*------------------------------------------------------------------------------------------------------ */}
          {/*Add Todo list start */}
        </TabsContent>
        <TabsContent value="addtodo">
          <Card>
            <CardHeader>
              <CardTitle>Add New Task</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Addtodo prop={tasks} />
            </CardContent>
            
          </Card>
        </TabsContent>
        {/*Add Todo list end*/}
      </Tabs>
    </div>
    
  )
}
export default Todo