import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "@/routes/Router";
import ApiErrorBoundary from "./components/common/ApiErrorBoundary";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto",
  },
  palette: {
    primary: {
      main: "#2196F3",
    },
    secondary: {
      main: "#000000",
    },
  },
});

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ApiErrorBoundary>
          <RouterProvider router={Router} fallbackElement={null} />
          <ReactQueryDevtools />
          <ToastContainer />
        </ApiErrorBoundary>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
