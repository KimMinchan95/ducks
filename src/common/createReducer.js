import produce from 'immer';

// reducer를 반환하는 함수
export default function createReducer (initialState, handlerMap) {
  // reducer
  return function (state = initialState, action) {
    // 객체대신 immer의 produce함수 리턴, 불변객체로 관리
    return produce(state, draft => {
      // handlerMap은 action들을 담고있음 action.type의 key값과 일치하는 요소로 초기화
      const handler = handlerMap[action.type];
      // 미리 등록한 일치한 action.type이 있을 경우
      if(handler) {
        handler(draft, action);
      }
    })
  }
}
