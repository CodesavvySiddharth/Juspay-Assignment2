import React from 'react'
import { motion } from 'framer-motion'


export default function HomeScreen({ onNavigate }) {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center justify-center min-h-screen bg-white">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: 'tween', duration: 0.2 }} onClick={() => onNavigate('screen2')} className="px-8 py-3 bg-blue-500 text-white rounded-full font-medium shadow-lg hover:bg-blue-600 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300" role="button" aria-label="Open menu">Open Menu</motion.button>
        </motion.div>
    )
}