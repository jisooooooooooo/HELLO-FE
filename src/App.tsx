import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router-dom';

import { router } from './shared/routes/router';
import { queryClient } from './common/utils/queryClient';

import * as styles from '@/styles/global.css.ts';

function App() {
  return (
    <div className={styles.rootContainer}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
      </QueryClientProvider>
    </div>
  );
}

export default App;
