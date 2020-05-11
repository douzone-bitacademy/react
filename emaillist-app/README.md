# React Component - stateful & pure 컴포넌트
<pre>
1. Props & State
   1.1 Props
    - 컴포넌트 구성(Configurastion) 정보
    - 상위 컴포넌트로부터 받음
    - 받은 컴포넌트에서는 변경 불가(immutable)

   1.2. State
   - Consructor에서 default 값 세팅으로 시작
   - 대체적으로 사용자 이벤트로 여러 차례 변경
   - 내부에서만 상태 관리
   - 상태 변경은 UI Rendering을 다시 하게 한다.

2. React Component
    2.1 Stateful Component
        - (선택적으로 상태)를 관리하는 컴포넌트를 상태 컴포넌트라 한다.
        - 보통 상태관리를 하는 컴포넌트는 컴포넌트 계층에서 상위에 있다
        - 상태 컴포넌트나 순수 컴포넌트를 하나 이상 래핑
    2.2 Pure Component
        - 상태 관리없이 속성으로 데이터 표시만 하는 컴포넌트
        - 재사용과 테스트 용이
    2.3 애플리케이션의 컴포넌트는 상태 비저장 순수 컴포넌트로 만드는 것이 좋다.

    2.4. emaillist : 예제 애플리케이션
    
        1) 어떤 컴포넌트가 상태 또는 순수가 되어애 하는가?
           - 상태를 기반으로 UI를 렌더링하는 컴포넌트
           - 공통 부모 컴모 컴포넌트 -> 상태 컴포넌트 ex) emaillist-app
           - 계층 구조상 산위에 있는 컴포넌트 ->  상태 컴포넌트  ex) emaillist-app
           - 못 찾겠으면 일부로라도 계층적으로 상위에 있는 상태 컴포넌트를 만들어서 상태관리하도록 한다. 
           - 
        2) emaillist: 작용예!
           - EmailListApp : Stateful Component
           - Emaillist, SearchBar : Pure Component

3. Component Communication
    3.1 Data Flow
       - 리액트 애플리케이션에서는 데이터는 컴포넌트 계층에서 위->아래(부모->자식) : 리액트는 아주 명시적이고 분명하다.
       - 하지만 거의 모든 애플리케이션에서는 아래->위 통신해야 하는 경우가 반드시 있음
    3.2 emaillist 에서 아래->위 통신 구현해보기

3. Component Lifecircle
    1) methods invoked when Mounting
    [consructor] -> [componentWillMount] (x) -> [render] -> [componentDidMount]

    2) method invoked when Unmounting
    [componentWillUnmount]

    3) methods invoked when Props Changes
    [componentWillReceiveProps] -> [shoudComponentUpdate] (x) -> [componentWillUpdate] (x) -> [render] -> [componentDidUpdate(prevProps, prevState, snapshot)]
                                   [getSnapshotBeforeUpdate(prevProps, prevState)] : override

   4) methods invoked when State Change
                                   [shoudComponentUpdate] (x) -> [componentWillUpdate] (x) -> [render] -> [componentDidUpdate(prevProps, prevState, snapshot)]
                                   [getSnapshotBeforeUpdate(prevProps, prevState)] : override

2. 주의할 점
(x) -> has been removed! so that Don't Use
Alternatives:
    componentWillMount -> consructor
    shoudComponentUpdate / componentWillUpdate -> Override getSnapshotBeforeUpdate(...)
</pre> 