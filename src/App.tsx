import FormControlled from './components/FormControlled/index.tsx';
import FormUncontrolled from './components/FormUncontrolled/index.tsx';

function App() {

  return (
    <div className="wrapper">
      <div className="item">
        <h1>Uncontrolled Components</h1>
        <div className="form-background">
          <div className="container">
            <FormUncontrolled/>
          </div>
        </div>
      </div>
      <div className="item">
        <h1>Controlled Components</h1>
        <div className="form-background">
          <div className="container">
            <FormControlled/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
