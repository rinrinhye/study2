// ErrorBoundary.jsx
import React from "react";

export class ErrorBoundary extends React.Component {
	// 1) 클래스 컴포넌트의 내부 상태 초기값
	state = {hasError: true, error: new Error("첫 진입 강제 에러")};

	componentDidMount() {
		// 3초 뒤 reset
		this.timer = setTimeout(() => {
			this.setState({hasError: false, error: null});
		}, 3000);
	}

	componentWillUnmount() {
		clearTimeout(this.timer);
	}

	// 2) 자식에서 '렌더 중' 에러가 throw되면, 다음 렌더 전에 호출되는 정적 메서드
	static getDerivedStateFromError(error) {
		// → 에러 발생 플래그/정보를 상태로 저장해서,
		//   바로 다음 render() 때 '대체 UI'를 그리게 만듦
		return {hasError: true, error};
	}

	// 3) 에러가 잡힌 뒤 '커밋 단계'에 호출되는 라이프사이클 훅 (로그 전송 등 '부수효과' 위치)
	componentDidCatch(error, info) {
		// info.componentStack 에는 컴포넌트 스택(트리)이 문자열로 담김
		console.error("Caught by ErrorBoundary:", error, info);
		// 여기에 Sentry/LogRocket 같은 로깅 전송 코드 넣는 게 관례
	}

	// 4) 렌더
	render() {
		// 에러가 났다면 대체 UI를 보여줌
		if (this.state.hasError) {
			// props.fallback 이 있으면 그걸 쓰고, 없으면 기본 문구 표시
			if (typeof this.props.fallback === "function") {
				return this.props.fallback(this.state.error, () => this.setState({hasError: false, error: null}));
			}
			return this.props.fallback;
		}
		// 평소엔 자식 트리를 그대로 그림
		return this.props.children;
	}
}
