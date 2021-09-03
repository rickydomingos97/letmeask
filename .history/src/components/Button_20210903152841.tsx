import { ButtonHTMLAttributes } from 'react'

impoer
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonProps) {
  return (
    <button className="button" {...props}/>
  )
}
