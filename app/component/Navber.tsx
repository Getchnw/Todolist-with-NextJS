import { Button } from "@/components/ui/button"
import Profile from "./Profile"
import Link from "next/link"

const Navber = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <div>
          <Link href="/">
            Todo-List Web
          </Link>
        </div>
        <div>
          <ul className="flex flex-row gap-4">
            <li>
              <Link href="/Profile">
                Profile
              </Link>
            </li>
            <li>
              <Link href="/Todo">
                  Todo
              </Link>
            </li>
          </ul>
              
        </div>
    </div>
  )
}
export default Navber