import logo from './logo.svg';
import './App.css';

import Chield from './Component/State_Lifting/Chield';
import SignUp_forming from './Form/SignUP_forming';

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
     
     
    </div>
  );
}

export default App;
