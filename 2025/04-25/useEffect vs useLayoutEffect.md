# useEffect vs useLayoutEffect

`useEffect` 와 `useLayoutEffect` 는 모두 렌더링된 후에 특정 작업을 수행하기 이ㅜ해 사용된다. 하지만 실행되는 **타이밍**과 **용도**가 다르다.

1. **useEffect**

- **렌더링이 완료되는 시점**에 **비동기적**으로 실행된다. 즉, 화면이 실제로 사용자에게 그려진 후에 `useEffect`가 실행되는 방식이다. 그래서 `useEffect`는 보통 데이터를 가져오는 작업이나 이벤트 리스너 추가 등 레던링 후에 화면에 직접적인 영향을 주지않는 작업에 주로 사용된다.

2.  **useLayoutEffect**

- **렌더링 후 DOM이 업데이트되기 직전의 시점**에 **동기적**으로 실행된다. 여기서 **동기적**이라는 것은 화면에 내용이 그려지기 전에 모든 레이아웃 관련 작업이 완료된다는 의미이다.예를 들어, **DOM의 크기를 측정**하거나 **위치를 조정해야 할**때 `useLayoutEffect`를 사 용하면 즉각적으로 그 변경사항이 반영되어 화면 깜빡임이나 불필요한 재렌더링을 방지할 수 있다.

정리하면, **렌더링 후 실행되는 비동기 작업**에는 `useEffect`가 적합하고, 레이아웃 작업이나 DOM 조작과 같이 **화면에 그려지기 전에 완료되어야 하는 작업**에는 `useLayoutEffect`가 적합하다.

예를 들면, `useEffect`는 사용자 데이터를 API로부터 가져오는 상황에 자주 사용한다. 데이터가 렌더링 후에 설정되면 화면이 자연스럽게 업데이트되는 것이다.

```js
useEffect(() => {
  fetchData().then((data) => setData(data));
}, []);
```

`useLayoutEffect`는 DOM의 크기를 측정해서, 다른ㄹ 요소의 위치를 조정해야 할 때 유용하다. 예를 들어, 어떤 요소의 높이를 측정해 그 높이에 맞춰 레이아웃을 맞추고 싶을 때 사용한다.

```js
useLayoutEffect(() => {
  const height = ref.current.offsetHeight;
  setHeight(height);
}, []);
```

단, `useLayoutEffect` 사용 시 **성능 면에서 주의할 점**이 있다. `useLayoutEffect`는 동기적으로 실행되기 때문에 너무 많은 작업이 실행되면 렌더링이 느려질 수 있다. 따라서 보통은 `useEffect`를 기본적으로 사용하고, 화면에 영향을 주는 작업만 `useLayoutEffect`로 처리하는 것이 좋다.
