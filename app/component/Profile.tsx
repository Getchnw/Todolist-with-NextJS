"use client";

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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import EditProfile from "./EditProfile";

type typeprofile = {
  id : number,
  firstName : string,
  lastName : string,
  age : number,
  birthDate : Date,
  sex : string,
  timestamp : Date,
  status : string
}

const Profile = ({profile}:{profile:typeprofile} ) => {
  const data = profile;
  console.log(data)
  const saveform = () => {
    console.log('saveform sucess')
  }
  return (
    <div className="flex justify-center items-center h-screen p-3">
        <Tabs defaultValue="profile" className="w-full max-w-3xl">
        <TabsList className="grid w-full h-12 grid-cols-2">
          <TabsTrigger value="profile" className="text-lg">Profile</TabsTrigger>
          <TabsTrigger value="editProfile" className="text-lg" >Edit Profile</TabsTrigger>
        </TabsList>
        {/*Show Profile start */}
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>
                <div className="text-2xl">
                    MyProfile
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="grid grid-cols-6 gap-4">
                <div className='col-span-3 col-start-1 col-end-4'>
                  <Label>FristName</Label>
                  <div className="w-full h-3/4 p-1 flex items-center p-1 border rounded-lg">{data ? data.firstName : ''}</div>
                </div>
                <div className='col-span-3 col-start-4 col-end-7'>
                  <Label>LastName</Label>
                  <div className="w-full h-3/4 p-1 flex items-center border rounded-lg">{data ? data.lastName : ''}</div>
                </div>
                <div className='col-span-2 col-start-1 col-end-3'>
                  <Label>Date of Britch</Label>
                  <div className="w-full h-3/4 p-1 flex items-center border rounded-lg">{data ? data.birthDate : ''}</div>
                </div>
                <div className='col-span-2 col-start-3 col-end-5'>
                  <Label>Age</Label>
                  <div className="w-full h-3/4 p-1 flex items-center border rounded-lg">{data ? data.age : ''}</div>
                </div>
                <div className='col-span-2 col-start-5 col-end-7'>
                  <Label>Sex</Label>
                  <div className="w-full h-3/4 p-1 flex items-center border rounded-lg">{data ? data.sex : ''}</div>
                </div>
                <div className='col-span-2 col-start-1 col-end-4'>
                  <Label>Mystatus</Label>
                  <div className="w-full h-3/4 p-1 flex items-center border rounded-lg">{data ? data.status : ''}</div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="w-full h-3/4 text-gray-400 text-center">{data ? `Last time to edit ${new Date(data.timestamp).toLocaleDateString("en-GB",{day: "2-digit",month: "short", year: "numeric",hour: "2-digit",minute: "2-digit",})} ` : 'You have not Add Profile'}</div>
            </CardFooter>
          </Card>
          {/*Show Profile end */}
{/*------------------------------------------------------------------------------------------------------ */}
          {/*Edit Profile start */}
        </TabsContent>
        <TabsContent value="editProfile">
          <Card>
            <CardHeader>
              <CardTitle>Edit Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <EditProfile func={saveform} prop={data}/>
            </CardContent>
            
          </Card>
        </TabsContent>
        {/*Edit Profile end*/}
      </Tabs>
    </div>
  );
}
export default Profile