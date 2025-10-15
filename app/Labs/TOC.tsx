'use client';

import { Nav } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TOC() {
  const pathname = usePathname();

  const links = [
    { href: "/Labs", label: "Labs" },
    { href: "/Labs/Lab1", label: "Lab 1" },
    { href: "/Labs/Lab2", label: "Lab 2" },
    { href: "/Labs/Lab3", label: "Lab 3" },
    { href: "/", label: "Kambaz" },
    { href: "https://github.com/sgsriram25/kambaz-next-js2", label: "My GitHub", external: true },
  ];

  return (
    <Nav variant="pills" className="wd toc-navigation fs-5 rounded-0">
      {links.map(({ href, label, external }) => (
        <Nav.Item key={href}>
          {external ? (
            <Nav.Link href={href} target="_blank" rel="noopener noreferrer" className="text-danger border-0">
              {label}
            </Nav.Link>
          ) : (
            <Nav.Link
              as={Link}
              href={href}
              className={`border-0 ${
                pathname === href ? "active" : "text-danger"
              } toc-navigation-item`}
              passHref
            >
              {label}
            </Nav.Link>
          )}
        </Nav.Item>
      ))}
    </Nav>
  );
}
