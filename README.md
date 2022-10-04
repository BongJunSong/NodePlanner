State범위에 따른 redux, swr분리

Local State: 리액트 컴포넌트 안에서만 사용되는 state
Global State: Global Store에 정의되어 프로젝트 어디에서나 접근할 수 있는 state
Server State: 서버로부터 받아오는 state

redux : 2. Global State

깊은 복사를 해야하는 이유

부모컴포넌트에서 렌더링이 발생했을 경우 자식컴포넌트를 렌더링할지말지를 레퍼런스를
비교한다. 즉 최적화가 가능하다.

부모컴포넌트의 렌터딩이 발생시 자식 컴포넌트에서도 렌더링이 발생하는경우 자식 컴포넌트는 부모 컴포넌트의 의존하고 있다. = 상태 데이터를 공유하고 있다.


