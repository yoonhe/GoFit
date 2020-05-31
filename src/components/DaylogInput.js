import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as daylogAction from '../reducers/dayLog';
import { DaylogInputStyle, TagStyle } from '../style/DaylogStyle';
import waterImg from '../../water_icon3.jpg';
import plusImg from '../../plusbtn6.png';
import axios from 'axios';
import moment from 'moment';

//axios.defaults.withCredentials = true;

const DaylogInput = (props) => {
	let [values, setValues] = useState({});
	const dispatch = useDispatch();
	const selectVideo = useSelector((state) => state.video.selectedVideo);
	const selectedDetails = useSelector((state) => state.video.selectedDetails);
	const { selectedDate } = useSelector((state) => state.dayLog);

	const handleInputTextChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};
	const handleWaterclick = (e) => {
		const { name } = e.target;
		if (name === 'waterAdd') {
			if (values.waterArr !== undefined) {
				let newWaterValue = values.waterArr;
				newWaterValue.push(values.waterArr.length + 1);
				setValues({ ...values, waterArr: newWaterValue });
			} else {
				setValues({ ...values, waterArr: [1] });
			}
		} else {
			let newWaterValue = values.waterArr;
			newWaterValue.pop();
			setValues({ ...values, waterArr: newWaterValue });
		}
	};
	const handleOK = () => {
		console.log('OK Clicked!');
		//console.log(values);
		const youtubeTime = selectedDetails
			? selectedDetails.contentDetails.duration
			: null;
		//console.log('youtubeTime', youtubeTime);
		const data = {
			...values,
			selectVideo,
			youtubeTime,
			selectedDate,
		};
		// redux 에 있는 userid, youtube.title, youtube.time 정보를 전달 필요
		// data: {userid, message, weight, youtube.title, youtube.time, youtube.url 등 selectVideo 전체}
		// axios.post('localhost:7777', data)
		//console.log('확인 send data', data);
		props.showDaylogInputClosePopup(data);
	};
	const handleTagAdd = (e) => {
		if (e.key === 'Enter') {
			console.log('tag input enter!');
			let tags = values.tags;
			if (tags === undefined) {
				tags = [values.tagInput];
			} else {
				tags.push(values.tagInput);
			}
			setValues({ ...values, tags: tags, tagInput: '' });
		}
	};

	return (
		<div>
			<DaylogInputStyle>
				<h3>
					<span>오늘 운동 어땠나요?</span>
				</h3>
				<div>
					<textarea
						placeholder="운동 완료!"
						name="message"
						onChange={handleInputTextChange}
					/>
				</div>
				<div>
					몸무게 :
					<input name="weight" type="number" onChange={handleInputTextChange} />
				</div>
				<div>
					오늘 물 마신 양( +300ml):
					<div>
						<img
							src={plusImg}
							width="40px"
							height="40px"
							name="waterAdd"
							onClick={handleWaterclick}
						/>
						{values.waterArr ? (
							values.waterArr.map((el) => {
								return (
									<img
										src={waterImg}
										width="40px"
										height="40px"
										name="waterRemove"
										onClick={handleWaterclick}
									/>
								);
							})
						) : (
							<div></div>
						)}
					</div>
				</div>
				<div className="tags">
					tags:
					<input
						name="tagInput"
						onChange={handleInputTextChange}
						onKeyPress={handleTagAdd}
						value={values.tagInput}
					/>
					<div className="Daylogtag">
						{values.tags ? (
							values.tags.map((tag) => {
								return <div className="tag">{tag}</div>;
							})
						) : (
							<div></div>
						)}
					</div>
				</div>
				<button onClick={handleOK}> OK</button>
			</DaylogInputStyle>
		</div>
	);
};

export default DaylogInput;
