import React, { useState, useEffect } from 'react';
import { Lock, Heart } from 'lucide-react';

const TGTimeWidget: React.FC = () => {
  const [daysSince, setDaysSince] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Start date: March 30, 2025
  const startDate = new Date('2025-04-22');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now);
      
      // Calculate days since start date
      const timeDiff = now.getTime() - startDate.getTime();
      const days = Math.floor(timeDiff / (1000 * 3600 * 24));
      setDaysSince(Math.max(0, days)); // Don't show negative days
    };

    // Update immediately
    updateTime();

    // Update every minute
    const timer = setInterval(updateTime, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-4 right-4 z-30">
      <div className="bg-pink-50/90 backdrop-blur-lg rounded-2xl shadow-lg border-2 border-pink-200/50 p-4 min-w-64">
        {/* Header with icons */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-pink-300 to-rose-300 rounded-full flex items-center justify-center border border-pink-400/50">
              <Lock className="w-4 h-4 text-pink-700" />
            </div>
            <div className="w-8 h-8 bg-gradient-to-br from-rose-300 to-pink-400 rounded-full flex items-center justify-center animate-pulse border border-pink-400/50">
              <Heart className="w-4 h-4 text-pink-700" />
            </div>
          </div>
          <div className="text-xs text-gray-500 font-mono">
            {currentTime.toLocaleTimeString([], { 
              hour: '2-digit', 
              minute: '2-digit',
              hour12: true 
            })}
          </div>
        </div>

        {/* Main content */}
        <div className="text-center">
          <div className="text-sm text-gray-600 mb-1">Time on TG since</div>
          <div className="flex items-center justify-center space-x-2 mb-2">
            <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              {daysSince}
            </span>
            <span className="text-lg text-gray-700 font-medium">
              {daysSince === 1 ? 'day' : 'days'}
            </span>
          </div>
          
          {/* Start date */}
          <div className="text-xs text-gray-500 font-mono">
            Since April 22, 2025
          </div>
          
          {/* Cute decorative elements */}
          <div className="flex justify-center space-x-2 mt-3">
            <span className="text-lg animate-bounce" style={{ animationDelay: '0s' }}>💕</span>
            <span className="text-lg animate-bounce" style={{ animationDelay: '0.2s' }}>✨</span>
            <span className="text-lg animate-bounce" style={{ animationDelay: '0.4s' }}>💖</span>
          </div>
        </div>

        {/* Progress indicator for current day */}
        <div className="mt-3">
          <div className="w-full bg-pink-100 rounded-full h-1.5 border border-pink-200/50">
            <div 
              className="bg-gradient-to-r from-pink-300 to-rose-300 h-1.5 rounded-full transition-all duration-1000"
              style={{ 
                width: `${(currentTime.getHours() * 60 + currentTime.getMinutes()) / (24 * 60) * 100}%` 
              }}
            />
          </div>
          <div className="text-xs text-center text-pink-600 mt-1">
            Day progress: {Math.round((currentTime.getHours() * 60 + currentTime.getMinutes()) / (24 * 60) * 100)}%
          </div>
        </div>

        {/* Milestones */}
        {daysSince > 0 && (
          <div className="mt-3 text-center">
            {daysSince >= 100 && (
              <div className="text-xs text-pink-600 font-medium animate-pulse">
                🎉 100+ days milestone! 🎉
              </div>
            )}
            {daysSince >= 365 && (
              <div className="text-xs text-purple-600 font-medium animate-pulse">
                🎊 One year together! 🎊
              </div>
            )}
            {daysSince >= 7 && daysSince < 30 && (
              <div className="text-xs text-pink-600 font-medium">
                ✨ One week+ together! ✨
              </div>
            )}
            {daysSince < 7 && daysSince > 0 && (
              <div className="text-xs text-pink-600 font-medium">
                💕 First week vibes! 💕
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TGTimeWidget;
