import EmblaCarousel from '@/components/carousel/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'


const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Example(){
    return(
        <div>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
    )
}