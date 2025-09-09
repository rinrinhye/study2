import React from "react";
import ConsentItem from "./ConsentItem";

const ConsentList = ({agreements, handleCheckbox}) => {
	return (
		<ul>
			{agreements.map((item) => (
				<ConsentItem {...item} key={item.inputId} handleCheckbox={handleCheckbox} />
			))}
		</ul>
	);
};

export default React.memo(ConsentList);
