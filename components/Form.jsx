const Form = () => {
	return (
		<form className="grid grid-cols-1 lg:grid-cols-2 gap-10">
			<div className="flex flex-row">
				<label
					className="input-label"
					for="full_name">
					Full Name
				</label>
				<input
					type="text"
					name="Full-Name"
					id="full_name"
					placeholder="Full Name"
					className="input-box"
				/>
			</div>
		</form>
	);
};

export default Form;
