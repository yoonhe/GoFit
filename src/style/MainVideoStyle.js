import styled from 'styled-components';
export const MainVideoWrap = styled.div`
  width: 100%;
  height: 600px;
  border: 1px solid #dcdcdc;

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
  }

  & .video-item,
  & .video-item > div {
    height: 100%;
  }

  & .video-item iframe {
    width: 100%;
    height: 100%;
  }
`;
export const SelectedVideoButton = styled.button`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
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
