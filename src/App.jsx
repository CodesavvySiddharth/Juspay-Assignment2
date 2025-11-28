import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import HomeScreen from './components/screens/HomeScreen'
import MainMenu from './components/screens/MainMenu'
import ProductsServices from './components/screens/ProductsServices'
import Consulting from './components/screens/Consulting'
import DataStrategy from './components/screens/DataStrategy'


export default function App() {
const [currentScreen, setCurrentScreen] = useState('screen1')
const [history, setHistory] = useState([])


const navigateTo = (screen) => {
setHistory((h) => [...h, currentScreen])
setCurrentScreen(screen)
}


const navigateBack = () => {
setHistory((h) => {
if (h.length === 0) return h
const previous = h[h.length - 1]
setCurrentScreen(previous)
return h.slice(0, -1)
})
}


return (
<div className="font-sans antialiased">
<AnimatePresence mode="wait" initial={false}>
{currentScreen === 'screen1' && (
<HomeScreen key="screen1" onNavigate={navigateTo} />
)}


{currentScreen === 'screen2' && (
<MainMenu key="screen2" onNavigate={navigateTo} onBack={navigateBack} />
)}


{currentScreen === 'screen3' && (
<ProductsServices key="screen3" onNavigate={navigateTo} onBack={navigateBack} />
)}


{currentScreen === 'screen4' && (
<Consulting key="screen4" onNavigate={navigateTo} onBack={navigateBack} />
)}


{currentScreen === 'screen5' && (
<DataStrategy key="screen5" onBack={navigateBack} />
)}
</AnimatePresence>
</div>
)
}