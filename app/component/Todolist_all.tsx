"use client";
import { typeTodo } from "../type"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { useState,useEffect } from "react"

const Todolist_all = ({tasks,toggleStatus,deleteTask}:{tasks:typeTodo,toggleStatus:Function,deleteTask:Function}) => {
   const [Mytasks, setMyTasks] = useState<typeTodo[]>([]);
    useEffect(() => {
    const gettaskData = async() => {
      try {
        if (tasks) {
          await setMyTasks(tasks);
          console.log(Mytasks);
        } 
      }catch (error){
      console.log(error)
      }
    }
    gettaskData();
   },[tasks]);
  const test = () =>{
    
    Mytasks.map((item,index) => {
      console.log(index)
      console.log(item);
      console.log(item.Name);
      console.log(item.status);
    })
  }
  test();

  return (
    <div className="flex flex-col gap-3">
                {Mytasks.map((task,index) => (
                  <div key={task.id} className="flex flex-row justify-between w-full gap-3">
                    <div className="flex items-center justify-center p-1">
                      <Checkbox checked={task.status === "Completed"} onCheckedChange={(e) => {toggleStatus(task.id)}}/>
                    </div>
                    <div className="flex flex-col gap-2 border rounded-xl p-1 w-full">
                      <div className="text-[12px]">
                        {task.status === "Completed" 
                        ? (
                          <div className="flex flex-col gap-1 p-1">
                            <div className="flex gap-1 text-green-500">
                              <svg className="w-[22px] h-[22px] text-green-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clipRule="evenodd"/>
                              </svg>
                              <div>{task.status}</div>
                            </div>
                            <div className="flex gap-1 items-center text-[18px] line-through">
                              <div>{index+1}.</div>
                              <Input type="text" defaultValue={task.Name} />
                            </div>
                          </div>
                        ) 
                        : (
                          <div className="flex flex-col gap-1 p-1">
                            <div className="flex gap-1 text-red-500">
                              <svg className="w-[22px] h-[22px] text-red-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                              </svg>
                              <div>{task.status}</div>
                            </div>
                            <div className="flex gap-1 items-center text-[18px] ">
                              <div>{index+1}.</div>
                              <Input type="text" defaultValue={task.Name} />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <button onClick={() => {deleteTask(task.id)}}>
                        <svg className="w-[30px] h-[30px] text-red-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clipRule="evenodd"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
    </div>
  )
}
export default Todolist_all