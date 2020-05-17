import React, {useState} from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as daylogAction from '../reducers/dayLog';

const DaylogInput = (props) => {
    let [values, setValues] = useState({});

    const handleInputTextChange = e => {
        const {name, value} = e.target
        setValues({...values, [name]: value})
    }
    const { DaylogAction } = props;

    const handleOK = () => {
        console.log('OK Clicked!')
        console.log(values)
        // redux 에 있는 userid, youtube.title, youtube.time 정보를 전달 필요
        // data: {userid, message, weight, youtube.title, youtube.time}
        // axios.post('localhost:7777', data)
        DaylogAction.postDaylog(values)
    }
    return (
        <div>
            <h3> Daylog Input </h3>
            <div> 
                <textarea placeholder="오늘 운동 어땠나요?"
                    name='message'
                    onChange = {handleInputTextChange}/> 
            </div>
            <div> 
                Wieght: <input 
                        name='weight'
                        onChange = {handleInputTextChange}/> 
            </div>
            <button onClick = {handleOK}> OK</button>
        </div>
    )
}

export default connect(
    state => ({
        
    }),
    dispatch => ({
        DaylogAction: bindActionCreators(daylogAction, dispatch)
    })
)(DaylogInput);