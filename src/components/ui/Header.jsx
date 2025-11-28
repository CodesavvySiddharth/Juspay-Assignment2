import React from 'react'
import { ChevronLeft } from 'lucide-react'


const Header = ({ onBack }) => (
<div className="px-5 py-4 border-b border-gray-100">
<button
onClick={onBack}
className="flex items-center gap-2 text-gray-700 hover:text-gray-900 active:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg px-2 py-1"
aria-label="Go back"
role="button"
>
<ChevronLeft size={20} strokeWidth={2} />
<span className="font-medium text-base">Back</span>
</button>
</div>
)


export default Header