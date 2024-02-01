import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Router from "@routes/Router";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Todo: Global loading component */}
      <RouterProvider router={Router} fallbackElement={null} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
