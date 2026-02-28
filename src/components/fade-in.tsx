"use client"

import { motion, useInView } from "motion/react"
import { useRef, type ElementType, type ComponentPropsWithoutRef } from "react"

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

type FadeInProps<T extends ElementType = "div"> = {
  as?: T
  delay?: number
  className?: string
  children?: React.ReactNode
} & Omit<ComponentPropsWithoutRef<T>, "as" | "delay" | "className" | "children">

export function FadeIn<T extends ElementType = "div">({
  as,
  delay = 0,
  className,
  children,
  ...rest
}: FadeInProps<T>) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const Component = as ? (motion as unknown as Record<string, typeof motion.div>)[as as string] : motion.div

  return (
    <Component
      ref={ref}
      className={className}
      variants={fadeInVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
        delay,
      }}
      {...rest}
    >
      {children}
    </Component>
  )
}
