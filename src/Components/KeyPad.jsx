import Button from "./Button"

const KeyPad = ({style, buttonClick}) => {
    let bgColor = 'bg-veryDarkDesaturatedBlueKeypad'
  
    return(
      <div className={'flex items-center justify-center w-full h-full rounded-lg p-6 transition-colors ' + style.keypadStyle}>
        <div className='grid grid-cols-4 grid-rows-5 w-full h-full'>
          <Button text="7" handleClick={buttonClick} style={style}/>
          <Button text="8" handleClick={buttonClick} style={style}/>
          <Button text="9" handleClick={buttonClick} style={style}/>
          <Button text="DEL" handleClick={buttonClick} style={style} buttonType="util"/>
          <Button text="4" handleClick={buttonClick} style={style}/>
          <Button text="5" handleClick={buttonClick} style={style}/>
          <Button text="6" handleClick={buttonClick} style={style}/>
          <Button text="+" handleClick={buttonClick} style={style}/>
          <Button text="1" handleClick={buttonClick} style={style}/>
          <Button text="2" handleClick={buttonClick} style={style}/>
          <Button text="3" handleClick={buttonClick} style={style}/>
          <Button text="-" handleClick={buttonClick} style={style}/>
          <Button text="." handleClick={buttonClick} style={style}/>
          <Button text="0" handleClick={buttonClick} style={style}/>
          <Button text="/" handleClick={buttonClick} style={style}/>
          <Button text="x" handleClick={buttonClick} style={style}/>
          <Button text="RESET" handleClick={buttonClick} style={style} colSpan = "col-span-2" buttonType="util"/>
          <Button text="=" handleClick={buttonClick} style={style} colSpan = "col-span-2" buttonType="equals"/>
          </div>
      </div>
    )
  }

export default KeyPad