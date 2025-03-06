'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface SubscribeFormProps {
  variant?: 'default' | 'compact';
  buttonText?: string;
}

export function SubscribeForm({ 
  variant = 'default',
  buttonText = 'Subscribe'
}: SubscribeFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }
    
    setStatus('loading');
    
    try {
      // 这里可以添加实际的API调用来处理订阅
      // 例如: await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email }) })
      
      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStatus('success');
      setMessage('Thank you for subscribing!');
      setEmail('');
      
      // 5秒后重置状态
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={variant === 'compact' ? 'space-y-3' : 'flex gap-2'}>
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={status === 'loading'}
      />
      <Button 
        variant="destructive" 
        type="submit"
        disabled={status === 'loading'}
        className={variant === 'compact' ? 'w-full' : ''}
      >
        {status === 'loading' ? 'Subscribing...' : buttonText}
      </Button>
      
      {message && (
        <div className={`text-sm mt-2 ${status === 'error' ? 'text-red-500' : 'text-green-500'}`}>
          {message}
        </div>
      )}
    </form>
  );
} 