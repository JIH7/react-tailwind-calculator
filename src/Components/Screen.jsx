const Screen = ({ value, style }) => {
    return (
        <div className={'w-full h-40 pt-5 pr-2 mb-6 text-7xl text-right rounded-lg transition-colors ' + style.screenStyle}>
            <span className='truncate'>{value}</span>
        </div>
    )
}

export default Screen
