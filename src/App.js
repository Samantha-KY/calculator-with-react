import useCalculator from "./hooks/useCalculator";
import { NumericFormat } from "react-number-format";
import DATA from "./constantData";
import Buttons from "./components/Button";

function App() {
  const {
    input,
    inputNum,
    reset,
    minusPlus,
    equals,
    operatorType,
    percent,
    preState,
  } = useCalculator();

  return (
    <div className="container">
      <div className="wrapper">
        <div className="calculation">
          {input !== "" || input === "0" ? (
            <NumericFormat
              value={input}
              displayType={"text"}
              thousandSeparator={true}
            />
          ) : (
            <NumericFormat
              value={preState}
              displayType={"text"}
              thousandSeparator={true}
            />
          )}
        </div>
        {DATA.map((_data, index) => {
          return (
            <Buttons
              operatorType={operatorType}
              minusPlus={minusPlus}
              equals={equals}
              percent={percent}
              reset={reset}
              inputNum={inputNum}
              key={index}
            >
              {_data}
            </Buttons>
          );
        })}
      </div>
    </div>
  );
}

export default App;
