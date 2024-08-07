'use client'
import { useLayoutEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { IconApp, IconArrowNavDown } from '@/assets'
import { Button, Slider } from '@/ui'
import { cn, fontInter } from '@/styles'

export interface IHomeViewProps {}

gsap.registerPlugin(ScrollTrigger)

export const HomeView: React.FC<IHomeViewProps> = props => {
  const bg1Ref = useRef(null)
  const imgRef = useRef(null)
  const titleRef = useRef(null)
  const imgContainerRef = useRef<HTMLDivElement>(null)

  const imageRef = useRef(null)
  const textRef = useRef(null)
  const textCarouselRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: bg1Ref.current,
        pin: bg1Ref.current,
        pinSpacing: true,
        start: 'top top',
        end: 'bottom bottom',
      })

      gsap.set(textRef.current, { marginTop: -imgContainerRef.current?.offsetHeight! * 1.25 })

      gsap
        .timeline({
          scrollTrigger: {
            trigger: imgContainerRef.current,
            pin: imgContainerRef.current,
            scrub: 1,
            start: '0% 0%',
          },
        })
        .to(titleRef.current, { y: -800, opacity: 0, filter: 'blur(100px)' }, 0.025)
        .to(imgRef.current, { transform: 'translateZ(100vh)' }, 0)

      gsap.to(textRef.current, {
        y: '0',
        opacity: 1,
        filter: 'blur(0px)',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 75%',
          end: 'top top',
          scrub: true,
          markers: false,
        },
      })

      gsap.to(textCarouselRef.current, {
        x: '-100%',
        scrollTrigger: {
          trigger: textCarouselRef.current,
          start: 'top 90%',
          end: 'top -50%',
          scrub: true,
          markers: false,
        },
      })

      gsap.to(imageRef.current, {
        scale: 1,
        opacity: 1,
        filter: 'blur(0px)',
        duration: 2,
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 100%',
          end: 'top 40%',
          scrub: true,
          markers: false,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      <div ref={bg1Ref} className="top-0 left-0 absolute h-full w-screen z-[-1]"></div>
      <section>
        <div
          ref={imgContainerRef}
          className="img-container perspective flex items-center justify-center h-screen w-screen"
        >
          <img
            className="image w-full h-full"
            ref={imgRef}
            src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=2400"
            alt=""
          />
          <div ref={titleRef} className="absolute flex flex-col items-center gap-8 justify-center">
            <IconApp size={260} />
            <h1 className="text-7xl">
              <span className="text-stroke">Easy</span> Travel <span className="text-stroke">Dreams</span>
            </h1>
            <p className="text-muted w-72 text-sm text-center">
              ¿Código de escape para el viaje perfecto? ¡Nuestro algoritmo te llevará a destinos que hacen 'commit' a la
              diversión! ¡Debuguea tu próxima aventura con un 'click'!
            </p>
            <Link href="/recommender">
              <Button colorScheme="secondary">Empezar la aventura</Button>
            </Link>
            <IconArrowNavDown className="animate-bounce mt-12" size={72} />
          </div>
        </div>

        <div
          ref={textRef}
          className="relative container mx-auto text-balance text-base font-bold text-zinc-300 opacity-1 mt-12 pt-60 opacity-0 blur-lg pb-56 space-y-20"
        >
          <div
            id="text"
            className="md:text-8xl uppercase bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary text-5xl font-black text-center"
          >
            Descubre los mejores lugares
          </div>
          <p className="text-muted text-balance max-w-screen-lg mx-auto">
            ¿Estás listo para un 'escape' de la rutina que no sea 'mainstream'? En Easy Travel Dreams, te llevamos a
            destinos que son tan únicos como tus propios 'scripts'. Imagina playas que parecen sacadas de una película
            de ciencia ficción, montañas que desafían la gravedad, y ciudades que nunca duermen, donde cada rincón es un
            'commit' a la belleza y la emoción. Nuestro 'SEO' no es solo una palabra clave, es una promesa: te llevamos
            a lugares que son tan únicos como tus propios 'scripts'. Desde el desierto más misterioso hasta la selva más
            verde, cada destino es una 'función' de aventura que te invita a 'debug' la realidad y 'compile' recuerdos
            inolvidables. Así que, si estás listo para 'deploy' en una nueva aventura y 'push' tus límites, ¡haz 'click'
            y descubre el viaje que ha sido 'coded' solo para ti! En Easy Travel Dreams, no solo encontramos tu próximo
            destino, ¡creamos la ruta más 'optimizada' para tu diversión!"
          </p>
          <Slider classNameSlider="gap-4 px-12" addBlurHorizontalScroll>
            {Array.from({ length: 8 }).map((i, index) => (
              <div
                key={index}
                className="w-[560px] aspect-video bg-card rounded-lg bg-center bg-cover grayscale hover:grayscale-0"
                style={{ backgroundImage: `url(/images/slider-${index + 1}.webp)` }}
              ></div>
            ))}
          </Slider>
        </div>

        <div
          ref={textCarouselRef}
          className={cn(
            'text-nowrap translate-x-[100%] text-9xl font-bold py-16 text-transparent',
            fontInter.className
          )}
          style={{ WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor: '#84cc16', fontFamily: 'Inter' }}
        >
          Prueba nuestro recomendador para aventureros
        </div>

        <div></div>

        <div
          ref={imageRef}
          className="w-full aspect-video mt-12 scale-[0.75] bg-cover bg-center opacity-0 blur-md grayscale-100 flex items-end justify-center py-12"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=2400)',
          }}
        >
          <div className="max-w-96 bg-background/20 z-10 backdrop-blur-3xl border border-background/25 p-10 rounded-2xl space-y-4">
            <h2 className="text-4xl text-center mb-8">¡Empieza tu Aventura Personalizada!</h2>
            <Link href="/recommender">
              <Button colorScheme="success" widthFull>
                Empezar la aventura
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <footer className="w-full p-6 text-center text-xs text-muted/50">
        Copyrighg © {new Date().getFullYear()} Desarrollado por
        <a href="https://www.damenor.com" target="_blank" className="text-muted/75 ml-1">
          damenor.com
        </a>
      </footer>
    </>
  )
}
