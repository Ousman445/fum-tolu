import React from 'react';
import { Zap, Droplets, Construction, Trash2, Lightbulb, AlertCircle } from 'lucide-react';

export default function CategoryIcon({ category, size = 20, color = 'currentColor' }) {
  const cat = (category || '').toLowerCase();
  
  switch (cat) {
    case 'electricity':
      return <Zap size={size} color={color} />;
    case 'water':
      return <Droplets size={size} color={color} />;
    case 'roads':
      return <Construction size={size} color={color} />;
    case 'waste':
      return <Trash2 size={size} color={color} />;
    case 'streetlights':
      return <Lightbulb size={size} color={color} />;
    default:
      return <AlertCircle size={size} color={color} />;
  }
}
