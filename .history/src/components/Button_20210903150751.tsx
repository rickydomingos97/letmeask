type ButtonProps = {
  type
}

export function Button(props) {
  return (
    <button className="button" {...props}/>
  )
}
