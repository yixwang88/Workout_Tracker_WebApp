function Planner(props) {
    const dateFilter = props["dateFilter"]

    function next30Days(date) {
        let arr = []
        for(let i=0; i < 30; i++) {
            let newDate = new Date(date)
            newDate.setDate(newDate.getDate() + i)
            arr.push(newDate)
        }
        return arr
    }

    function makeHoursArray() {
        let arr = []
        for(let i = 0; i < 24; i++) {
            let time = new Date()
            time.setHours(i)
            time.setMinutes(0)
            arr.push(time)
        }
        return arr
    }

    const dayFormat = new Intl.DateTimeFormat(navigator.language, { weekday: "short" })
    const shortDateFormat = new Intl.DateTimeFormat(navigator.language, { month: "short", day: "numeric" })
    const hourFormat = new Intl.DateTimeFormat(navigator.language, { hour: "2-digit", minute: "2-digit", hourCycle: "h12"})
    const daysArray = next30Days(dateFilter)
    const hoursArray = makeHoursArray()

    return <div className={`flex flex-row rounded-lg bg-white grow`}>
        {/* Time labels (TODO) */}
        <div className="min-w-[6rem] text-center h-full flex flex-col">
            <div className="min-h-[4rem]"/>
            <div className="border-r-2  border-[#ddd] flex-grow">
                {hoursArray.map((value) => {
                    return <div className="min-h-[4rem]">{hourFormat.format(value)}</div>
                })}
            </div>
        </div>

        {/* Day columns */}
        <div className="flex flex-row overflow-scroll">
            {daysArray.map((value) => {
                return <div>
                    {/* Date labels */}
                    <div className="flex border-b-2 border-[#ddd] w-[10rem] h-[4rem] justify-center text-center flex-col align-center" key={value}>
                        <p>{dayFormat.format(value)}</p>
                        <b>{shortDateFormat.format(value)}</b>
                    </div>
                </div>
            })}
        </div>
    </div>
}

export default Planner;