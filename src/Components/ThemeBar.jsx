import { useState } from "react"

function ThemeBar({onSelect, style}) {
    //When position is initialized with a value of one, the first click of the theme selector on page load doesn't work.
    //Initialized at 2 it works as intended. I have no idea why.
    const [position, setPosition] = useState(2)
    const [leftState, setLeftState] = useState("left-1")
  
    function handleClick() {
      if (position === 3) {
        setPosition(1)
      } else {
        setPosition(position + 1)
      }
  
      if (position === 1) {
        setLeftState("left-1")
        onSelect(0)
      } else if (position === 2) {
        setLeftState("left-6")
        onSelect(1)
      } else if (position === 3) {
        setLeftState("left-12")
        onSelect(2)
      }
    }
  
    return(
      <div className='grid grid-cols-2 grid-rows-2 mb-3'>
        <div></div>
        <div className='flex justify-between mx-1'>
          <span className={'transition-colors ' + style.textStyle}>1</span>
          <span className={'transition-colors ' + style.textStyle}>2</span>
          <span className={'transition-colors ' + style.textStyle}>3</span>
        </div>
        <span className={'mx-3 tracking-wider transition-colors ' + style.textStyle}>THEME</span>
        
        <div onClick={handleClick} className={`group cursor-pointer rounded-full transition-colors ${style.screenStyle} w-full h-full`}>
          <div className={`transition-all rounded-full relative h-full w-1/3 ${leftState} ${style.buttons.equalsButtonStyle}`}></div>
        </div>
      </div>
    )
  }

  export default ThemeBar