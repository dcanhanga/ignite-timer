import { Route, Routes } from 'react-router-dom';

import { History } from '@/pages/history';
import { Home } from '@/pages/home';
export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
};
