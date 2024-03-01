/* eslint-disable no-warning-comments */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ApiErrorBoundary from "@/components/layout/ApiErrorBoundary";
import Router from "@/routes/Router";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Todo: Global loading component */}
      <ApiErrorBoundary>
        <RouterProvider router={Router} fallbackElement={null} />
      </ApiErrorBoundary>
      <ReactQueryDevtools />
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
