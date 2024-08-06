export interface ISliderDotsProps {
  activeIndex: number
  numberOfSlides: number
  onClick: (index: number) => void
}

export const SliderDots: React.FC<ISliderDotsProps> = ({ activeIndex, numberOfSlides, onClick }) => {
  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 mt-2">
      {Array.from({ length: numberOfSlides }).map((_, index) => (
        <button
          key={`btn-${index}`}
          onClick={() => onClick(index)}
          className={`w-2 h-2 rounded-full ${index === activeIndex ? 'bg-primary-400' : 'bg-primary-100/50'}`}
        />
      ))}
    </div>
  )
}
