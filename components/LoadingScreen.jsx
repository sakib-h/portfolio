import HashLoader from 'react-spinners/HashLoader';
const LoadingScreen = () => {
	return (
		<HashLoader
			color="#999999"
			loading
			size={30}
			speedMultiplier={0.8}
		/>
	);
};

export default LoadingScreen;
