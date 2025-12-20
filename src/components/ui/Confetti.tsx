import { useEffect, useCallback } from 'react';
import confetti from 'canvas-confetti';

interface ConfettiProps {
  trigger: boolean;
  type?: 'celebration' | 'stars' | 'fireworks' | 'emoji';
  emoji?: string[];
}

export function Confetti({ trigger, type = 'celebration', emoji = ['🎉', '⭐', '🌟', '✨'] }: ConfettiProps) {
  const fireCelebration = useCallback(() => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff']
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dfe6e9']
      });
    }, 250);
  }, []);

  const fireStars = useCallback(() => {
    const defaults = {
      spread: 360,
      ticks: 100,
      gravity: 0,
      decay: 0.94,
      startVelocity: 20,
      shapes: ['star'] as confetti.Shape[],
      colors: ['#FFE400', '#FFBD00', '#E89400', '#FFCA6C', '#FDFFB8']
    };

    const shoot = () => {
      confetti({
        ...defaults,
        particleCount: 40,
        scalar: 1.2,
        origin: { x: 0.5, y: 0.5 }
      });

      confetti({
        ...defaults,
        particleCount: 20,
        scalar: 0.75,
        origin: { x: 0.5, y: 0.5 }
      });
    };

    shoot();
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
  }, []);

  const fireFireworks = useCallback(() => {
    const duration = 5000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 45, spread: 360, ticks: 80, zIndex: 9999 };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 100 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: Math.random(), y: Math.random() * 0.5 },
        colors: ['#ff0000', '#ff7700', '#ffff00', '#00ff00', '#0000ff', '#8b00ff']
      });
    }, 400);
  }, []);

  const fireEmoji = useCallback(() => {
    const scalar = 2;
    const shapes = emoji.map(e => confetti.shapeFromText({ text: e, scalar }));

    const defaults = {
      spread: 360,
      ticks: 60,
      gravity: 0.5,
      decay: 0.96,
      startVelocity: 20,
      shapes,
      scalar
    };

    const shoot = () => {
      confetti({
        ...defaults,
        particleCount: 30,
        origin: { x: 0.5, y: 0.5 }
      });
    };

    shoot();
    setTimeout(shoot, 150);
    setTimeout(shoot, 300);
  }, [emoji]);

  useEffect(() => {
    if (trigger) {
      switch (type) {
        case 'celebration': fireCelebration(); break;
        case 'stars': fireStars(); break;
        case 'fireworks': fireFireworks(); break;
        case 'emoji': fireEmoji(); break;
      }
    }
  }, [trigger, type, fireCelebration, fireStars, fireFireworks, fireEmoji]);

  return null;
}

// Kolay kullanım için yardımcı fonksiyonlar
export const triggerConfetti = {
  celebration: () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  },

  sides: () => {
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });
  },

  rain: () => {
    const duration = 2000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5,
        startVelocity: 0,
        ticks: 200,
        origin: { x: Math.random(), y: 0 },
        colors: ['#bb0000', '#00bb00', '#0000bb', '#bbbb00'],
        gravity: 0.5
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  },

  schoolPride: () => {
    const end = Date.now() + 3000;

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ff0000', '#ffffff']
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ff0000', '#ffffff']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }
};
