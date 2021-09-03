import { ButtonHTMLAttributes } from 'react'

type ButtonProps = 

export function Button(props) {
  return (
    <button className="button" {...props}/>
  )
}
