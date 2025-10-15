import { useState, useEffect } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { LoginScreen } from './components/LoginScreen';
import { HomeScreen } from './components/HomeScreen';
import { EventDetails } from './components/EventDetails';
import { UserProfile } from './components/UserProfile';
import { Community } from './components/Community';
import { Ranking } from './components/Ranking';

type Screen = 'splash' | 'login' | 'home' | 'event' | 'profile' | 'community' | 'ranking';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [selectedEventId, setSelectedEventId] = useState<number>(1);

  const handleNavigate = (screen: string, eventId?: number) => {
    setCurrentScreen(screen as Screen);
    if (eventId) {
      setSelectedEventId(eventId);
    }
  };

  const handleSplashComplete = () => {
    setCurrentScreen('login');
  };

  const handleLogin = () => {
    setCurrentScreen('home');
  };

  const handleBack = () => {
    setCurrentScreen('home');
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {currentScreen === 'splash' && (
        <SplashScreen onComplete={handleSplashComplete} />
      )}
      {currentScreen === 'login' && (
        <LoginScreen onLogin={handleLogin} />
      )}
      {currentScreen === 'home' && (
        <HomeScreen onNavigate={handleNavigate} />
      )}
      {currentScreen === 'event' && (
        <EventDetails eventId={selectedEventId} onBack={handleBack} />
      )}
      {currentScreen === 'profile' && (
        <UserProfile onBack={handleBack} />
      )}
      {currentScreen === 'community' && (
        <Community onBack={handleBack} />
      )}
      {currentScreen === 'ranking' && (
        <Ranking onBack={handleBack} />
      )}
    </div>
  );
}
