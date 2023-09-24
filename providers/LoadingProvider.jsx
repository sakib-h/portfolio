'use client';
import { useState, useEffect } from 'react';
const LoadingProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setLoading(false);
	}, []);

	return (
		<>
			{loading ? (
				<div className="min-h-screen flex justify-center items-center">
					<span className="loader" />
				</div>
			) : (
				children
			)}
		</>
	);
};
export default LoadingProvider;