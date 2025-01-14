import React from "react";

type NavItem2Props = {
  href: string;
  label: string;
  children?: React.ReactNode;
  className?: string;
};

export const NavItem2: React.FC<NavItem2Props> = ({ href, label, children, className }) => {
  return (
    <div className={`relative ${className || ""}`}>
      <a href={href} className="font-medium text-lg hover:underline">
        {label}
      </a>
      {children && <div className="absolute top-full left-0 w-full">{children}</div>}
    </div>
  );
};