'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountNavigation() {
  const pathname = usePathname();

  const links = [
    { href: "/Account/Signin", label: "Signin" },
    { href: "/Account/Signup", label: "Signup" },
    { href: "/Account/Profile", label: "Profile" },
  ];

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`list-group-item border-0 ${
            pathname === href ? "active" : "text-danger"
          }`}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
