import { NavLink, Outlet } from "react-router"
import Header from "./Header"

const AppLayout = () => {
    return (
        <div>
            <Header />
            <main className="h-[100vh] px-4">
                <div className="mt-4 grid grid-cols-3 justify-between text-center bg-gray-200 py-1 px-2 rounded-lg">
                    <NavLink className={({ isActive }) =>
                        `text-gray-500 rounded-lg py-2 ${isActive ? 'bg-white text-gray-950 font-bold' : ''}`
                    } to='.' >Dashboard</NavLink>
                    <NavLink className={({ isActive }) =>
                        `text-gray-500 rounded-lg py-2 ${isActive ? 'bg-white text-gray-950 font-bold' : ''}`
                    } to='food-logger' >Food Log</NavLink>
                    <NavLink className={({ isActive }) =>
                        `text-gray-500 rounded-lg py-2 ${isActive ? 'bg-white text-gray-950 font-bold' : ''}`
                    } to='health-metrics' >Health Metrics</NavLink>
                </div>
                <Outlet />
            </main>
        </div>
    )
}

export default AppLayout
