import CountUp from "react-countup";
const Counter = ({ value, title }) => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 bg-[rgba(40,233,140,0.05)] rounded-lg py-3">
            <div className="text-secondary text-[2rem]">
                <CountUp
                    end={value}
                    duration={1}
                    delay={0.8}
                    enableScrollSpy={true}
                />
                <span className="text-secondary">+</span>
            </div>
            <span className="text-[1rem] text-secondary-text font-[400]">
                {title}
            </span>
        </div>
    );
};

export default Counter;
