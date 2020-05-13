Redux(state) => 안정성, state 통제 용이

- store 설정(state)
- Action => state를 바꾸는 행동
- Dispatch => Action 실행
- Reducer => Action의 결과로 state를 어떻게 바꿀지 정의

ex) 로그인액션 dispatch시 => isLoggined state를 true로

- 리액트는 리덕스와 별개이다, 그렇기때문에 redux 모듈도 필요하고 리액트와 리덕스를 연결해주기위한 react-redux 모듈도 필요함
- 리덕스의 상태관리 시스템을 리액트에서 사용하기위해 react-redux가 필요함

- ACTION을 통해서만 state 관리가 가능하기때문에 공통 state를 잡아 놓고 Action, reducer를 각자 만드는것이 어떤지?.

[store 쪼개기]

- 너무 한곳에 모여있으면 코드량이 방대해지기 때문에 한단계씩 쪼개준다.(루트 스토어에 모아준다)

[ redux saga를 쓰는 이유 ? ]
리덕스사가는 동기적인 요청만 처리함. 그래서 비동기적 요청을 액션 사이사이에 넣어줄때 사용함

예를 들어,

1. {type:LOG_IN data:{id:'yoonhe', password:'1234}} 로 디스패치를 보내고
2. 서버에 데이터가 전달되고
3. 서버가 로그인 성공이라는 응답을 보내주고
4. 그걸 다시 받아서 로그인

위의 순서대로 하고싶을때 리덕스를 사용하면 동기적 요청만 가능하기때문에 1번까지만 구현 가능하고 나머지는 안됨 그래서 리덕스 사가를 사용해 비동기 요청을 처리해줘야함
