import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Route, Routes } from 'react-router';
import { ThemeProvider, ThemeSetters } from './contexts/theme';
import PrintError from './components/error';
import Playground from './pages/playground/page';
import HomePage from './pages/home/page';
import SignInPage from './pages/sign-in';
import SignUpPage from './pages/sign-up';
import AuthLayout from './layouts/auth/layout';
import DashboardPage from './pages/dashboard/page';

function App() {
  return (
    <ErrorBoundary FallbackComponent={PrintError}>
      <ThemeProvider>
        <ThemeSetters />
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/playground" element={<Playground />} />

            <Route path="/dashboard">
              <Route element={<AuthLayout />}>
                <Route index element={<DashboardPage />} />
                <Route path="signin" element={<SignInPage />} />
                <Route path="signup" element={<SignUpPage />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
