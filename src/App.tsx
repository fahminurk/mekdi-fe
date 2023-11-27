import "./globals.css";
import { Routes, Route } from "react-router-dom";
import PublicLayout from "./_public/PublicLayout";
import { HomePage, LoginPage } from "./_public/pages";
import { Toaster } from "sonner";
import PrivateLayout from "./_private/PrivateLayout";
import { DashboardPage, ProductPage, UserPage } from "./_private/pages";
function App() {
  return (
    <main>
      <Routes>
        {/* public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
        </Route>

        {/* private Routes */}
        <Route element={<PrivateLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/user" element={<UserPage />} />
        </Route>
      </Routes>

      <Toaster />
    </main>
  );
}

export default App;
