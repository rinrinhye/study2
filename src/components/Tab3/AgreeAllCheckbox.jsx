const AgreeAllCheckbox = ({handleAgreeAll, isAllAgreed}) => {
	return (
		<div className='mb-1 text-sm'>
			<input type='checkbox' className='mr-1' name='agreeAll' id='agreeAll' onChange={handleAgreeAll} checked={isAllAgreed} />
			<label htmlFor='agreeAll'>전체동의</label>
		</div>
	);
};

export default React.memo(AgreeAllCheckbox);
