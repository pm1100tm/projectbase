import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import SearchHeader from './component/SearchHeader';

import { YoutubeApiProvider } from './context/YoutubeAPIContext';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <SearchHeader />
      <QueryClientProvider client={queryClient}>
        <YoutubeApiProvider>
          <Outlet />
        </YoutubeApiProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
