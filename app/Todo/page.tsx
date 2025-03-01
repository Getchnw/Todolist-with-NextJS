"use client"
import { useState,useEffect } from "react"
import Todo from "../component/Todo"
import { typeTodo } from "../type"

const TodoPage = () => {
  
    const [todo, setTodo] = useState<typeTodo>([]); // ✅ ตั้งค่าเริ่มต้นเป็น []
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const storedData = localStorage.getItem("Todolist");
          if (storedData) {
            const data_profile = JSON.parse(storedData);
            setTodo(data_profile);
            console.log("Todo Loaded:", data_profile); // ✅ Log หลังโหลดสำเร็จ
          }
        } catch (error) {
          console.error("Error loading data:", error);
        }
      };
  
      fetchData(); // ✅ เรียกใช้ฟังก์ชัน async
    }, []);
  return (
    <div>
      <Todo Todo={todo} />
    </div>
  )
}
export default TodoPage