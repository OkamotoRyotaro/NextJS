import Link from "next/link";
import React from "react";
import style from "./style/header.module.css"
import Contents from "./contents/Contents";

export const Header = () => {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <h1 className={style.title}>FROG</h1>
        <div>
          <Contents />
        </div>
        <div className={style.links}>
          <Link href="/top" className={style.link}>
            Top
          </Link>
          <Link href="/event" className={style.link}>
            Event
          </Link>
          <Link href="/aboutus" className={style.link}>
            About Us
          </Link>
          <Link href="/contact" className={style.link}>
            Contact
          </Link>
        </div>
      </nav>
    </header>

  )
}

export default Header;