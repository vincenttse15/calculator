import { RiDivideFill, RiCloseFill } from 'react-icons/ri';
import { CgMathMinus, CgMathEqual, CgMathPlus } from 'react-icons/cg';
import { FaSquareRootAlt } from 'react-icons/fa';
import { Evaluator } from '../../evaluator/evaluator';
import './Buttons.css';

const Buttons = (props) => {
  const {
    setExpression,
    setPreviousExpression,
    expression
  } = props;

  // evaluate expression
  function evaluate() {
    const evaluator = expression !== '' ? new Evaluator(expression) : new Evaluator("0");
    let result = evaluator.evaluate();
    if (result === "Infinity") {
      setPreviousExpression('Infinity');
      setExpression('');
    }
    else if (result !== null) {
      setPreviousExpression(expression);
      setExpression(result);
    }
    else {
      setPreviousExpression("Invalid expression!");
      setExpression('');
    }
  }

  return (
    <div className="buttons-container">
      <div className="row-container">
        <button className="button operators" onClick={() => setExpression(expression + "^")}>
          X
          <span className="superscript">y</span>
        </button>
        <button className="button operators" onClick={() => setExpression("sqrt(" + expression + ")")}
        >
          <FaSquareRootAlt className="icon" />
        </button>
      </div>
      <div className="row-container">
        <button className="button operators" onClick={() => setExpression(expression + "(")}>(</button>
        <button className="button operators" onClick={() => setExpression(expression + ")")}>)</button>
        <button className="button operators"
          onClick={() => {
            setExpression('');
            setPreviousExpression('');
          }
          }
        >
          AC
        </button>
        <button className="button operators"
          onClick={() => {
            if (expression.length > 0) setExpression(expression.slice(0, expression.length - 1));
          }
          }
        >
          DEL
        </button>
      </div>

      <div className="row-container">
        <button className="button numbers" onClick={() => setExpression(expression + "7")}>7</button>
        <button className="button numbers" onClick={() => setExpression(expression + "8")}>8</button>
        <button className="button numbers" onClick={() => setExpression(expression + "9")}>9</button>
        <button className="button operators" onClick={() => setExpression(expression + "/")}>
          <RiDivideFill className="icon" />
        </button>
      </div>

      <div className="row-container">
        <button className="button numbers" onClick={() => setExpression(expression + "4")}>4</button>
        <button className="button numbers" onClick={() => setExpression(expression + "5")}>5</button>
        <button className="button numbers" onClick={() => setExpression(expression + "6")}>6</button>
        <button className="button operators" onClick={() => setExpression(expression + "*")}>
          <RiCloseFill className="icon" />
        </button>
      </div>

      <div className="row-container">
        <button className="button numbers" onClick={() => setExpression(expression + "1")}>1</button>
        <button className="button numbers" onClick={() => setExpression(expression + "2")}>2</button>
        <button className="button numbers" onClick={() => setExpression(expression + "3")}>3</button>
        <button className="button operators" onClick={() => setExpression(expression + "-")}>
          <CgMathMinus className="icon" />
        </button>
      </div>

      <div className="row-container">
        <button className="button numbers" onClick={() => setExpression(expression + "0")}>0</button>
        <button className="button numbers" onClick={() => setExpression(expression + ".")}>.</button>
        <button className="button equal"
          onClick={() => evaluate()}
        >
          <CgMathEqual className="icon" />
        </button>
        <button className="button operators" onClick={() => setExpression(expression + "+")}>
          <CgMathPlus className="icon" />
        </button>
      </div>
    </div >
  )
}

export default Buttons;