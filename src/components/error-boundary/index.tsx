import { tm } from '@/utils/tw-merge';
import { Component, ErrorInfo } from 'react';

interface Props {
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

  // static getDerivedStateFromError(error: Error) {
  //   return {
  //     hasError: true,
  //     error,
  //   };
  // }

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

      return (
        <div
          role="alert"
          lang="en"
          className={tm(
            'overflow-x-scroll',
            'flex flex-col gap-2',
            'border-4 border-red-600',
            ' text-red-600',
            'p-5'
          )}
        >
          <h2 className={tm('text-xl font-semibold')}>
            {error?.name} 오류 발생
          </h2>
          <p className={tm('text-red-700 font-normal')}>{error?.message}</p>
          <pre className="-ml-8 text-xs leading-[2]">
            {errorInfo?.componentStack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
