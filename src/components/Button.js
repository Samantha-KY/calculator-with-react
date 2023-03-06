const Buttons = ({ children, reset, percent, minusPlus, operatorType, equals, inputNum }) => {
    const checkButtonType = (e) => {
        console.log(e.target.innerText)
        switch (e.target.innerText) {
            case "AC":
                reset()
                break;
            case "%":
                percent()
                break;
            case "+/-":
                minusPlus()
                break;
            case "/":
                operatorType(e)
                break;
            case "+":
                operatorType(e)
                break;
            case "-":
                operatorType(e)
                break;
            case "X":
                operatorType(e)
                break;
            case "=":
                equals(e)
                break;
            default:
                break;
        }
    }
    return (
        <div
            className={
                typeof children === "number"
                    ? `btn ${children === 0 && "zero"}`
                    : "btn orange"
            }
            onClick={(e) => {
                (typeof children === "number") ? inputNum(e) : checkButtonType(e);
            }}
        >
            {children}
        </div>
    );
};

export default Buttons