export default function Fallback({error}) {
	return (
		<div style={{padding: 20, textAlign: "center", color: "red"}}>
			<h2>⚠️ 오류 발생</h2>
			{error?.message && <p>{error?.message}</p>}
			<p>3초 뒤 자동으로 다시 시도합니다...</p>
		</div>
	);
}
