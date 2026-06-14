import React, {
  useEffect,
  useState,
  useRef,
  Children,
  cloneElement,
  isValidElement } from
'react';
import { GripVertical } from 'lucide-react';
interface ImageComparisonProps {
  className?: string;
  children: React.ReactNode;
}
export function ImageComparison({ className, children }: ImageComparisonProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min(x / rect.width * 100, 100));
    setSliderPosition(percent);
  };
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };
  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);
  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden select-none ${className}`}
      onMouseDown={(e) => {
        setIsDragging(true);
        handleMove(e.clientX);
      }}
      onTouchStart={(e) => {
        setIsDragging(true);
        handleMove(e.touches[0].clientX);
      }}>
      
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child as React.ReactElement<any>, {
            sliderPosition,
            isDragging
          });
        }
        return child;
      })}
    </div>);

}
interface ImageComparisonImageProps {
  src: string;
  alt: string;
  position: 'left' | 'right';
  sliderPosition?: number;
}
export function ImageComparisonImage({
  src,
  alt,
  position,
  sliderPosition = 50
}: ImageComparisonImageProps) {
  const isLeft = position === 'left';
  return (
    <div
      className="absolute inset-0 h-full w-full"
      style={{
        clipPath: isLeft ?
        `inset(0 ${100 - sliderPosition}% 0 0)` :
        `inset(0 0 0 ${sliderPosition}%)`
      }}>
      
      <div className="h-full w-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto block"
          draggable={false} />
        
      </div>
    </div>);

}
interface ImageComparisonSliderProps {
  className?: string;
  sliderPosition?: number;
  isDragging?: boolean;
}
export function ImageComparisonSlider({
  className,
  sliderPosition = 50,
  isDragging
}: ImageComparisonSliderProps) {
  return (
    <div
      className={`absolute top-0 bottom-0 w-1 cursor-ew-resize ${className}`}
      style={{
        left: `${sliderPosition}%`,
        transform: 'translateX(-50%)'
      }}>
      
      <div className="absolute inset-0 h-full w-full pointer-events-none">
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md border border-zinc-200 transition-transform pointer-events-auto ${isDragging ? 'scale-110' : ''}`}>
          
          <GripVertical className="h-4 w-4 text-zinc-600" />
        </div>
      </div>
    </div>);

}