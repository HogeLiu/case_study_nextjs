import Link from 'next/link';
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" alt="site logo" width={80} height={64} />
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/hogeliu/"><a>User List</a></Link>
    </nav>
);
}
 
export default Navbar;