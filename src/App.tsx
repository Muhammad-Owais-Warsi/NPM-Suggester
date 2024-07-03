import {NextUIProvider} from "@nextui-org/react";
import Main from "./components/main";
import { Toaster } from "sonner";

function App() {


  return (
    <NextUIProvider>
      <Toaster richColors position="top-center"/>
      <Main/>
    </NextUIProvider>
  )
}

export default App
