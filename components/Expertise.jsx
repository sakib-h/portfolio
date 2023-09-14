const Expertise = ({ title, data }) => {

	return (
		<div className="mb-4">
			<h6 className="mb-2 text-[16px]">{title}</h6>
			<div className="flex flex-wrap">
				{data.map((item, index) => (
					<div
						key={index}
						className="flex items-center justify-between bg-[rgba(40,233,140,0.1)] text-white rounded-md px-4 py-2 mr-4 mb-4 ">
						<p className="text-[14px]">{item}</p>
					</div>
				))}
			</div>
		</div>
	);
};
export default Expertise;
