"use client";
import className from "@/utils/className";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({
  children,
  href,
  exact = false,
  activeClassName,
  ...props
}) => {
  const path = usePathname();
  const active = exact ? path === href : path.startsWith(href);
  const classes = className(props.className, active && activeClassName);
  if (classes) {
    props.className = classes;
  }
  return (
    <li>
      <Link href={href} {...props}>
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
