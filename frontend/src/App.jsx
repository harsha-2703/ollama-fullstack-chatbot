import { useState } from 'react';
import './App.css';
import axios from 'axios';
import MessageBox from './components/MessageBox';

function App() {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([
    { text: 'Hi, this is June', sender: 'bot' },
    { text: 'Your personal healthcare companion', sender: 'bot' },
  ]);
  const [error, setError] = useState(null);

  const handleSend = async (e) => {
    if (e.key === 'Enter' && query.trim()) {
      const userMessage = { text: query, sender: 'user' };
      setMessages((prev) => [...prev, userMessage]);

      try {
        const res = await axios.post('http://localhost:8000/chat', { query });
        const botMessage = { text: res.data.response, sender: 'bot' };
        setMessages((prev) => [...prev, botMessage]);
      } catch (err) {
        setError(err.message || 'Something went wrong.');
        setMessages((prev) => [...prev, { text: 'Error: Could not reach server.', sender: 'bot' }]);
      }

      setQuery('');
    }
  };

  return (
    <div className="flex flex-col justify-between h-screen p-4">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-center pb-4">Chatbot using Ollama</h1>
      </div>

      {/* Chat messages */}
      <div className="flex-1 flex flex-col justify-start overflow-y-auto gap-2">
        {messages.map((msg, idx) => (
          <div key={idx} className={msg.sender === 'user' ? 'self-end' : 'self-start'}>
            <MessageBox text={msg.text} sender={msg.sender} />
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex justify-center mt-4">
        <input
          className="border border-black px-4 py-2 w-full max-w-md rounded-xl"
          type="text"
          placeholder="Enter your message..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleSend}
        />
      </div>
    </div>
  );
}

export default App;
