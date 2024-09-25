import './App.css';
import Header from "./components/Header/Header";
import TeachingSection from "./components/TeachingSection";
import DifferencesSection from "./components/DifferencesSection";
import IntroSection from "./components/IntroSection";
import TabsSection from "./components/TabsSection";
import {useState} from "react";
import FeedbackSection from "./components/FeedbackSection";
import EffectSection from "./components/EffectSection";


function App() {
  const [visible, setVisible] = useState(true);
  const [tab, setTab] = useState('effect')



  return (
    <>
      {visible && <Header/>}
      <main>
        <IntroSection/>
        <TabsSection active={tab} onChange={(current) => setTab(current)}/>

        {tab === 'main' &&
          (<>
            <TeachingSection/>
            <DifferencesSection/>
          </>)}

        {tab === 'feedback' && <FeedbackSection/>}

        {tab === 'effect' && <EffectSection/>}
      </main>
    </>
  );
}

export default App;
