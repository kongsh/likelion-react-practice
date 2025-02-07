import { Component, ErrorInfo } from 'react';
import ErrorFallbackUI from './fallback-ui';

interface Props {
  FallbackComponent?: typeof ErrorFallbackUI;
  children: React.ReactNode;
}

interface State {
  error: null | Error;
  errorInfo: null | ErrorInfo;
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    error: null,
    errorInfo: null,
    hasError: false,
  };
  static FallbackUI: Props['FallbackComponent'];

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({
      hasError: true,
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      const { error, errorInfo } = this.state;
      const { FallbackComponent } = this.props;

      return FallbackComponent ? (
        <FallbackComponent error={error} errorInfo={errorInfo} />
      ) : (
        <ErrorBoundary.FallbackUI error={error} errorInfo={errorInfo} />
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
