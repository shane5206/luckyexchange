import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

import { NavItem2 } from "@/components/nav-item2";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MobileNavbar } from "@/components/mobile-navbar";

export function Header() {
  return (
    <header className="container flex items-center justify-between gap-10 py-4">
      <Link href="/" className="flex items-center gap-3 flex-1">
        <Image alt="Image" src="/images/Lucky-Exchange1-(1).png" width={50} height={50} />
        <span className="font-heading text-xl font-bold">Lucky Exchange</span>
      </Link>
      <nav className="items-center justify-center gap-5 columns-5">
        <NavItem2 href="/Home" label="Home" />
        <NavItem2 href="/About" label="About" />
        <NavItem2 href="/service" label="service" />
        <NavItem2 href="/news" label="news" />
        <NavItem2 href="/Contact Us" label="Contact Us">
        </NavItem2>
      </nav>
      <div className="hidden items-center gap-2 md:flex flex-1 justify-end">
        <Button size="sm" asChild variant="destructive">
          <Link href="#" className="cursor-pointer">
            Get Started
          </Link>
        </Button>
      </div>
      <MobileNavbar>
        <div className="rounded-b-lg bg-background py-4 container text-foreground shadow-xl">
          <nav className="flex flex-col gap-1 pt-2">
            <NavItem2 href="/Home" label="Home" className="hidden" />
            <NavItem2 href="/About" label="About" className="hidden" />
            <NavItem2 href="/service" label="service" className="hidden" />
            <NavItem2 href="/news" label="news" className="hidden" />
            <NavItem2 href="/Contact Us" label="Contact Us" className="hidden">
              <section className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h2 className="text-4xl font-bold font-heading">Get in touch with us</h2>
                    <p className="text-muted-foreground">
                      Have questions? We&apos;d love to hear from you. Send us a message and
                      we&apos;ll get back to you shortly.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-full bg-secondary">
                          <MapPin className="size-5" />
                        </div>
                        <div>
                          <h3 className="font-medium">Our Location</h3>
                          <p className="text-muted-foreground">
                            123 Business Avenue, Suite 100, New York, NY 10001
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-full bg-secondary">
                          <Phone className="size-5" />
                        </div>
                        <div>
                          <h3 className="font-medium">Phone Number</h3>
                          <p className="text-muted-foreground">+1 (555) 123-4567</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-full bg-secondary">
                          <Mail className="size-5" />
                        </div>
                        <div>
                          <h3 className="font-medium">Email Address</h3>
                          <p className="text-muted-foreground">contact@company.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Send us a message</CardTitle>
                        <CardDescription>
                          Fill out the form below and we&apos;ll get back to you.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input id="name" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="john@example.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea id="message" rows={4} placeholder="Your message here..." />
                        </div>
                        <Button className="w-full">Send Message</Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </section>
            </NavItem2>
            <NavItem2 href="/about" label="About" />
            <NavItem2 href="/docs" label="Docs" />
            <NavItem2 href="/blog" label="Blog" />
            <NavItem2 href="/pricing" label="Pricing" />
            <Button size="lg" asChild={false} className="mt-2 w-full">
              <Link href="#" className="cursor-pointer">
                Get Started
              </Link>
            </Button>
          </nav>
        </div>
      </MobileNavbar>
    </header>
  );
}
