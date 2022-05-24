type Props = {
  input: Date
}

export default function DateFormated( {input}: Props ){
  const newDate = new Date(input).toLocaleDateString('pt-BR', {
    day: '2-digit', 
    month: 'long', 
    year: 'numeric'
  })

  return (
    <p>{newDate}</p>
  )
}