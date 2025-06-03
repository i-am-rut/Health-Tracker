import { BarChart, Bar, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts"
import Container from "../components/container"

const data = [
  {
    name: 'Mon',
    liters: 2.4,
  },
  {
    name: 'Tue',
    liters: 2.2,
  },
  {
    name: 'Wed',
    liters: 2.7,
  },
  {
    name: 'Thu',
    liters: 2.0,
  },
  {
    name: 'Fri',
    liters: 2.4,
  },
  {
    name: 'Sat',
    liters: 2.5,
  },
  {
    name: 'Sun',
    liters: 2.7,
  },
]

const Hydration = () => {
    return (
        <div className="my-8">
            <Container>
                <h2 className="text-2xl font-bold">Daily Hydration</h2>
                <p className="text-gray-400 text-sm">Water Intake Over the Past Week</p>
                <div className="mt-8" style={{width: '100%', height: 300}}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 5" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="liters" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </Container>
            
        </div>
    )
}

export default Hydration
