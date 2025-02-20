import { ErrorBoundary } from 'react-error-boundary';
import Playground from './playground';
import { ThemeProvider, ThemeSetters } from './contexts/theme';
import PrintError from './components/error';

function App() {
  return (
    <ErrorBoundary FallbackComponent={PrintError}>
      <ThemeProvider>
        <ThemeSetters />
        <Playground />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
