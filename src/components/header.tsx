'use client';
import Link from "next/link";
import Image from "next/image";
import { NavItem2 } from "@/components/nav-item2";
import { Button } from "@/components/ui/button";
import { MobileNavbar } from "@/components/mobile-navbar";

export function Header() {
  return (
    <header className="container flex items-center justify-between gap-10 py-4">
      <Link href="/" className="flex items-center gap-3 flex-1">
        <Image alt="Image" src="/images/Lucky-Exchange1-(1).png" width={50} height={50} />
        <span className="font-heading text-xl font-bold">Lucky Exchange</span>
      </Link>
      <nav className="hidden md:flex items-center justify-center gap-5">
        <NavItem2 href="/" label="Home" />
        <NavItem2 href="/product" label="Product" />
        <NavItem2 href="/contact-us" label="Contact Us" />
      </nav>
      <div className="hidden md:flex flex-1 items-center justify-end gap-2">
        <Button size="lg" asChild variant="destructive">
          <Link
            href="#contact-sales"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact-sales')?.scrollIntoView({
                behavior: 'smooth'
              });
            }}
            className="cursor-pointer"
          >
            Contact Sales
          </Link>
        </Button>
      </div>
      <MobileNavbar>
        <div className="rounded-b-lg bg-background py-4 container text-foreground shadow-xl">
          <nav className="flex flex-col gap-1 pt-2">
            <NavItem2 href="/" label="Home" />
            <NavItem2 href="/product" label="Product" />
            <NavItem2 href="/contact-us" label="Contact Us" />
            <Button size="lg" asChild variant="destructive" className="mt-2 w-full">
              <Link 
                href="#contact-sales"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact-sales')?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
                className="cursor-pointer"
              >
                Contact Sales
              </Link>
            </Button>
          </nav>
        </div>
      </MobileNavbar>
    </header>
  );
}
