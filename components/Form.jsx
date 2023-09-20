const Form = () => {
	return (
		<form className="grid grid-cols-1 lg:grid-cols-2 gap-10">
			<div className="flex flex-col justify-start gap-2">
				<div className="flex items-center gap-1">
					<label for="full_name">FULL NAME</label>
					<sup className="text-[12px] text-[#fc4545]">*</sup>
				</div>
				<input
					type="text"
					name="Full-Name"
					id="full_name"
					placeholder="Full Name"
					className="input-box"
					required
				/>
			</div>

			<div className="flex flex-col justify-start gap-2">
				<div className="flex items-center gap-1">
					<label for="email">EMAIL</label>
					<sup className="text-[12px] text-[#fc4545]">*</sup>
				</div>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Enter Your Email"
					className="input-box"
					required
				/>
			</div>

			<div className="flex flex-col justify-start gap-2">
				<div className="flex items-center gap-1">
					<label for="phone">PHONE</label>
					<span className="text-[12px] text-secondary-text">
						(Optional)
					</span>
				</div>
				<input
					type="text"
					name="phone"
					id="phone"
					placeholder="Your Phone Number"
					className="input-box"
				/>
			</div>

			<div className="flex flex-col justify-start gap-2">
				<div className="flex items-center gap-1">
					<label for="text">SUBJECT</label>
					<sup className="text-[12px] text-[#fc4545]">*</sup>
				</div>
				<input
					type="text"
					name="subject"
					id="subject"
					placeholder="Subject"
					className="input-box"
					required
				/>
			</div>

			<div className="flex flex-col justify-start gap-2">
				<div className="flex items-center gap-1">
					<label for="budget">YOUR BUDGET $</label>
					<span className="text-[12px] text-secondary-text">
						(Optional)
					</span>
				</div>
				<input
					type="number"
					name="budget"
					id="budget"
					min="0"
					placeholder="A range Budget for your Project"
					className="input-box"
				/>
			</div>

			<div className="flex flex-col justify-start gap-2">
				<div className="flex items-center gap-1">
					<label for="message">YOUR MESSAGE</label>
					<span className="text-[12px] text-secondary-text">
						(Optional)
					</span>
				</div>
				<textarea
					name="message"
					id="message"
					placeholder="Write your message here ..."
					className="input-box"
					wrap="hard"
					maxlength="1200"
				/>
			</div>
		</form>
	);
};

export default Form;
