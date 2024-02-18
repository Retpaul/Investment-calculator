
import "../index.css";
import Input from "../UI/Input";

export default function UserForm({onChangeInput,userInput}) {
 
  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label>initial investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(e) => {
              onChangeInput("initialInvestment", e.target.value);
            }}
          />
        </p>
        <p>
          <label>annual investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(e) => {
              onChangeInput("annualInvestment", e.target.value);
            }}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>expected return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(e) => {
              onChangeInput("expectedReturn", e.target.value);
            }}
          />
        </p>
        <p>
          <label>duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(e) => {
              onChangeInput("duration", e.target.value);
            }}
          />
        </p>
      </div>
    </div>
  );
}
