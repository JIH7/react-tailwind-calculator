const Button = ({text, colSpan = 'col-span-1', buttonType = 'default', handleClick, style}) => {

    let buttonStyle = style.buttons.defaultButtonStyle
    if (buttonType === 'util') {
        buttonStyle = style.buttons.utilButtonStyle
    } else if (buttonType === "equals") {
        buttonStyle = style.buttons.equalsButtonStyle
    }
  
    return(
      <div className={'row-span-1 ' + colSpan + ' flex justify-center items-center mx-1 md:mx-4 lg:mx-2 my-3'}>
        <div onClick={() => handleClick(text)} className={'cursor-pointer rounded-lg transition-colors w-full h-full text-3xl md:text-5xl text-center truncate py-2.5 lg:py-6 ' + buttonStyle}>{text}</div>
      </div>
    )
  }

  export default Button