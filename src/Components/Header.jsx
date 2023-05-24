import ThemeBar from "./ThemeBar"

const Header = ({style, onSelect}) => {
  return (
    <div className="w-full flex justify-between">
      <h1 className={"mt-1 text-4xl transition-colors " + style.textStyle}>calc</h1>
      <ThemeBar onSelect={onSelect} style={style}/>
    </div>
  )
}

export default Header
