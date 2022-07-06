
import './App.css';
import ToolTip from "./components/ToolTip";

function App() {
  return (
    <div className="App">
        <ToolTip position={"left"}>Left</ToolTip>
        <ToolTip position={"bottom"}>Bottom</ToolTip>
        <ToolTip position={"top"}>Top</ToolTip>
        <ToolTip position={"right"}>Right</ToolTip>
    </div>
  );
}

export default App;
