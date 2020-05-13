import styled from 'styled-components';

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

const UnicornAfter = styled.div`
  &:after {
    content: ' 🦄';
  }
`;
