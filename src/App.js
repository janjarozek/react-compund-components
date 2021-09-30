import './styles/App.scss';

import Chat from './components/Chat';

function App() {
  return (
    <div className="App">
      <Chat>
        <Chat.Header />
        <Chat.Input />
        <Chat.Button />
        <Chat.MessageList />
      </Chat>
    </div>
  );
}

export default App;
