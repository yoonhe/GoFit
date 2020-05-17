import React from 'react';

const DaylogEntry = ({log}) => {
    console.log('daylog entry called')
    console.log('daylog entry props?', log)
    return (
        <div>
            <h3> Daylog Entry </h3>
            <div> {log.date}</div>
            <div> {log.youtubeTitle}</div>
            <div> {log.message}</div>
            <div> weight: {log.weight}</div>
       </div>
    )
}

export default DaylogEntry;