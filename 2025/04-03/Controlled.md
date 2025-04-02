# Controlled Component 와 Uncontrolled Component 차이점

1. **Controlled Component**

- 리액트 상태(`state`)를 통해 입력 값을 제어하는 컴포넌트를 말한다. 이 방식에서는 입력 요소의 값(`value`)을 리액트 상태와 동기화하고, 사용자가 입력을 변경할 때마다 `onChange` 이벤트 핸들러를 통해 상태를 업데이트한다. Controlled Component는 값이 리액트의 `state`로 관리되므로, 입력 시마다 값을 검증하거나, 값을 자유롭게 변경할 수 있으며, 복잡한 폼 로직을 처리하는 데 유용하다.

2. **Uncontrolled Component**

- 입력 값을 리액트가 관리하지 않고, DOM을 통해 입력 값을 제어하는 방식이다. 즉, 입력 요소의 값은 DOM에서 직접 관리되며, 리액트는 이를 제어하지 않는다. 이 방식에서는 `useRef`를 사용해 생성된 참조 객체인 `ref`를 사용하여 DOM 요소에 직접 접근하여 값을 읽거나 조작한다. Uncontrolled Component는 리액트 상태 관리에 따른 성능 비용이 없으므로 상대적으로 간단한 폼에서 주료 사용된다.

# 사용되는 상황

1. 단순한 입력 필드가 포함된 폼에서는 입력 요소의 값을 리액트 상태로 관리할 필요성이 적으므로, Uncontrolled Component를 사용하는 것이 더 간단하고 성능이 좋다. 사용자가 제출 버튼을 클릭했을 때만 입력 값을 가져와도 충분한 경우를 예시로 들 수 있다.

반면, 값을 입력할 때마다 유효성 검증을 실시간으로 해주어야 하는 경우에는 Component Controlled를 사용해야한다.
