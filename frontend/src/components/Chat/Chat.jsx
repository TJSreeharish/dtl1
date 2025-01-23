import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  // Handle user input change
  const handleInputChange = (event) => {
    setUserMessage(event.target.value);
  };

  // Send message to the AI API
  const sendMessage = async (message) => {
    try {
      const response = await axios.post('http://localhost:3001/home', {
        prompt: message, // or modify based on your API's request format
        max_tokens: 150,
      });

      // Add AI's response to chat history
      setChatHistory((prev) => [
        ...prev,
        { sender: 'user', text: message },
        { sender: 'ai', text: response.data.text }, // Adjust based on API response format
      ]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  // Handle form submit (send message)
  const handleSubmit = (event) => {
    event.preventDefault();
    if (userMessage.trim()) {
      sendMessage(userMessage);
      setUserMessage('');
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chat-history">
        {chatHistory.map((msg, index) => (
          <div key={index} className={msg.sender}>
            <span>{msg.text}</span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userMessage}
          onChange={handleInputChange}
          placeholder="Ask me anything..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;
