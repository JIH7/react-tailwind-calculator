const Screen = ({ value, style }) => {
    return (
        <div className={'w-full h-28 pt-5 pr-2 mb-6 text-7xl text-right rounded-lg transition-colors truncate ' + style.screenStyle}>
            {value}
        </div>
    )
}

export default Screen
