import { ReactNode } from 'react'
import './Card.css'
interface CardProps {
  children: ReactNode
  className?: string
}
export const Card = ({ children, className }: CardProps) => (
  <div className={`card ${className ?? ''}`}>{children}</div>
)
