import Container from "../components/container"

const Activity = () => {
    return (
        <div className="grid md:grid-cols-2 gap-4 my-6">
            <Container>
                <h2 className="font-semibold text-2xl">Today's Activity</h2>
                <div className="flex justify-between items-center mt-4">
                    <p>Steps</p>
                    <p className="font-semibold text-lg">8547 / 10,000</p>
                </div>
                <div className="w-full h-4 bg-gray-200 rounded-2xl mt-4">
                    <div className="w-[85%] h-4 bg-black rounded-l-2xl"></div>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <p>Active Minutes</p>
                    <p className="font-semibold text-lg">45 / 30</p>
                </div>
                <div className="w-full h-4 bg-gray-200 rounded-2xl mt-4 overflow-hidden">
                    <div className="w-[100%] h-4 bg-black rounded-2xl"></div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                    <p>Calories Burned</p>
                    <p className="font-semibold text-lg">420</p>
                </div>
            </Container>
            <Container>
                <h2 className="font-semibold text-2xl">Weekly Summary</h2>
                <div className="text-center mt-8">
                    <h3 className="text-2xl font-bold">5 / 7</h3>
                    <p className="text-gray-500 ">Days goal reached</p>
                    <h3 className="text-2xl font-bold mt-4">58,429</h3>
                    <p className="text-gray-500 ">Total steps this week</p>
                    <p className="w-full py-1 font-bold bg-gray-300 rounded-2xl mt-4">Great Week!</p>
                </div>
            </Container>
        </div>
    )
}

export default Activity
