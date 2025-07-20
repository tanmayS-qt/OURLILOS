import React, { useState, useEffect } from 'react';

interface BootScreenProps {
  onBootComplete: () => void;
}

const BootScreen: React.FC<BootScreenProps> = ({ onBootComplete }) => {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState<'loading' | 'welcome' | 'complete'>('loading');

  useEffect(() => {
    if (stage === 'loading') {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setStage('welcome'), 500);
            return 100;
          }
          return prev + Math.random() * 5;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [stage]);

  useEffect(() => {
    if (stage === 'welcome') {
      const timer = setTimeout(() => {
        setStage('complete');
        setTimeout(onBootComplete, 1000);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [stage, onBootComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-pink-25 via-rose-50 to-blush-50 flex flex-col items-center justify-center z-50 font-nunito">
      {stage === 'loading' && (
        <div className="text-center">
          <h1 className="text-pink-800 text-4xl mb-8 font-bold">Starting our lil OS...</h1>
          <div className="w-80 h-2 bg-pink-100 rounded-full overflow-hidden mb-4 border border-pink-200/50">
            <div 
              className="h-full bg-gradient-to-r from-pink-300 to-rose-300 rounded-full transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-pink-600 text-lg">{Math.round(progress)}%</p>
        </div>
      )}
      
      {stage === 'welcome' && (
        <div className="text-center animate-bounce">
          <h1 className="text-pink-400 text-6xl font-bold mb-4">hewwo user! &gt;W&lt;</h1>
          <div className="flex justify-center space-x-2">
            <span className="w-2 h-2 bg-pink-300 rounded-full animate-pulse"></span>
            <span className="w-2 h-2 bg-rose-300 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
            <span className="w-2 h-2 bg-pink-300 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BootScreen;