import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import './carousels2.css'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'

type PropType = {
  slides: string[]
  options?: EmblaOptionsType
}
const getStartIndex = (selectedIndex: number, total: number): number => {
  console.log("sel ind is " + selectedIndex);
  const half = Math.floor(5 / 2)

  let start = selectedIndex - half
  if (start < 0) start = 0
  if (start + 5 > total) start = Math.max(0, total - 5)

  return start
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, visibleDotIndexes, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
               <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-contain rounded-md"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
     {
        

     Array.from({ length: 5 }).map((_, i) => {
    const start = getStartIndex(selectedIndex, scrollSnaps.length)
    const actualIndex = start + i
   // console.log("actual ind is " + actualIndex);
    console.log("len of scrollsnaps is " + scrollSnaps.length)
    const isSelected = actualIndex === selectedIndex
    if (actualIndex >= scrollSnaps.length) return null
      if(isSelected){
        console.log("is selected is true for actualindex of " + actualIndex);
        console.log(actualIndex);
      }

    
    return (
      <DotButton
        key={actualIndex}
        id={actualIndex.toString()}
        onClick={() => onDotButtonClick(actualIndex)}
        className={
          'embla__dot'.concat(isSelected ? ' embla__dot--selected' : '')
        }
      />
    )
  }
  )
  }
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel



