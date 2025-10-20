    'use client';

import { useState } from 'react';
import { TerminalWindow } from '@/components/ui/terminal-window';
import { CommandPrompt } from '@/components/ui/command-prompt';
import { PixelButton } from '@/components/ui/pixel-button';
import { ASCIIArt } from '@/components/ui/ascii-art';
    import {
        Tooltip,
        TooltipContent,
        TooltipTrigger,
    } from "@/components/ui/tooltip"

export default function ContactPage() {
  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Copy to clipboard function
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You would typically show a toast notification here
      window.showKeyboardToast(`Copied to clipboard: ${text}`)
  };

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !message) {
      setError('All fields are required.');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    setError('');

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                access_key: "ae280102-a600-4c2c-90f8-17e59522bbc7",
                email: email,
                name: name,
                message: message,
            }),
        });

        const result = await response.json();
        if (result.success) {
            setSubmitted(true);
            setName('');
      setEmail('');
      setMessage('');

            await new Promise(resolve => setTimeout(resolve, 5000));
        } else {
      setError('Failed to send message. Please try again.');
            await new Promise(resolve => setTimeout(resolve, 3000));
            setError('');
    }
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <TerminalWindow title="contact.sh" className="mb-8">
        <div className="space-y-6">
          <CommandPrompt
            command="./send-message.sh"
            typeAnimation={true}
          />
          
          <div className="mt-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Contact Form */}
              <div className="flex-1 order-2 lg:order-1">
                {submitted ? (
                  <div className="border-2 border-[var(--color-accent)] p-6 bg-[var(--color-background)] text-center">
                    <div className="text-[var(--color-accent)] text-xl mb-4">
                      Message Sent Successfully!
                    </div>
                    <div className="text-[var(--color-text-secondary)] mb-6">
                      <div className="mb-2">Thank you for your message.</div>
                      <div>I'll get back to you as soon as possible.</div>
                    </div>
                    <PixelButton
                      variant="secondary"
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Message
                    </PixelButton>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="text-xl font-bold text-[var(--color-accent)] mb-6">
                      <span className="text-[var(--color-text-dim)]">$</span> Contact Form
                    </h2>

                    {/* Name Field */}
                    <div className="space-y-2">
                      <label className="flex items-baseline gap-2">
                        <span className="font-mono text-[var(--color-accent)]">
                          Name:
                        </span>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="flex-1 bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-text-primary)] p-2 font-mono focus:outline-none focus:border-[var(--color-accent)]"
                        />
                      </label>
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <label className="flex items-baseline gap-2">
                        <span className="font-mono text-[var(--color-accent)]">
                          Email:
                        </span>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="flex-1 bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-text-primary)] p-2 font-mono focus:outline-none focus:border-[var(--color-accent)]"
                        />
                      </label>
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2">
                      <label className="flex flex-col gap-2">
                        <span className="font-mono text-[var(--color-accent)]">
                          Message:
                        </span>
                        <textarea
                          rows={6}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-full bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-text-primary)] p-2 font-mono focus:outline-none focus:border-[var(--color-accent)]"
                        />
                      </label>
                    </div>

                    {/* Error Message */}
                    {error && (
                      <div className="text-red-500 font-mono text-sm">
                        Error: {error}
                      </div>
                    )}


                    {/* Submit Button */}
                    <div className="pt-2">
                      <PixelButton
                        type="submit"
                        variant="primary"
                        loading={loading}
                      >
                        {loading ? 'Sending...' : 'Send Message'}
                      </PixelButton>
              </div>
                  </form>
                )}
                  </div>

              {/* Contact Info */}
              <div className="lg:w-72 order-1 lg:order-2">
                <div className="border-2 border-[var(--color-border)] bg-[var(--color-surface)] p-6 space-y-8">
                  {/* ASCII Art */}
                  <div className="flex justify-center">
                    <ASCIIArt
                      art="terminal"
                      color="var(--color-accent)"
                      className="text-xs"
                    />
                      </div>
                  <div>
                    <h3 className="font-bold text-[var(--color-accent)] mb-3">
                      Contact Methods
                    </h3>
                    {/* Email */}
                    <div className="mb-4">
                      <div className="font-mono text-xs text-[var(--color-text-dim)] mb-1">
                        $ echo $EMAIL
                      </div>
                      <div className="group relative pl-4 flex items-center">
                        <span className="font-mono text-sm text-[var(--color-text-secondary)]">
                          majdalali@proton.com
                        </span>
                        <button
                          onClick={() => copyToClipboard('majdalali@proton.com')}
                          className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                          title="Copy to clipboard"
                        >
                          <svg className="w-4 h-4 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    {/* Location */}
                    <div className="mb-4">
      <div className="font-mono text-xs text-[var(--color-text-dim)] mb-1">
                        $ echo $LOCATION
      </div>
                      <div className="pl-4">
                        <span className="font-mono text-sm text-[var(--color-text-secondary)]">
                          Homs, Syria
        </span>
      </div>
                    </div>

                    {/* Availability */}
                    <div className="mb-4">
                      <div className="font-mono text-xs text-[var(--color-text-dim)] mb-1">
                        $ echo $AVAILABILITY
                      </div>
                      <div className="pl-4">
                        <span className="font-mono text-sm text-[var(--color-accent-secondary)]">
                          Available for work
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div>
                    <h3 className="font-bold text-[var(--color-accent)] mb-3">
                      Connect
                    </h3>

                    <div className="space-y-2">
                      <SocialLink
                        name="GitHub"
                        url="https://github.com/majdalali"
                        command="open-github.sh"
                      />

                      <SocialLink
                        name="LinkedIn"
                        url="https://linkedin.com/in/atmajdalali"
                        command="open-linkedin.sh"
                      />


                        <Tooltip>
                            <TooltipTrigger><SocialLink
                                name="Twitter"
                                disabled={true}
                                url="https://twitter.com/yourusername"
                                command="open-twitter.sh"
                            /></TooltipTrigger>
                            <TooltipContent>
                                <p>Not an Elon Fan</p>
                            </TooltipContent>
                        </Tooltip>

                      <SocialLink
                        name="Personal Blog"
                        disabled={true}
                        url="https://yourblog.com"
                        command="open-blog.sh"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TerminalWindow>
    </div>
  );
}

function SocialLink({ name, url, command, disabled = false }: { name: string; url: string; command: string, disabled?: boolean }) {
  if (disabled) {
    return (
      <div className="block  p-2 " >
          <div className="font-mono text-xs text-[var(--color-text-dim)]  mb-1">
              $ ./{command}
          </div>
          <div className="pl-4 flex items-center">
          <span className="font-mono text-sm text-gray-500">
          {name}
        </span>
          <svg className="w-3 h-3 ml-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
          </div>
      </div>
    );
}

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group hover:bg-[var(--color-background)] transition-colors p-2"
    >
      <div className="font-mono text-xs text-[var(--color-text-dim)] mb-1">
        $ ./{command}
      </div>
      <div className="pl-4 flex items-center">
        <span className="font-mono text-sm text-[var(--color-accent)] group-hover:text-[var(--color-accent-secondary)] transition-colors">
          {name}
        </span>
        <svg className="w-3 h-3 ml-2 text-[var(--color-accent)] group-hover:text-[var(--color-accent-secondary)] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
        </svg>
      </div>
    </a>
  );
}
