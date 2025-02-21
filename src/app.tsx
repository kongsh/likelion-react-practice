import { ErrorBoundary } from 'react-error-boundary';
import Playground from './playground';
import { ThemeProvider, ThemeSetters } from './contexts/theme';
import PrintError from './components/error';
import { useCountStore } from './stores/count';

function App() {
  const count = useCountStore(({ count }) => count);

  return (
    <ErrorBoundary FallbackComponent={PrintError}>
      <ThemeProvider>
        <ThemeSetters />
        <output className="block text-6xl pl-4 mt-4">{count}</output>
        <Playground />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
