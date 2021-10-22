export default function SearchResult({ children }) {
  return (
    <div>
      <div className='flex justify-center'>
        <h1 className='font-bold font text-2xl pb-6 text-pink-700'>
          Search result
        </h1>
      </div>
      <div>{children}</div>
    </div>
  );
}
