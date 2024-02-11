import Router from "@routes/Router";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
