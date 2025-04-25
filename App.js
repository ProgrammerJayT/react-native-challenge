import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ToastManager from "toastify-react-native";
import { AppProvider } from "./src/context/app";
import { ScreenHeaderProvider } from "./src/context/screen/header";
import Navigator from "./src/navigation";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <ScreenHeaderProvider>
          <Navigator />
          <ToastManager />
        </ScreenHeaderProvider>
      </AppProvider>
    </QueryClientProvider>
  );
};

export default App;
