import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, signIn } from "./action";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="container mt-5">
      <div className=" d-flex align-items-center justify-content-center">
        <div style={{ fontWeight: "800", fontSize: "3rem" }}>
          Increment/Decrement Counter
        </div>
      </div>

      <div className="d-flex justify-content-center mt-5">
        <div
          className="input-group mb-3"
          style={{ width: "8rem", fontWeight: "800", fontSize: "1.5rem" }}
        >
          <button
            className="btn btn-outline-secondary"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ width: "3rem" }}
          >
            {counter}
          </div>
          <button
            className="btn btn-outline-secondary"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
        </div>
      </div>
      <hr style={{ height: "0.2em" }}></hr>

      <div className=" d-flex align-items-center justify-content-center">
        <div style={{ fontWeight: "800", fontSize: "3rem" }}>Toggle Button</div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <button
          className="btn btn-outline-success "
          onClick={() => dispatch(signIn())}
        >
          {isLogged ? "Hide" : "Show"}
        </button>
      </div>

      <p
        className="text-center mt-3"
        style={{ fontWeight: "400", fontSize: "1.2em" }}
      >
        {isLogged
          ? "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nihil hic delectus excepturi ipsam reprehenderit iusto rem, quam, repellendus accusantium culpa reiciendis sit dolorum aut aperiam a architecto. Fuga, sit."
          : ""}
      </p>
    </div>
  );
}

export default App;
