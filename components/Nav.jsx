import Link from "next/link";
import Image from "next/image";

const Nav = () => (
  <nav>
    <Link href="/">
      <Image src="/assets/images/logo.svg" alt="logo" width={30} height={30} />
      <p>Promptopia</p>
    </Link>
    <div>
      <Link href="/create-prompt">Create Prompt</Link>
      <button type="button">Sign Out</button>
      <Link href="/profile">
        <Image
          src="/assets/images/logo.svg"
          alt="profile"
          width={37}
          height={37}
        ></Image>
      </Link>
    </div>
  </nav>
);

export default Nav;
