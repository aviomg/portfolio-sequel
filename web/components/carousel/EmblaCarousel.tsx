import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import './carousels2.css'

import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import ClassNames from 'embla-carousel-class-names'
import { Dot } from 'lucide-react'

type PropType = {
  slides: string[],
  captions:string[],
  options?: EmblaOptionsType,
  subcaps:string[]
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames()])

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)
  const currentCaption = props.captions[selectedIndex] || ''
  const currentsubcaption = props.subcaps[selectedIndex] != ""? props.subcaps[selectedIndex]: ''

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <img
                className="embla__slide__img"
                src={index}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 mb-1 p-2 border border-viridian rounded-md">
        <p className='mb-2 text-lg'>{currentCaption}</p>
        <p className='text-md italic'>{currentsubcaption}</p>
      </div>
      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              disabled ={index===selectedIndex}
              className='embla__dot-icon'
            /*  className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}*/
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
