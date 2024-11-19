import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FormProvider } from './context/FormContext';
import IntroPage from './pages/IntroPage';
import Step1 from './pages/Step1';
import Step2 from './pages/Step2';
import Step3 from './pages/Step3';
import Step4 from './pages/Step4';
import ReviewPage from './pages/ReviewPage';
import ConfirmationPage from './pages/ConfirmationPage';

const validZipCodes: string[] = [
    "02108", "02109", "02110", "02111", "02113", "02114", 
    "02115", "02116", "02118", "02119", "02120", "02121", 
    "02122", "02124", "02125", "02126", "02127", "02128", 
    "02129", "02130", "02131", "02132", "02134", "02135", 
    "02136", "02163", "02199", "02210", "02215"]

const App: React.FC = () => (
  <FormProvider>
    <Router>
      <Switch>
        <Route exact path="/" component={IntroPage} />
        <Route
          path="/step1"
          render={(props) => <Step1 {...props} validZipCodes={validZipCodes} />}
        />
        <Route path="/step2" component={Step2} />
        <Route path="/step3" component={Step3} />
        <Route path="/step4" component={Step4} />
        <Route path="/review" component={ReviewPage} />
        <Route path="/confirmation" component={ConfirmationPage} />
      </Switch>
    </Router>
  </FormProvider>
);

export default App;