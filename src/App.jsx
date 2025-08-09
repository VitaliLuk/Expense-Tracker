import { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Income from './pages/Income';
import Expense from './pages/Expense';
import Login from './pages/Login';
import AllTransactions from './pages/AllTransactions';
import NotFound from './pages/NotFound';
import { UserContext } from './context/UserContext';
import Navbar from './components/Navbar';

const ProtectedLayout = () => {
  const location = useLocation();

  let pageClass = "home-container";
  if (location.pathname.startsWith("/income")) pageClass = "income-page";
  if (location.pathname.startsWith("/expense")) pageClass = "expense-page";
  if (location.pathname.startsWith("/transactions")) pageClass = "edit-page";

  return (
    <div className={pageClass}>
      <Navbar />
      <Outlet />
    </div>
  );
};

const App = () => {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        {isLoggedIn ? (
          <Route element={<ProtectedLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/income" element={<Income />} />
            <Route path="/expense" element={<Expense />} />
            <Route path="/transactions" element={<AllTransactions />} />
          </Route>
        ) : (
          <>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/income" element={<Navigate to="/login" />} />
            <Route path="/expense" element={<Navigate to="/login" />} />
            <Route path="/transactions" element={<Navigate to="/login" />} />
          </>
        )}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

