export default function Button({ name, count, setCount }) {
  const handleClick = () => {
    setCount()
  }

  return (
    <button className='button' onClick={handleClick}>
      {name}
    </button>
  )
}