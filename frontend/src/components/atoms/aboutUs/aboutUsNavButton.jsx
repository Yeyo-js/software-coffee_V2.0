function AboutUsNavButton({ onClick, children }) {
  return (
    <button 
      onClick={onClick} 
      className="p-2 md:p-4 text-[#FFBB00] hover:text-white hover:scale-110 transition-all text-3xl md:text-5xl cursor-pointer z-20 drop-shadow-lg bg-transparent border-none"
    >
      {children}
    </button>
  )
}
export { AboutUsNavButton }