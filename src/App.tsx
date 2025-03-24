import { useState } from 'react';
import { AuthScreen } from './components/AuthScreen';
import { ChatInterface } from './components/ChatInterface';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = async (email: string, password: string) => {
    // Implement your authentication logic here
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsAuthenticated(true);
  };

  return isAuthenticated ? (
    <ChatInterface />
  ) : (
    <AuthScreen onLogin={handleLogin} />
  );
}

export default App;