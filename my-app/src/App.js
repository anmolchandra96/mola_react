import './App.css';
import QuestionsPage from './questions-page';
import Header from './header';

function App() {
  return (
    <div className="App">
      <Header />
      <QuestionsPage question="Sample Question" />
    </div>
  );
}

export default App;
