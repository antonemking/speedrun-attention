import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuestTimeline from './components/QuestTimeline';
import ChallengePage from './components/ChallengePage';
import LandingLayout from './components/LandingLayout';
import DefaultLayout from './components/DefaultLayout';

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes with LandingLayout */}
        <Route
          path="/"
          element={
            <LandingLayout>
              <QuestTimeline />
            </LandingLayout>
          }
        />

        {/* Routes with DefaultLayout */}
        <Route
          path="/challenge/:id"
          element={
            <DefaultLayout>
              <ChallengePage />
            </DefaultLayout>
          }
        />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
