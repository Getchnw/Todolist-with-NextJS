"use client";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState ,  useEffect} from "react";
import { typeTodo } from "../type";

const Addtodo = ({prop}:{prop:typeTodo}) => {
  const data = prop;
  const [tasks , setTasks] = useState<typeTodo[]>([]);  
  const [Name,setname] = useState<string>('');
  const [status,setstatus] = useState<string>('Pending');
  const [timestamp,settimestamp] = useState<string>('');
  const [id,setid] = useState<Number>(1);
    console.log(tasks);

  const saveToLocalStorage = () => {
    const currentTimestamp = new Date().toISOString(); // Timestamp ปัจจุบัน
    settimestamp(currentTimestamp);
    const maxId = tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) : 0; // หา id ที่มากที่สุด
    const myId = maxId + 1;
    const formData = {
      id: myId,
      Name,
      timestamp: currentTimestamp, 
      status,
    };
    const newTasks = [...tasks, formData];
    localStorage.setItem("Todolist", JSON.stringify(newTasks));
    window.location.reload()   
  };

  useEffect(() => {
    setTasks(data);
  }, [tasks]);

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
    }}>
        <div className="grid grid-cols-6 gap-4">
            <div className='col-span-6 '>
                <Label>Name of Task</Label>
                <Input type="text" name="name"
                onChange={(e) => setname(e.target.value)}
                />
            </div>
            
            <div className="col-span-4 col-start-2 col-end-6 mt-3">
              <Button 
              type="submit"
              onClick={() => saveToLocalStorage()}
              className="w-full">
                Add Task
              </Button>
            </div>
        </div>
      </form>
  );
}
export default Addtodo