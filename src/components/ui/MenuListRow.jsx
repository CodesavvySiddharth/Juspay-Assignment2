import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'


const MenuListRow = ({ icon: Icon, title, subtitle, onClick, index = 0 }) => (
<motion.button
initial={{ opacity: 0, x: 20 }}
animate={{ opacity: 1, x: 0 }}
transition={{ delay: index * 0.03, duration: 0.1 }}
onClick={onClick}
className="w-full px-4 py-4 flex items-center gap-3 hover:bg-gray-50 active:bg-gray-100 transition-colors border-b border-gray-100 last:border-b-0 focus:outline-none focus:bg-blue-50 focus:ring-2 focus:ring-inset focus:ring-blue-500"
role="button"
aria-label={`${title}. ${subtitle || ''}`}
tabIndex={0}
>
{Icon && (
<div className="flex-shrink-0">
<Icon size={22} className="text-gray-700" strokeWidth={2} />
</div>
)}
<div className="flex-1 text-left min-w-0">
<h3 className="font-semibold text-gray-900 text-base leading-tight mb-0.5">{title}</h3>
{subtitle && <p className="text-sm text-gray-500 leading-snug">{subtitle}</p>}
</div>
<div className="flex-shrink-0">
<ChevronRight size={20} className="text-gray-400" strokeWidth={2} />
</div>
</motion.button>
)


export default MenuListRow