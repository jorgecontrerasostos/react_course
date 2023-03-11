import Expenses from "./components/Expenses";
import expenses from "./data/expenses";

const App = () => {
  return (
    <div>
      <Expenses expenses={expenses} />
    </div>
  );
};
export default App;
