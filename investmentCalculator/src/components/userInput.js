export default function InputUser({ userInput, onSelectChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>initial investment</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            onChange={(event) =>
              onSelectChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>annual investment</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            onChange={(event) =>
              onSelectChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>expected return</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={(event) =>
              onSelectChange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>duration</label>
          <input
            type="number"
            value={userInput.duration}
            onChange={(event) => onSelectChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
