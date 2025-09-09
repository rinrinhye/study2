import React from "react";

/**
 * ErrorBoundary
 * - 자식 트리에서 렌더 중 발생한 에러를 감지하여 "대체 UI(fallback)"로 교체하는 컴포넌트.
 * - 반드시 클래스 컴포넌트로 작성해야 한다. (함수형 Hook으로 대체 불가)
 * - React가 내부적으로 인식하는 에러 전용 라이프사이클을 제공한다:
 *   1) static getDerivedStateFromError(error)  
          : 렌더 단계에서 에러 감지 → state 갱신(다음 render에 반영)
 *   2) componentDidCatch(error, info)          
          : 커밋 단계에서 에러 정보 전달 → 로깅/리포팅에 사용
 */
export class ErrorBoundary extends React.Component {
	/**
	 * state: 이 컴포넌트의 내부 상태 저장소
	 * - hasError: 에러 발생 여부
	 * - error   : 실제 에러 객체(메시지 등 접근 가능)
	 *
	 * 초기값을 강제로 에러(true)로 설정하여, 첫 진입에서 3초간 fallback UI를 보여주도록 구성.
	 * (실제 서비스에서는 보통 false로 시작한다.)
	 */
	state = {hasError: true, error: new Error("첫 진입 강제 에러")};

	/**
	 * componentDidMount()
	 * - "마운트 직후" 1회 호출되는 라이프사이클 메서드. -> useEffect(..., [])
	 * - 네트워크 요청, 구독, 타이머 시작 등 부수효과를 두는 자리.
	 *
	 * 여기서는 3초 뒤 에러 상태를 초기화하여 정상 화면으로 전환한다.
	 * setState(...) 호출 시 React가 render()를 다시 실행하여 UI를 갱신한다.
	 */

	componentDidMount() {
		this.timer = setTimeout(() => {
			this.setState({hasError: false, error: null});
		}, 3000);
	}

	/**
	 * componentWillUnmount()
	 *  - useEffect의 cleanup
	 * - "언마운트 직전" 1회 호출되는 라이프사이클 메서드.
	 * - 타이머/이벤트 리스너/구독 등을 정리(cleanup)하는 자리.
	 *
	 * 여기서는 setTimeout으로 만든 타이머를 해제한다. (메모리 누수 방지)
	 */
	componentWillUnmount() {
		clearTimeout(this.timer);
	}

	/**
	 * static getDerivedStateFromError(error)
	 * - 정적(static) 메서드.
	 * - 자식 컴포넌트 렌더 중 에러가 throw되었을 때 실행된다.
	 * - 반환한 객체가 state에 병합되어, "다음 render()" 에서 fallback UI가 출력된다.
	 *
	 * 역할 요약: "에러 발생 사실을 state에 기록 -> render() 재실행".
	 */

	static getDerivedStateFromError(error) {
		return {hasError: true, error};
	}

	/**
	 * componentDidCatch(error, info)
	 * - "커밋 단계"에서 React가 자동 호출한다. (이미 fallback으로 전환된 이후)
	 * - error: 실제 에러 객체
	 * - info : { componentStack: string } 형태로 컴포넌트 스택 정보 포함
	 *
	 * 역할 요약: 오류가 났을 때 내부적으로 처리할 일들 (로그, 분석, 서버 전송 등)"을 담는 자리
	 */
	componentDidCatch(error, info) {
		console.error("Caught by ErrorBoundary:", error, info);
	}

	/**
	 * render()
	 * - 화면에 무엇을 그릴지 반환하는 필수 메서드.
	 * - setState()로 state가 바뀔 때 재실행

	 * 분기:
	 * - 에러 상태(hasError=true)라면: fallback 렌더링,
	 * - 에러가 없으면: 자식(children)을 그대로 렌더링한다.
	 */
	render() {
		if (this.state.hasError) {
			return this.props.fallback;
		}
		return this.props.children;
	}
}
