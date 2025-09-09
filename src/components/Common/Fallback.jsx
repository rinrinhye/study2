import {useEffect} from "react";

export default function Fallback({error, reset}) {
	// 에러 상태에서 자동 3초 기다린 뒤 reset
	useEffect(() => {
		const t = setTimeout(() => reset(), 3000);
		return () => clearTimeout(t);
	}, [reset]);

	return (
		<div style={{padding: 20, textAlign: "center", color: "red"}}>
			<h2>⚠️ 오류 발생</h2>
			<p>{error?.message}</p>
			<p>3초 뒤 자동으로 다시 시도합니다...</p>
		</div>
	);
}
