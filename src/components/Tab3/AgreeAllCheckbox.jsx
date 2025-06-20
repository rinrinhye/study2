const AgreeAllCheckbox = ({ handleAgreeAll, isAllAgreed }) => {
	return (
		<div>
			<input
				type="checkbox"
				name="agreeAll"
				id="agreeAll"
				onChange={handleAgreeAll}
				checked={isAllAgreed}
			/>
			<label htmlFor="agreeAll">전체동의</label>
		</div>
	);
};

export default AgreeAllCheckbox;
