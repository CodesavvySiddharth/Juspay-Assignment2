import React from 'react'
import Card from '../ui/Card'
import Header from '../ui/Header'
import MenuListRow from '../ui/MenuListRow'
import menuItems from '../../data/menuItemsExtended'
import { motion } from 'framer-motion'


export default function DataStrategy({ onBack }) {
const items = menuItems.dataStrategy


const handleDragEnd = (event, info) => {
const { offset, velocity } = info
const swipeThreshold = 50
const velocityThreshold = 500


// Only allow swipe down to close
if (offset.y > swipeThreshold || velocity.y > velocityThreshold) {
onBack()
}
}


return (
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-gray-300/30 flex items-end justify-center p-4">
<motion.div
drag="y"
dragConstraints={{ top: 0, bottom: 300 }}
onDragEnd={handleDragEnd}
initial={{ scale: 0.95, opacity: 0, x: 50 }}
animate={{ scale: 1, opacity: 1, x: 0 }}
exit={{ scale: 0.95, opacity: 0.5, x: -50 }}
transition={{ type: 'tween', duration: 0.2 }}
className="w-full max-w-md"
>
<Card>
<Header onBack={onBack} />
<div className="overflow-y-auto max-h-[600px]">
{items.map((item, index) => (
<MenuListRow key={item.id} icon={item.icon} title={item.title} subtitle={item.subtitle} index={index} onClick={() => console.log('Clicked:', item.title)} />
))}
</div>
</Card>
</motion.div>
</motion.div>
)
}