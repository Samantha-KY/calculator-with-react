import { useEffect, useState } from 'react'

function useCalculator() {
    const [preState, setPreState] = useState("");
    const [curState, setCurState] = useState("");
    const [input, setInput] = useState("0");
    const [operator, setOperator] = useState(null);
    const [total, setTotal] = useState(false);

    const inputNum = (e) => {
        if (curState.includes(".") && e.target.innerText === ".") return;

        if (total) {
            setPreState("");
        }

        curState
            ? setCurState((pre) => pre + e.target.innerText)
            : setCurState(e.target.innerText);
        setTotal(false);
    };

    useEffect(() => {
        setInput(curState);
    }, [curState]);

    useEffect(() => {
        setInput("0");
    }, []);

    const operatorType = (e) => {
        setTotal(false);
        setOperator(e.target.innerText);
        if (curState === "") return;
        if (preState !== "") {
            equals();
        } else {
            setPreState(curState);
            setCurState("");
        }
    };

    const equals = (e) => {
        if (e?.target.innerText === "=") {
            setTotal(true);
        }
        let cal;
        switch (operator) {
            case "/":
                cal = String(parseFloat(preState) / parseFloat(curState));
                break;

            case "+":
                cal = String(parseFloat(preState) + parseFloat(curState));
                break;
            case "X":
                cal = String(parseFloat(preState) * parseFloat(curState));
                break;
            case "-":
                cal = String(parseFloat(preState) - parseFloat(curState));
                break;
            default:
                return;
        }
        setInput("");
        setPreState(cal);
        setCurState("");
    };

    const minusPlus = () => {
        if (curState.charAt(0) === "-") {
            setCurState(curState.substring(1));
        } else {
            setCurState("-" + curState);
        }
    };

    const percent = () => {
        preState
            ? setCurState(String((parseFloat(curState) / 100) * preState))
            : setCurState(String(parseFloat(curState) / 100));
    };

    const reset = () => {
        setPreState("");
        setCurState("");
        setInput("0");
    };
    return {
        reset, percent, minusPlus, equals, operatorType, input, inputNum, preState
    }
}

export default useCalculator