import Image from "next/image";

export function Section2() {
  return (
    <div className="container py-10 space-y-10">
      <div>
        <h2 id="platform" className="font-heading text-4xl text-center font-bold tracking-tight">
          All-in-one platform
        </h2>
      </div>
      <div id="reputation" className="container flex flex-col items-center gap-10">
        <p className="text-lg max-w-2xl text-center text-muted-foreground">
          Drawing on deep industry knowledge, Lucky Exchange delivers bespoke solutions for sports
          betting operators across the spectrum. We are dedicated to providing highly efficient and
          cost-effective betting services, tailored to meet the distinct requirements of each
          client.
        </p>
      </div>
      <div id="counter" data-aos="fade-up" className="grid grid-cols-2 gap-4 mt-8 xl:grid-cols-3">
        <div className="flex flex-col items-center p-4">
          <div className="mb-3">
            <Image 
              alt="Online Customer Service" 
              src="/images/customer-care.png" 
              width={100} 
              height={100}
            />
          </div>
          <p className="text-sm text-muted-foreground text-center mb-2">Online Customer Service</p>
          <div className="text-2xl font-bold text-primary">
            <span>24/7</span>
          </div>
        </div>
        <div className="flex flex-col items-center p-4">
          <div className="mb-3">
            <Image 
              alt="Live Sporting Events Year Round" 
              src="/images/football-tv.png" 
              width={100} 
              height={100}
            />
          </div>
          <p className="text-sm text-muted-foreground text-center mb-2">Live Sports Events</p>
          <div className="text-2xl font-bold text-primary">
            <span>3,250</span>
          </div>
        </div>
        <div className="flex flex-col items-center p-4">
          <div className="mb-3">
            <Image 
              alt="Sports Categories" 
              src="/images/sports.png" 
              width={100} 
              height={100}
            />
          </div>
          <p className="text-sm text-muted-foreground text-center mb-2">In-play Gaming Types</p>
          <div className="text-2xl font-bold text-primary">
            <span>150+</span>
          </div>
        </div>
        <div className="flex flex-col items-center p-4">
          <div className="mb-3">
            <Image 
              alt="Professional Trading Team" 
              src="/images/price-growth.png" 
              width={100} 
              height={100}
            />
          </div>
          <p className="text-sm text-muted-foreground text-center mb-2">Fancy markets</p>
          <div className="text-2xl font-bold text-primary">
            <span>57+</span>
          </div>
        </div>
        <div className="flex flex-col items-center p-4">
          <div className="mb-3">
            <Image 
              alt="Simultaneous Live Sporting Events" 
              src="/images/football-field-(2).png" 
              width={100} 
              height={100}
            />
          </div>
          <p className="text-sm text-muted-foreground text-center mb-2">
            Pre-Match Events per year
          </p>
          <div className="text-2xl font-bold text-primary">
            <span>3,600+</span>
          </div>
        </div>
        <div className="flex flex-col items-center p-4">
          <div className="mb-3">
            <Image 
              alt="Other Live Sporting Events Every Month" 
              src="/images/calendar-check.png" 
              width={100} 
              height={100}
            />
          </div>
          <p className="text-sm text-muted-foreground text-center mb-2">Virtual Events per year</p>
          <div className="text-2xl font-bold text-primary">
            <span>2,000+</span>
          </div>
        </div>
      </div>
    </div>
  );
}