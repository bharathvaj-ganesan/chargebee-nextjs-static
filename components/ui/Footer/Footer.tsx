import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1920px] px-6">
      <div className="py-10 flex flex-col md:flex-row justify-center items-center space-y-4">
        <div className="flex items-center">
          <span className="text-white">Crafted by</span>&nbsp;
          <a className='text-primary' href="https://bharathvaj.me" target="_blank" rel="noreferrer" aria-label="bharathvaj.meLink">
            Bharathvaj Ganesan
          </a>
        </div>
      </div>
    </footer>
  );
}
