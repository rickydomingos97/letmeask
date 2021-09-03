import { ButtonHTMLAttributes } from 'react'

impo
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonProps) {
  return (
    <button className="button" {...props}/>
  )
}
