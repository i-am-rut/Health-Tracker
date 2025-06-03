import { BrowserRouter, Routes, Route } from 'react-router'
import Dashboard from './Pages/Dashboard'
import AppLayout from './Pages/AppLayout'
import FoodLogger from './Pages/FoodLogger'
import HealthMetrics from './Pages/HealthMetrics'
import Weight from './Pages/Weight'
import Sleep from './Pages/Sleep'
import Hydration from './Pages/Hydration'
import Activity from './Pages/Activity'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='food-logger' element={<FoodLogger />} />
          <Route path='health-metrics' element={<HealthMetrics />}>
            <Route index element={<Weight />} />
            <Route path='sleep' element={<Sleep />} />
            <Route path='hydration' element={<Hydration />} />
            <Route path='activity' element={<Activity />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
