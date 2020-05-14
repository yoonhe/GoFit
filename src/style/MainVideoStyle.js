import styled from 'styled-components';
export const MainVideoWrap = styled.div`
  width: 100%;
  height: 500px;
  border: 1px solid #dcdcdc;
  & > div {
    height: 100%;
  }
  & iframe {
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
  padding: 20px;
  border: 1px solid #dcdcdc;

  & button {
    position: absolute;
    right: 10px;
    top: 10px;
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
