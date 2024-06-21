import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import Router from "@/routes/Router";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto",
  },
});

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={Router} fallbackElement={null} />
        <ReactQueryDevtools />
        <ToastContainer />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
