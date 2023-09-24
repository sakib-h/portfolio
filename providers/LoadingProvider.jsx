'use client';
import { useState, useEffect } from 'react';
import LoadingScreen from '@components/LoadingScreen';
const LoadingProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		window.addEventListener('load', () => {
			setLoading(false);
		});
	}, []);

	return <>{loading ? <LoadingScreen /> : children}</>;
};
export default LoadingProvider;
