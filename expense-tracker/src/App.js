import Expenses from "./components/expenses/Expenses";
import expenses from "./data/expenses";

const App = () => {
  return (
    <>
      <Expenses expenses={expenses} />
    </>
  );
};
export default App;
