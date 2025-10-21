'use client';

import { Nav, NavItem, NavLink } from 'react-bootstrap';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function TOC() {
  const pathname = usePathname();

  return (
    <Nav variant="pills" className="wd toc-navigation fs-5 rounded-0">
      <NavItem>
        <NavLink
          href="/Labs"
          as={Link}
          className={`nav-link ${pathname === '/Labs' ? 'active' : ''}`}
        >
          Labs
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink
          href="/Labs/Lab1"
          as={Link}
          className={`nav-link ${pathname.endsWith('/Lab1') ? 'active' : ''}`}
        >
          Lab 1
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink
          href="/Labs/Lab2"
          as={Link}
          className={`nav-link ${pathname.endsWith('/Lab2') ? 'active' : ''}`}
        >
          Lab 2
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink
          href="/Labs/Lab3"
          as={Link}
          className={`nav-link ${pathname.endsWith('/Lab3') ? 'active' : ''}`}
        >
          Lab 3
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink
          href="/"
          as={Link}
          className={`nav-link ${pathname === '/' ? 'active' : ''}`}
        >
          Kambaz
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink
          href="https://github.com/sgsriram25/kambaz-next-js2"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link text-danger"
        >
          My GitHub
        </NavLink>
      </NavItem>
    </Nav>
  );
}
