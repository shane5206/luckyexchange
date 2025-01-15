import { Mail } from "lucide-react";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function Section3() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold font-heading">
            Step Into the Winning Zone – Connect with RichKing Exchange!{" "}
          </h2>
          <p className="text-muted-foreground">
            We’re committed to providing you the best experience. Let’s make sports trading
            effortless and exciting!{" "}
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="size-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-muted-foreground">support-general@merchant.uni247.xyz </p>
              </div>
            </div>
            <div className="flex items-center gap-3" />
            <div className="flex items-center gap-3" />
          </div>
        </div>
        <Card className="p-6">
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
            <CardDescription>
              Fill out the form below and we&apos;ll get back to you shortly.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="John Doe" className="text-white" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                className="text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                rows={4}
                placeholder="Tell us about your project..."
                className="text-white"
              />
            </div>
            <Button className="w-full">Send Message</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
