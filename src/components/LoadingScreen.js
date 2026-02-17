import { motion } from 'framer-motion';

export default function LoadingScreen({ onFinish }) {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ background: 'var(--bg-primary)' }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.8, duration: 0.5 }}
      onAnimationComplete={onFinish}
    >
      <motion.div
        className="flex flex-col items-center gap-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Logo */}
        <motion.div
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span style={{ color: 'var(--text-muted)' }}>&lt;</span>
          <span className="gradient-text">SV</span>
          <span style={{ color: 'var(--text-muted)' }}> /&gt;</span>
        </motion.div>

        {/* Loading bar */}
        <div
          className="w-48 h-1 rounded-full overflow-hidden"
          style={{ background: 'var(--border)' }}
        >
          <motion.div
            className="h-full rounded-full"
            style={{ background: 'linear-gradient(90deg, var(--gradient-from), var(--gradient-via), var(--gradient-to))' }}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

