import { CgProfile } from "react-icons/cg"
import { IoMdPulse } from "react-icons/io"

const Header = () => {
  return (
    <div className="bg-black text-white flex items-center justify-between px-4 py-4">
      <div className="flex gap-4 items-center">
        <IoMdPulse className="text-2xl" />
        <h1 className="font-bold text-2xl">Health-Tracker</h1>
      </div>
      <CgProfile className="text-2xl" />
    </div>
  )
}

export default Header
