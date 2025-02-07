import { tm } from '@/utils/tw-merge';
import { Component, ReactNode } from 'react';

interface Props {
  count?: number;
  step?: number;
  min?: number;
  max?: number;
}

interface State {
  count: number;
}

class Counter extends Component<Props, State> {
  static defaultProps: Required<Props> = {
    count: 0,
    step: 1,
    min: 0,
    max: 10,
  };
  clearIntervalId: string | number | Timeout | undefined;

  constructor(props: Props) {
    super(props);

    this.state = {
      count: props.count ?? Counter.defaultProps.count,
    };
  }

  render(): ReactNode {
    return (
      <div className={tm('flex flex-col gap-3 items-start')}>
        <h2>카운터</h2>
        <output>{this.state.count}</output>
        <div className={tm('flex gap-2')}>
          <button type="button" onClick={this.handleDecrease}>
            -{this.props.step}
          </button>
          <button type="button" onClick={this.handleIncrease}>
            +{this.props.step}
          </button>
        </div>
      </div>
    );
  }

  componentDidMount(): void {
    this.clearIntervalId = setInterval(() => {
      console.log(new Date().toLocaleTimeString());
    }, 1000);
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
    snapshot?: any
  ): void {}

  componentWillUnmount(): void {
    console.log('counter 언마운트');

    clearInterval(this.clearIntervalId);
  }

  handleDecrease = () => {
    // console.log('감소', this);
    const { step } = this.props;
    this.setState({
      count: this.state.count - step,
    });
  };
  handleIncrease = () => {
    const { step } = this.props;
    this.setState({
      count: this.state.count + step,
    });
  };
}

export default Counter;
