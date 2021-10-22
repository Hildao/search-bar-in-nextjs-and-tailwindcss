export default function Button({ children, onClick = () => {} }) {
  return (
    <button onClick={onClick} className='p-1'>
      {children}
    </button>
  );
}
