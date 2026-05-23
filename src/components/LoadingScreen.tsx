import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: '#0A0A0F' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className="relative flex flex-col items-center">
            {/* Animated ring */}
            <motion.div
              className="absolute w-24 h-24 rounded-full"
              style={{
                border: '2px solid transparent',
                background: 'linear-gradient(#0A0A0F, #0A0A0F) padding-box, linear-gradient(135deg, #7C3AED, #06B6D4) border-box',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
            {/* JJ monogram */}
            <motion.div
              className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
                boxShadow: '0 0 40px rgba(124, 58, 237, 0.6)',
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.1, 1], opacity: 1 }}
              transition={{ duration: 0.8, ease: 'backOut' }}
            >
              <span
                className="text-white font-bold text-2xl"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                JJ
              </span>
            </motion.div>

            {/* Loading text */}
            <motion.p
              className="mt-8 text-sm tracking-[0.3em] uppercase"
              style={{ color: '#94A3B8', fontFamily: 'JetBrains Mono, monospace' }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Initializing...
            </motion.p>

            {/* Progress bar */}
            <motion.div
              className="mt-4 h-0.5 rounded-full"
              style={{ background: 'linear-gradient(90deg, #7C3AED, #06B6D4)' }}
              initial={{ width: 0 }}
              animate={{ width: '160px' }}
              transition={{ delay: 0.3, duration: 1.2, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
