import {useEffect} from "react";

export default function Fallback({error, reset}) {
	// useEffect: 컴포넌트가 마운트된 후 실행
	// - setTimeout으로 3초 뒤 reset() 호출
	// - reset은 ErrorBoundary로부터 전달된 함수로,
	//   에러 상태를 초기화하여 다시 자식 트리를 렌더링하도록 만든다
	// - 클린업(return)에서는 clearTimeout으로 타이머를 해제해 메모리 누수 방지
	useEffect(() => {
		const t = setTimeout(() => reset(), 3000);
		return () => clearTimeout(t);
	}, [reset]);

	// 에러 상태일 때 사용자에게 보여줄 UI
	return (
		<div style={{padding: 20, textAlign: "center", color: "red"}}>
			<h2>⚠️ 오류 발생</h2>
			<p>{error?.message}</p>
			<p>3초 뒤 자동으로 다시 시도합니다...</p>
		</div>
	);
}
