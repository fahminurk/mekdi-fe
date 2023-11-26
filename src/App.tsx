import { Routes, Route } from "react-router-dom";
import PublicLayout from "./_public/PublicLayout";
import { LoginPage } from "./_public/pages";
import "./globals.css";
import { Toaster } from "sonner";
function App() {
  return (
    <main>
      <Routes>
        {/* public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>

        {/* private Routes */}
      </Routes>
      <Toaster />
    </main>
  );
}

export default App;
