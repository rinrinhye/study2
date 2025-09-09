import {ErrorBoundary} from "../../components/Common/ErrorBoundary";
import Fallback from "../../components/Common/Fallback";

const Tab8 = () => {
	return (
		<ErrorBoundary fallback={(error, reset) => <Fallback error={error} reset={reset} />}>
			<div>Tab8 컨텐츠</div>
		</ErrorBoundary>
	);
};

export default Tab8;
