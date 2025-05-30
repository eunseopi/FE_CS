# Tanstack Query 사용하는 이유?

**TansTack Query**는 **서버 상태 관리의 복잡성을 극복하기 위해** 사용하는 라이브러리이다.
여기서 **서버 상태**란 **서버에서 제공하는 데이터**로, 클라이언트에서 직접 수정할 수 없고 네트워크 요청과 같은
비동기 작업을 통해 가져오거나 갱신해야 하는 데이터를 의미한다.

1. **효율적인 캐싱 처리 기능** 제공

- 동일한 데이터를 반복적으로 요청하지 않아 네트워크 비용을 절감하고, 캐싱된 데이터를 즉시 제공해
  더 나은 사용자 경험을 제공할 수 있다.

2. **비동기 데이터 관리의 복잡성을 줄여준다**

- TanStack Query 는 데이터의 가져오기(fetch), 갱신(reftech), 무효화(invalidate) 등의 작업을 선언적으로 처리할 수 있어
  코드가 간결해지고 유지보수가 용이해진다.

3. **에러 및 로딩 상태 관리를 단순화**

- `useQuery()` 와 `useMutation()` 훅을 사용하면 서버 데이터와 관련된 로딩, 성공, 실패 상태를 명확하고 직관적으로 처리할 수 있어
  로직이 깔끔해진다.

# TanStack Query를 사용할 때 발생할 수 있는 단점이나 한계

1. **캐싱 전략 관리의 복잡성**

- 강력한 캐싱 기능을 제공하지만, `staleTime`, `gcTime` 같은 옵션을 잘못 설정하면, 데이터 갱신 타이밍이 적절하지 않아
  최신 데이터가 사용자에게 노춸되지 않거나 불필요한 요청이 발생할 수 있다.

2. **초기 학습 곡선이 존재**

- Query Key 설계, 데이터 무효화 등 다양한 개념을 이해하고 적절히 활용해야 하므로 초기에 학습해야 하는 지식의 양이 많다.

3. **클라이언트 상태와 서버 상태 간 의존 관계가 복잡한 경우**, TanStack Query만으로는 해결하기 어려울 수 있다.
   이때는 Redux, Zustand 등 별도의 상태 관리 라이브러리가 필요할 수 있다.
