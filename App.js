import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navigator from "./src/navigation";
import ToastManager from "toastify-react-native";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigator />
      <ToastManager />
    </QueryClientProvider>
  );
};

export default App;
