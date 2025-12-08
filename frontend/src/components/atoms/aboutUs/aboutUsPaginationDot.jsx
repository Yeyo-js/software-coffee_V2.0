function AboutUsPaginationDot({ isActive }) {
  return (
    <div 
      className={`h-3 rounded-full transition-all duration-500 shadow-lg ${isActive ? 'w-8 bg-[#FFBB00]' : 'w-3 bg-[#5c421b]'}`}
    ></div>
  )
}
export { AboutUsPaginationDot }