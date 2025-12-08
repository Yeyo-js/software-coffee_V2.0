function Button({
  text,
  onClick,
  className = '',
  type, 
  disabled,
  children,
  variant = 'default',


}) {
  const variants ={
    default : `mt-3 py-2.5 rounded-lg font-semibold
              bg-linear-to-r from-amber-400 to-amber-500
              hover:from-amber-500 hover:to-amber-600
              active:scale-95
              transition-all duration-300
              shadow-md hover:shadow-lg`,
    primary :'text-[#ffff] cursor-pointer',
    secondary: `
      px-4 sm:px-6 md:px-8 lg:px-10 py-2.5 sm:py-3
      text-sm sm:text-base 
      bg-gradient-to-br from-white to-[#0E4051]
      text-white font-semibold text-center
      rounded-lg shadow-lg hover:shadow-xl 
      transition-all duration-300 hover:-translate-y-[3px] hover:from-[#725800] hover:to-white
      min-w-[120px]  sm:min-w-[160px] md:min-w-[180px]
`}

  return (
    <button 
            className={`
              ${className}
              ${variants[variant] || variants.default}
              `}
            onClick={onClick}
            type={type}
            disabled={disabled}
          >
            {text || children}
          </button>
    )
}

export { Button }