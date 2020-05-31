import styled from 'styled-components';

export const MainWrap = styled.div`
  position: relative;
  margin: 0 auto;
  width: calc(100% - 200px);

  & > * {
    width: 100%;
  }
`;

export const MainTopWrap = styled.div`
  position: relative;
  margin: 50px 0;
  padding: 0 0 10px;
`;
