"use client"; // 必須在檔案第一行

import { useState, FormEvent } from "react";
import { Mail } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: <Mail className="size-5 text-primary" />,
    title: "Email",
    description: "support-general@merchant.uni247.xyz",
  },
];

export function Section3() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | ''>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string
    };

    try {
      const formData = new URLSearchParams();
      formData.append('entry.94032766', data.name);
      formData.append('entry.1291015772', data.email);
      formData.append('entry.1847230535', data.message);

      const response = await fetch('https://docs.google.com/forms/d/e/KUfyd8vETGpsABdd6/formResponse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData.toString(),
        mode: 'no-cors'
      });

      if (!response.ok && response.type !== 'opaque') throw new Error('Failed to send');
      setSubmitStatus('success');
      form.reset();
    } catch (error: any) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      if (error.response) {
        console.error('Server response:', error.response.data);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold font-heading">
            Step Into the Winning Zone – Connect with Lucky Exchange!
          </h2>
          <p className="text-muted-foreground">
            We’re committed to providing you the best experience. Let’s make sports trading
            effortless and exciting!
          </p>
          <div className="space-y-4">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-full">{item.icon}</div>
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Card className="p-6">
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
            <CardDescription>
              Fill out the form below and we&apos;ll get back to you shortly.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input 
                  id="name" 
                  name="name" 
                  placeholder="John Doe" 
                  required 
                  className="text-white" 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="text-white" 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your project..."
                  required
                  className="text-white" 
                />
              </div>
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
              
              {submitStatus === 'success' && (
                <p className="text-center text-green-600 mt-2">
                  Message sent successfully!
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-center text-red-600 mt-2">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}