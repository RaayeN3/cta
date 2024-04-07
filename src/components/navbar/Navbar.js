import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import { auth } from "@/lib/auth";

const Navbar = async () => {
  const session = await auth();

  return (
    <div className={` max-lg:bg-blue-950 lg`}>
      <div className={`${styles.container} m-auto w-4/5`}>
        <Link href="/" className={styles.logo}>
          Logo
        </Link>
        <div className="">
          <Links session={session} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
