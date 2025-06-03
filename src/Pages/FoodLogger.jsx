import { MdEmojiFoodBeverage, MdOutlineFastfood } from "react-icons/md"
import Container from "../components/container"
import { FaBowlFood } from "react-icons/fa6"
import { PiBowlFoodBold } from "react-icons/pi"
import { noFoodLoggedImg } from "../assets/constants"

const recentFoods = [
    { name: "Oatmeal with berries", calories: 420, time: "8:30 AM", meal: "Breakfast" },
    { name: "Grilled chicken salad", calories: 580, time: "12:45 PM", meal: "Lunch" },
    { name: "Apple with almond butter", calories: 180, time: "3:20 PM", meal: "Snack" },
]

const FoodLogger = () => {
    const tagColor = {
        Breakfast: "#309898",
        Lunch: "#FF9F00",
        Snack: "#F4631E",
        dinner: "#CB0404"
    }

    return (
        <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mt-4">
                <div>
                    <h2 className="font-bold text-2xl">Food Logger</h2>
                    <p className="text-gray-400">Track your daily nutrition</p>
                </div>
                <button className="px-4 py-2 bg-black text-white font-bold rounded-md">+ Add Food</button>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-8">
                <Container>
                    <h3 className="font-bold text-xl">Today's Summary</h3>
                    <div className="pr-4 mt-2">
                        <div className="flex items-center justify-between mb-1">
                            <p>Total calories</p>
                            <p className="font-bold">1180</p>
                        </div>
                        <div className="flex items-center justify-between mb-1">
                            <p>Remaining calories</p>
                            <p className="font-bold">1020</p>
                        </div>
                        <div className="flex items-center justify-between mb-1">
                            <p>Meals Logged</p>
                            <p className="font-bold">3</p>
                        </div>
                    </div>
                </Container>
                <Container>
                    <h3 className="font-bold text-xl">Quick Add</h3>
                    <div className="flex flex-col items-start gap-2 mt-2">
                        <button className="px-2 py-1 border border-gray-300 rounded-md w-[100%] text-left cursor-pointer"> + Water 1 glass (300ml)</button>
                        <button className="px-2 py-1 border border-gray-300 rounded-md w-[100%] text-left cursor-pointer">+ coffee</button>
                        <button className="px-2 py-1 border border-gray-300 rounded-md w-[100%] text-left cursor-pointer">+ Green Tea</button>
                    </div>
                </Container>
                <Container>
                    <h3 className="font-bold text-xl">Meal Timing</h3>
                    <div className="mt-2">
                        <p className="flex items-center gap-2"><MdOutlineFastfood className="text-gray-500" /> Breakfast: 9 AM</p>
                        <p className="flex items-center gap-2"><FaBowlFood className="text-gray-500" /> Lunch: 12:30 PM</p>
                        <p className="flex items-center gap-2"><MdEmojiFoodBeverage className="text-gray-500" /> Snacks: 4:30 PM</p>
                        <p className="flex items-center gap-2"><PiBowlFoodBold className="text-gray-500" /> Dinner: 8 PM</p>
                    </div>
                </Container>
            </div>
            <div className="my-8">
                <Container>
                    <h2 className="font-bold text-2xl">Today's Food Log</h2>
                    <p className="text-gray-400">All Meals and Snacks Logged Today</p>
                    <div>{
                        recentFoods.length > 0 ? <div className="mt-4 ">
                            {
                                recentFoods.map(item => (<div className="flex justify-between items-center mb-2">
                                    <div className="flex gap-4 items-center">
                                        <h4 className={`font-semibold px-1 rounded-lg text-white py-1 w-20 text-center`}
                                            style={{ backgroundColor: tagColor[item.meal] }}
                                        >{item.meal}</h4>
                                        <div>
                                            <p className="font-semibold text-lg">{item.name}</p>
                                            <p className="text-gray-500">{item.time}</p>
                                        </div>
                                    </div>
                                    <p className="font-medium">{item.calories} cal</p>
                                </div>))
                            }
                        </div> : <div className="flex flex-col justify-center mt-4 text-center">
                            <img className="w-[100%] max-w-2xl mx-auto" alt="No food logged yet" src={noFoodLoggedImg} />
                            <h3 className="font-bold text-xl">No food logged today</h3>
                        </div>
                    }</div>
                </Container>
            </div>
            <div className="text-white">.</div>
        </div>
    )
}

export default FoodLogger
