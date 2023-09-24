const Form = () => {
	return (
		<form>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
				<div className="flex flex-col justify-start gap-2">
					<div className="flex items-center gap-1">
						<label htmlFor="full_name">FULL NAME</label>
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
						<label htmlFor="email">EMAIL</label>
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
						<label htmlFor="phone">PHONE</label>
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
						<label htmlFor="text">SUBJECT</label>
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
						<label htmlFor="budget">YOUR BUDGET</label>
						<span className="text-[12px] text-secondary-text">
							(Optional)
						</span>
					</div>
					<input
						type="number"
						name="budget"
						id="budget"
						min="0"
						placeholder="A range Budget htmlFor your Project"
						className="input-box"
					/>
				</div>
			</div>

			<div className="flex flex-col justify-start gap-2 my-[35px]">
				<div className="flex items-center gap-1">
					<label htmlFor="message">YOUR MESSAGE</label>
					<span className="text-[12px] text-secondary-text">
						(Optional)
					</span>
				</div>
				<textarea
					name="message"
					id="message"
					placeholder="Write your message here ..."
					className="input-box h-[150px]"
					wrap="hard"
					maxLength="1200"
				/>
			</div>
			<hr className="border-border-color my-20" />
			<button className="bg-secondary hover:bg-transparent flex justify-center items-center text-alternative hover:text-secondary py-2 px-10 text-[16px]  rounded-[30px] border-[2px] border-secondary duration-300 ">
				SEND MESSAGE
			</button>
		</form>
	);
};

export default Form;
