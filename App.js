import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navigator from "./src/navigation";
import ToastManager from "toastify-react-native";
import { AppProvider } from "./src/context/app";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <Navigator />
        <ToastManager />
      </AppProvider>
    </QueryClientProvider>
  );
};

export default App;
