import Layout from './components/Layout'

function App(props) {
  return (
    <div className="App">
    <Layout options={props.options}/>
    </div>
  );
}

export default App;
