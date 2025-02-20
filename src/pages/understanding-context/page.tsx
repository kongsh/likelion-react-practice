import Section from '@/components/section';
import Heading from '@/components/heading';
import Box from './components/box';
import { ErrorBoundary } from 'react-error-boundary';
import PrintError from '@/components/error';

function UnderstandingContextPage() {
  return (
    <Section level={2} className="flex flex-col gap-2">
      <Heading>컨텍스트 이해</Heading>
      <ErrorBoundary FallbackComponent={PrintError}>
        <Box>
          <Box>
            <Box level={2}>
              <Box>
                <Box>Box Level</Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </ErrorBoundary>
    </Section>
  );
}

export default UnderstandingContextPage;
