//=================== old ============================

// import * as React from "react"

// import { cn } from "@/lib/utils"

// export interface InputProps
//   extends React.InputHTMLAttributes<HTMLInputElement> {}

// const Input = React.forwardRef<HTMLInputElement, InputProps>(
//   ({ className, type, ...props }, ref) => {
//     return (
//       <input
//         type={type}
//         className={cn(
//           "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
//           className
//         )}
//         ref={ref}
//         {...props}
//       />
//     )
//   }
// )
// Input.displayName = "Input"

// export { Input }

//=============================== new ===================

import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, placeholder, value, onFocus, onBlur, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false)

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true)
      if (onFocus) {
        onFocus(e)
      }
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      if (!e.target.value) {
        setIsFocused(false)
      }
      if (onBlur) {
        onBlur(e)
      }
    }

    React.useEffect(() => {
      if (value) {
        setIsFocused(true)
      } else {
        setIsFocused(false)
      }
    }, [value])

    return (
      <div className="relative w-full">
        <input
          type={type}
          className={cn(
            "w-full px-3 py-2 text-sm text-muted-foreground bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-600",
            className
          )}
          ref={ref}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          {...props}
        />
        <label
          className={cn(
            "absolute left-3 top-2 text-sm text-white transition-all transform origin-top-left pointer-events-none",
            {
              "scale-75 -translate-y-5": isFocused || value,
              "scale-100 translate-y-0": !isFocused && !value,
            }
          )}
        >
          {placeholder}
        </label>
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
