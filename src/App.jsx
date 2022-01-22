import { useState, useContext } from 'react';
import Header from './Header';
import FetchToDoList from './FetchToDoList';
import ThemeToggle from './ThemeToggle';
import CompletedToggle from './CompletedToggle';
import ThemeProvider, { ThemeContext } from './themeContext';
import styled from '@emotion/styled/macro';

const Container = styled.div`
  position: relative;
  width: 600px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  background: ${({ theme }) => theme.primaryColor};
`;

const ThemedApp = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

const App = () => {
  const [showCompleted, setShowCompleted] = useState(true);
  const { theme } = useContext(ThemeContext);

  return (
    <Container theme={theme}>
      <Header text="TODO LIST" />
      <ThemeToggle />
      <CompletedToggle
        text="Show Completed"
        initialState={showCompleted}
        onChange={setShowCompleted}
      />
      <FetchToDoList url="./todos.json" showCompleted={showCompleted} />
    </Container>
  );
};

export default ThemedApp;
