import ReloadPrompt from "@/components/ReloadPrompt";
import MainLayout from "./components/mainLayout";
import Wheel from "@/components/wheel";

const App: React.FC = () => {
  return <>
    <MainLayout>
      <Wheel />
    </MainLayout>
    <ReloadPrompt />
  </>;
}

export default App;
