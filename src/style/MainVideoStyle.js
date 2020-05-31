import styled from 'styled-components';
export const VideoAddBtn = styled.p`
  position: absolute;
  bottom: 10px;
  right: 10px;
  margin: 0;
  padding: 10px;
  cursor: pointer;
  & button {
    display: ${(props) => (props.isShow ? 'block' : 'none')};
    width: 60px;
    height: 60px;
    border: none;
    border-radius: 50%;
    background: tomato;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.8);
    color: #fff;
    font-size: 30px;
    z-index: 3;
  }

  & button:after {
    position: absolute;
    left: -132%;
    top: 50%;
    transform: translateY(-50%);
    padding: 10px;
    width: 100px;
    background: #fff;
    color: #333;
    font-size: 14px;
    content: '비디오 추가';
    opacity: 0;
    visibility: hidden;
    transition: 0.3s linear;
    border-radius: 15px;
  }
  & button:hover:after {
    opacity: 1;
    visibility: visible;
  }
`;
export const MainVideoWrap = styled.div`
  position: relative;
  padding: 0 400px 50px 0;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #dcdcdcd6;

  & .video-item-wrap {
    display: none;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    border-radius: 15px;
    overflow: hidden;
  }
  & .video-item-wrap.on {
    display: block;
  }
  & .video-item {
    position: relative;
    overflow: hidden;
    animation: fadeInOut 1s;
    @keyframes fadeInOut {
      0% {
        opacity: 0.3;
      }

      100% {
        opacity: 1;
      }
    }
  }
  & .video-item.complete {
    position: relative;
    cursor: not-allowed;
  }
  & .video-item.complete:before {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    content: '';
  }
  & .video-item.complete:after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 300px;
    line-height: 300px;
    background: tomato;
    border-radius: 50%;
    text-align: center;
    font-size: 40px;
    color: #fff;
    opacity: 0.9;
    content: 'COMPLETE';
    z-index: 2;
  }

  & .video-item,
  & .video-item > div {
    height: 100%;
  }

  & .video-item iframe {
    width: 100%;
  }

  & .video-index-button {
    position: absolute;
    top: 180px;
    right: 400px;
    padding: 10px;
    text-align: center;
    background: #fff;
    box-shadow: -4px 3px 5px rgba(0, 0, 0, 0.3);
    border-radius: 15px 0 0 15px;
  }
  & .video-index-button li {
    width: 20px;
    height: 20px;
    background: tomato;
    opacity: 0.3;
    border-radius: 50%;
    text-indent: -999999rem;
    cursor: pointer;
    transition: 0.2s linear;
    vertical-align: middle;
  }
  & .video-index-button li:hover,
  & .video-index-button li.on {
    background: tomato;
    opacity: 1;
  }
  & .video-index-button li + li {
    margin-top: 20px;
  }
  & .ranking-btn {
    position: absolute;
    top: -10px;
    left: -10px;
  }
`;
export const SelectedVideoButton = styled.button`
  display: block;
  position: relative;
  width: 100%;
  height: 600px;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  background: #dcdcdc;

  &:after,
  &:before {
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    content: '';
  }
  &:after {
    width: 200px;
    height: 10px;
  }
  &:before {
    width: 10px;
    height: 200px;
  }
`;

export const SelectVideoTitle = styled.div`
  position: relative;
  margin-top: -4px;
  padding: 25px 100px 25px 15px;
  border: 1px solid #dcdcdc;
  border-top: 0;
  border-radius: 0 0 15px 15px;
  background: #fff;
  font-size: 15px;
  line-height: 1.5;

  & button {
    display: block;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    padding: 10px 20px;
    background: none;
    border: 1px solid #dcdcdc;
    cursor: pointer;
    transition: 0.3s linear;
  }

  & button:disabled {
    background: #eee;
    color: #999;
    cursor: not-allowed;
  }
`;

export const Popup = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 9999;

  & > .inner {
    position: relative;
    width: 800px;
    height: 600px;
    background: #fff;
    overflow: hidden;
  }

  & > .inner > div {
    padding: 20px 100px 20px 20px;
    height: 100%;
    overflow-y: scroll;
  }

  & .inner > button {
    position: absolute;
    bottom: 20px;
    right: 30px;
    display: block;
    width: 50px;
    height: 50px;
    background: skyblue;
    color: #fff;
    border: none;
    border-radius: 50%;
  }
`;
