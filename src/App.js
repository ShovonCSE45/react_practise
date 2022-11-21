import logo from './logo.svg';
import './App.css';

import Chield from './Component/State_Lifting/Chield';
import SignUp_forming from './Form/SignUP_forming';
import SignUP_Using_yup from './Form/SiginUp_Using_yup';
import { Home } from './Component/State_Lifting/Home';


function App() {
  const taskin="I am taskin, I read in class two."
  const handleChild = (childData) => {
    console.log(childData);
  }
  return (
    <div>
     <h1>Hello React</h1>
     <Chield taskin= {taskin} onChildData={handleChild}/>
     <SignUp_forming />
     <SignUP_Using_yup />
     <Home />
     
     
    </div>
  );
}

export default App;
