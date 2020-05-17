import React, { useMemo, Component } from 'react';
import DaylogEntry from './DaylogEntry'

const DaylogList = ({daylogs}) => {
    console.log('daylog list called')
    //날짜 나중 순 sorting 
    daylogs.sort(function(x, y) {
        const xdate = Date.parse(x.date)
        const ydate = Date.parse(y.date)
        return ydate - xdate
    })

    console.log('props.daylogs ??' , daylogs)
    return (
        <div>
            <h3> Daylog List </h3>
            {
                daylogs.length !== 0? 
                daylogs.map((day) => <DaylogEntry log = {day}/>)
                : <div></div>
            }
        </div>
    )
}


export default DaylogList;