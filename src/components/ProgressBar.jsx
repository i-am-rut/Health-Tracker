const ProgressBar = ({progress}) => {
  return (
    <div className="h-4 w-full bg-gray-200 rounded-2xl overflow-hidden mt-2">
        <div className={`h-4 w-[${progress}%] bg-black rounded-l-2xl`}></div>
    </div>
  )
}

export default ProgressBar
