import styled from 'styled-components';
export const MainVideoWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  & .video-item-wrap {
    display: none;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
  }
  & .video-item-wrap.on {
    display: block;
  }
  & .video-item {
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
  }
  & .video-item.complete:after {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: skyblue;
    font-size: 50px;
    color: #fff;
    opacity: 0.9;
    content: 'COMPLETE';
    cursor: not-allowed;
  }

  & .video-item,
  & .video-item > div {
    height: 100%;
  }

  & .video-item iframe {
    width: 100%;
  }

  & .video-index-button {
    padding: 0;
    margin-top: 20px;
    width: 100%;
    text-align: center;
  }
  & .video-index-button li {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: #fff;
    border: 1px solid #dcdcdc;
    border-radius: 50%;
    text-indent: -999999rem;
    cursor: pointer;
    transition: 0.2s linear;
    vertical-align: middle;
  }
  & .video-index-button li:hover,
  & .video-index-button li.on {
    background: skyblue;
  }
  & .video-index-button li + li {
    margin-left: 20px;
  }
`;
export const SelectedVideoButton = styled.button`
  display: block;
  position: relative;
  width: 100%;
  height: 600px;
  border: 10px solid #dcdcdc;
  box-sizing: border-box;
  cursor: pointer;
  background: none;

  &:after,
  &:before {
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #dcdcdc;
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
  margin-top: 15px;
  padding: 20px 100px 20px 20px;
  border: 1px solid #dcdcdc;

  & button {
    position: absolute;
    right: 20px;
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
