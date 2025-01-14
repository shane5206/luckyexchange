import Image from "next/image";

export function SocialProof() {
  return (
    <section className="container">
      <h2 className="text-center font-heading text-4xl font-bold tracking-tight">Partner Site</h2>
      <div className="grid grid-cols-4">
        <a href="https://www.luckykismat.com/" className="group">
          <Image
            alt="Partner Vendors Logo"
            src="/images/Partner-Vendors-Logo1.png"
            width={200}
            height={200}
          />
        </a>
        <a href="https://www.gugobet.com/" target="_blank" className="group">
          <img src="/images/Partner-Vendors-Logo-02.png" width={200} height={200} />
        </a>
        <a href="https://www.vegas999.live/" className="block">
          <Image
            alt="Partner Vendors Logo"
            src="/images/Partner-Vendors-Logo-03.png"
            width={200}
            height={200}
          />
        </a>
        <a href="https://www.ipl365s.com/?uagt=lkspush8898&path" className="group">
          <Image
            alt="Partner Vendors Logo"
            src="/images/Partner-Vendors-Logo-04.png"
            width={200}
            height={200}
          />
        </a>
        <a href="https://www.jeetwin.com/" className="group">
          <Image
            alt="Partner Vendors Logo"
            src="/images/Partner-Vendors-Logo-05.png"
            width={200}
            height={200}
          />
        </a>
        <a href="https://gcrics.com/" className="block">
          <img
            alt="Partner Vendors Logo"
            src="/images/Partner-Vendors-Logo-06.png"
            width={200}
            height={200}
          />
        </a>
        <a href="https://ganga7.com/" className="block">
          <Image
            alt="Partner Vendors Logo"
            src="/images/Partner-Vendors-Logo-07.png"
            width={200}
            height={200}
          />
        </a>
        <a href="https://raja-147.com/" className="block">
          <Image
            alt="Partner Vendors Logo"
            src="/images/Partner-Vendors-Logo-08.png"
            width={200}
            height={200}
          />
        </a>
      </div>
    </section>
  );
}
