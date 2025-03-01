"use client";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState , useEffect  } from "react";
import { typeprofile } from "../type";




const EditProfile = ({func,prop}:{func:Function,prop?:typeprofile}) => {
  const [firstName,setfirstName] = useState<string>('');
  const [lastName,setlastName] = useState<string>('');
  const [birthDate,setbirthDate] = useState<Date>();
  const [age,setage] = useState<Number>();
  const [sex,setsex] = useState<string>('');
  const [status,setstatus] = useState<string>('');
  const [timestamp,settimestamp] = useState<string>('');
  const [id,setid] = useState<Number>(1);
 
  const inputdefualt = (prop:typeprofile) => {
    if (prop){
      const {firstName,lastName,birthDate,age,sex,status} = prop;
      setfirstName(firstName);
      setlastName(lastName);
      setbirthDate(birthDate);
      setage(age);
      setsex(sex);
      setstatus(status);
    }
  }

  const calAge = () => {
    if (!birthDate) {
      console.log("ข้อมูลไม่ครบ");
      return;
    }
  
    const date = new Date() // แปลงเป็น Date Object
    const birth = new Date(birthDate); // แปลงเป็น Date Object
  
    if (isNaN(date) || isNaN(birth)) {
      console.log("รูปแบบวันที่ไม่ถูกต้องdate");
      return;
    }
  
    let age = date.getFullYear() - birth.getFullYear();
  
    // ตรวจสอบว่าวันเกิดถึงวันปัจจุบันแล้วหรือยัง
    const monthDiff = date.getMonth() - birth.getMonth();
    const dayDiff = date.getDate() - birth.getDate();
  
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--; // ยังไม่ถึงวันเกิดปีนี้ ต้องลบ 1
    }
    console.log(`อายุ: ${age} ปี`);
    return age
  };

  const cheakdate = () => {
    const date = new Date() // แปลงเป็น Date Object
    const birth = new Date(birthDate); // แปลงเป็น Date Object
    if (birth > date){
      return alert("กรุณากรอกวันเกิดใหม่")
    }
  }

  
  const saveToLocalStorage = () => {
    const currentTimestamp = new Date().toISOString(); // Timestamp ปัจจุบัน
    settimestamp(currentTimestamp); // อัปเดตค่าใน state
    const formData = {
      id,
      firstName,
      lastName,
      birthDate,
      age,
      sex,
      timestamp: currentTimestamp, 
      status,
    };
    console.log(formData);
    if (id === 1) {
      localStorage.setItem("ProfileData", JSON.stringify(formData));
      window.location.reload()   
    }
    
  };


  useEffect(() => {
    if(prop){
      inputdefualt(prop);
    }
  }, [prop]);

  calAge();
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
    }}>
        <div className="grid grid-cols-4 gap-4">
            <div className='col-span-2 '>
              <Label>FirstName</Label>
              <Input type="text" name="firstName" defaultValue={firstName}
              onChange={(e) => setfirstName(e.target.value)}
              />
            </div>
            <div className='col-span-2'>
              <Label>LastName</Label>
              <Input type="text" name="lastName" defaultValue={lastName} 
              onChange={(e) => setlastName(e.target.value)}
              />
            </div>
            <div className=' col-span-2'>
              <Label>BirthDate</Label>
              <Input type="date" name="birthDate" defaultValue={birthDate}
              onChange={(e) => {
                cheakdate()
                setbirthDate(e.target.value)}}
              />
            </div>
            <div className=' col-span-2'>
              <Label>Age</Label>
              <Input type="number" name="age" defaultValue={calAge()} 
              onChange={(e) => setage(Number(e.target.value))}/>
            </div>
            <div className='col-span-2'>
              <Label>Sex</Label>
              <Select 
              value={sex}
              onValueChange={(value) => setsex(value)}
              >
                <SelectTrigger>
                  <SelectValue defaultValue={sex} placeholder="Select your sex"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-2">
              <Label>Status</Label>
              <Select 
              value={status}
              onValueChange={(value) => setstatus(value)}
              >
                <SelectTrigger>
                  <SelectValue defaultValue={status} placeholder="Select your status"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Single">Single</SelectItem>
                      <SelectItem value="Married">Married</SelectItem>
                    </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-3 col-start-2 col-end-4 mt-3">
              <Button 
              type="submit"
              onClick={() => saveToLocalStorage()}
              className="w-full">
                Change Profile
              </Button>
            </div>
        </div>
        
         
        
      </form>
  );
}
export default EditProfile