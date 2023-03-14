import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";
import expenses from "./data/expenses";

const App = () => {
  return (
    <>
      <NewExpense />
      <Expenses expenses={expenses} />
    </>
  );
};
export default App;
