import SettingsSelector from "./components/settings/SettingsSelector";
import Modal from "react-modal";
import './assets/style.scss';

Modal.setAppElement("#root");

function App() {
  return <SettingsSelector />;
}

export default App;
