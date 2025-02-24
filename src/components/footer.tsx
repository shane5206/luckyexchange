export function Footer() {
  return (
    <footer className="bg-black/5 mt-10 py-10">
      <div className="container flex flex-col gap-8">
        {/* Social Links */}
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-center text-sm">© 2024 Lucky Exchange. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a 
              href="https://share.evernote.com/note/537085fd-7fff-a727-5e6c-3d6b0d083ee1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <svg viewBox="0 0 24 24" className="size-5">
                <path
                  d="M7.5 18C4.46 18 2 15.54 2 12.5S4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v1.5H9.5c-.55 0-1 .45-1 1s.45 1 1 1H18c1.38 0 2.5-1.12 2.5-2.5S19.38 9.5 18 9.5H7.5c-2.21 0-4 1.79-4 4s1.79 4 4 4H17V19H7.5z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a 
              href="https://x.com/luckysport81583" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <svg viewBox="0 0 248 204" className="size-5">
                <path
                  d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a 
              href="https://www.youtube.com/@CricketFAN-l7d" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <svg viewBox="0 0 28.57 20" className="size-5">
                <g>
                  <path
                    d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z"
                    fill="currentColor"
                  />
                  <path
                    d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z"
                    fill="currentColor"
                    className="text-background"
                  />
                </g>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/sportfanindia_9001/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <svg viewBox="0 0 24 24" className="size-5">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <a href="https://jdbaplus.com/kyc-policy/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            KYC Policy
          </a>
          <a href="https://jdbaplus.com/responsible-gambling/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            Responsible Gambling
          </a>
          <a href="https://jdbaplus.com/self-exclusion-policy/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            Self Exclusion Policy
          </a>
          <a href="https://jdbaplus.com/terms-and-conditions/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            Terms and Conditions
          </a>
          <a href="https://jdbaplus.com/underage-gaming-policy/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            Underage Gaming Policy
          </a>
        </div>

        {/* Legal Disclaimer */}
        <div className="text-xs text-muted-foreground max-w-4xl mx-auto text-center space-y-2">
          <p>
            Luckysports.cloud is owned and operated by Block Treasure N.V. registration number: 162195, registered address: Zuikertuintjeweg Z/N (Zuikertuin Tower), Willemstad, Curaçao. Contact us: xxx@xxx.xxx.
          </p>
          <p>
            Luckysports.cloud is licensed and regulated by the Government of the Autonomous Island of Anjouan, Union of Comoros and operates under License No. ALSI-202502017-FI1. Luckysports.cloud has passed all regulatory compliance and is legally authorized to conduct gaming operations for any and all games of chance and wagering.
          </p>
        </div>
      </div>
    </footer>
  );
}
