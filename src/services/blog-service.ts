export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  authorRole: string;
  authorImage: string;
  category: string;
  imageUrl: string;
  content: string;
  tags: string[];
  relatedPosts: string[];
}

// Example blog post database
const blogPostsData: Record<string, BlogPost> = {
  'lucky-exchange-b2b-platform-guide': {
    id: 'lucky-exchange-b2b-platform-guide',
    title: 'Lucky Exchange: The Ultimate B2B Sports Trading Platform',
    excerpt: 'Looking for a reliable B2B sports trading platform? Lucky Exchange offers real-time odds, fast settlements, and seamless API integration for bookmakers and operators. Discover how it can enhance your sportsbook business today!',
    date: '2024-03-07',
    author: 'Lucky Exchange Team',
    authorRole: 'B2B Sports Trading Experts',
    authorImage: '/images/blog/authors/Lucky Exchange.png',
    category: 'Sports Trading',
    imageUrl: '/images/blog/Designer (47).jpeg',
    content: `
      <div class="blog-content">
        <section class="intro-section mb-8">
          <h2 class="text-2xl font-bold mb-4">What is Lucky Exchange?</h2>
          <p class="text-base leading-relaxed mb-6">Lucky Exchange is a cutting-edge B2B sports trading platform designed for bookmakers, betting operators, and sports trading businesses. It provides real-time odds, automated settlements, and seamless API integration, making it the ideal solution for businesses looking to optimize their sports betting operations.</p>
        </section>
        
        <section class="features-section mb-8">
          <h2 class="text-2xl font-bold mb-4">Why Choose Lucky Exchange?</h2>
          <ul class="feature-list space-y-3">
            <li class="flex items-start">
              <span class="feature-icon mr-2">🏆</span>
              <div>
                <strong>Best Real-Time Odds</strong> – Industry-leading pricing for accurate and competitive betting.
              </div>
            </li>
            <li class="flex items-start">
              <span class="feature-icon mr-2">⚡</span>
              <div>
                <strong>Fast Settlements</strong> – Instant results with rolling settlements to enhance liquidity.
              </div>
            </li>
            <li class="flex items-start">
              <span class="feature-icon mr-2">🔄</span>
              <div>
                <strong>99% Market Uptime</strong> – Auto-adjusted odds and minimal closures for seamless trading.
              </div>
            </li>
            <li class="flex items-start">
              <span class="feature-icon mr-2">📈</span>
              <div>
                <strong>Scalable B2B API Solutions</strong> – Custom API for smooth sportsbook integration.
              </div>
            </li>
            <li class="flex items-start">
              <span class="feature-icon mr-2">🎯</span>
              <div>
                <strong>Comprehensive Sports Coverage</strong> – Cricket, Football, Tennis, Basketball, Kabaddi & more.
              </div>
            </li>
            <li class="flex items-start">
              <span class="feature-icon mr-2">🔥</span>
              <div>
                <strong>24/7 Trading Support</strong> – Reliable infrastructure and risk management.
              </div>
            </li>
          </ul>
        </section>
        
        <section class="transformation-section mb-8">
          <h2 class="text-2xl font-bold mb-4">📊 How Lucky Exchange Transforms B2B Sports Trading</h2>
          
          <div class="subsection mb-6">
            <h3 class="text-xl font-semibold mb-3">1️⃣ Real-Time Odds & Competitive Pricing</h3>
            <p class="text-base leading-relaxed mb-4">One of the key challenges for bookmakers and operators is maintaining accurate and competitive odds. Lucky Exchange leverages advanced algorithms and real-time data feeds to provide the best odds across multiple sports, ensuring your platform remains competitive.</p>
            
            <div class="benefits-box bg-gray-50 p-4 rounded-md mb-4">
              <p class="font-semibold mb-2">Key Benefits:</p>
              <ul class="list-disc pl-5 space-y-1">
                <li>✔ Real-time data updates for precise odds calculation</li>
                <li>✔ Dynamic market adjustments to optimize profitability</li>
                <li>✔ Wide range of pre-match and in-play betting markets</li>
              </ul>
            </div>
          </div>
          
          <div class="subsection mb-6">
            <h3 class="text-xl font-semibold mb-3">2️⃣ Fast & Automated Settlements</h3>
            <p class="text-base leading-relaxed mb-4">Speed and efficiency are critical in sports trading. Lucky Exchange ensures instant settlement of bets, reducing delays and improving user satisfaction.</p>
            
            <div class="benefits-box bg-gray-50 p-4 rounded-md mb-4">
              <p class="font-semibold mb-2">Settlement Features:</p>
              <ul class="list-disc pl-5 space-y-1">
                <li>✔ Rolling settlements for continuous liquidity</li>
                <li>✔ Automated market updates within 10 seconds after key events</li>
                <li>✔ Secure and transparent transaction processing</li>
              </ul>
            </div>
          </div>
          
          <div class="subsection mb-6">
            <h3 class="text-xl font-semibold mb-3">3️⃣ Scalable API Integration for Bookmakers & Operators</h3>
            <p class="text-base leading-relaxed mb-4">Integrating a reliable sports trading API is crucial for B2B businesses. Lucky Exchange provides a customizable and scalable API, allowing operators to integrate odds, markets, and settlements effortlessly.</p>
            
            <div class="benefits-box bg-gray-50 p-4 rounded-md mb-4">
              <p class="font-semibold mb-2">API Capabilities:</p>
              <ul class="list-disc pl-5 space-y-1">
                <li>✔ Seamless sportsbook integration</li>
                <li>✔ Customizable market offerings</li>
                <li>✔ Advanced exposure management</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section class="sports-coverage-section mb-8">
          <h2 class="text-2xl font-bold mb-4">⚽ Wide Sports Coverage & Market Depth</h2>
          <p class="text-base leading-relaxed mb-4">Lucky Exchange offers a diverse range of sports and betting markets, including:</p>
          
          <div class="sport-box mb-5">
            <h3 class="text-xl font-semibold mb-3">🏏 Cricket Trading</h3>
            <ul class="list-disc pl-5 space-y-1">
              <li>Over 3,250+ live matches annually</li>
              <li>150+ betting markets, including Match Odds, Fancy Bets, and Premium Trading</li>
              <li>Early market openings and top in-play odds</li>
            </ul>
          </div>
          
          <div class="sport-box mb-5">
            <h3 class="text-xl font-semibold mb-3">⚽ Football, Tennis, Basketball & Kabaddi</h3>
            <ul class="list-disc pl-5 space-y-1">
              <li>Comprehensive pre-match and live markets</li>
              <li>Competitive odds for major leagues and tournaments</li>
              <li>24/7 virtual sports betting opportunities</li>
            </ul>
          </div>
        </section>
        
        <section class="integration-section mb-8">
          <h2 class="text-2xl font-bold mb-4">🔗 How to Integrate Lucky Exchange into Your Platform</h2>
          
          <div class="step-box mb-4">
            <h3 class="text-xl font-semibold mb-2">Step 1: Contact Our Team</h3>
            <p class="text-base leading-relaxed flex items-center">
              <span class="mr-2">📩</span> Reach out for a demo and consultation to explore the best solutions for your business.
            </p>
          </div>
          
          <div class="step-box mb-4">
            <h3 class="text-xl font-semibold mb-2">Step 2: API Integration & Setup</h3>
            <p class="text-base leading-relaxed flex items-center">
              <span class="mr-2">🔧</span> Our team will assist you with seamless API integration tailored to your sportsbook needs.
            </p>
          </div>
          
          <div class="step-box mb-4">
            <h3 class="text-xl font-semibold mb-2">Step 3: Go Live & Optimize</h3>
            <p class="text-base leading-relaxed flex items-center">
              <span class="mr-2">🚀</span> Launch your sports trading operations with real-time support and continuous updates.
            </p>
          </div>
        </section>
        
        <section class="faq-section mb-8">
          <h2 class="text-2xl font-bold mb-4">🔍 FAQs About Lucky Exchange</h2>
          
          <div class="faq-item mb-4">
            <h3 class="text-xl font-semibold mb-2">Is Lucky Exchange suitable for small operators?</h3>
            <p class="text-base leading-relaxed">Yes! Our scalable API solutions cater to both small and large operators, ensuring seamless growth.</p>
          </div>
          
          <div class="faq-item mb-4">
            <h3 class="text-xl font-semibold mb-2">What payment methods are supported?</h3>
            <p class="text-base leading-relaxed">Lucky Exchange supports INR, PKR, BDT, NPR, LKR, and other major currencies.</p>
          </div>
          
          <div class="faq-item mb-4">
            <h3 class="text-xl font-semibold mb-2">How secure is Lucky Exchange?</h3>
            <p class="text-base leading-relaxed">We use high-end encryption, risk management tools, and secure IT infrastructure to ensure a stable and safe trading environment.</p>
          </div>
        </section>
        
        <section class="conclusion-section">
          <h2 class="text-2xl font-bold mb-4">📝 Conclusion: Elevate Your Sportsbook Business with Lucky Exchange</h2>
          <p class="text-base leading-relaxed mb-4">Lucky Exchange is redefining B2B sports trading with its real-time odds, fast settlements, and seamless API integration. Whether you're a bookmaker or operator, our cutting-edge solutions ensure you stay ahead in the competitive sports betting industry.</p>
          
          <div class="cta-box bg-primary/10 p-4 rounded-md text-center">
            <p class="font-bold text-lg mb-2">🚀 Get Started Today!</p>
            <p class="text-base">Contact us to explore how Lucky Exchange can enhance your sports trading business.</p>
          </div>
        </section>
      </div>
    `,
    tags: ['B2B Sports Trading', 'Bookmakers', 'Sports Betting API', 'Real-Time Odds', 'API Integration'],
    relatedPosts: ['ultimate-b2b-sports-trading-platform']
  },
  'ultimate-b2b-sports-trading-platform': {
    id: 'ultimate-b2b-sports-trading-platform',
    title: 'Lucky Exchange: The Ultimate B2B Sports Trading Platform',
    excerpt: 'Discover how Lucky Exchange is transforming B2B sports trading with real-time odds, fast settlements, and seamless API integration.',
    date: '2024-03-06',
    author: 'Lucky Exchange Team',
    authorRole: 'B2B Sports Trading Experts',
    authorImage: '/images/blog/authors/Lucky Exchange.png',
    category: 'Sports Trading',
    imageUrl: '/images/blog/Designer (46).jpeg',
    content: `
      <div class="blog-content">
        <section class="intro-section mb-8">
          <p class="text-base leading-relaxed mb-6">In the fast-paced world of online sports trading, having a reliable and efficient platform is crucial. 
          Lucky Exchange is redefining the B2B sports trading industry with cutting-edge technology, real-time market updates, and scalable solutions for bookmakers and operators.</p>
        </section>
        
        <section class="features-section mb-8">
          <h2 class="text-2xl font-bold mb-4">Why Lucky Exchange Stands Out in B2B Sports Trading</h2>
          <p class="text-base leading-relaxed mb-4">Lucky Exchange offers a seamless and efficient solution for B2B operators looking to maximize profitability and provide their users with the best betting experience.</p>
          
          <h3 class="text-xl font-semibold mb-3">Key Advantages</h3>
          <p class="text-base leading-relaxed mb-3">Here's why Lucky Exchange is the preferred choice for sports trading:</p>
          
          <ul class="list-disc pl-5 space-y-2 mb-6">
            <li>
              <strong>Real-Time Odds:</strong> Industry-leading pricing models ensure accurate and competitive odds.
            </li>
            <li>
              <strong>Fast Settlements:</strong> Instant results with rolling settlements for a smooth trading experience.
            </li>
            <li>
              <strong>99% Market Uptime:</strong> Auto-adjusted odds and minimal closures for uninterrupted betting.
            </li>
            <li>
              <strong>Comprehensive Sports Coverage:</strong> Cricket, football, tennis, basketball, and kabaddi.
            </li>
            <li>
              <strong>Scalable B2B API Solutions:</strong> Easy integration with existing sportsbook platforms.
            </li>
          </ul>
        </section>
        
        <section class="api-section mb-8">
          <h2 class="text-2xl font-bold mb-4">Seamless API Integration for Bookmakers & Operators</h2>
          <p class="text-base leading-relaxed mb-6">Our robust API allows bookmakers and operators to integrate Lucky Exchange's features effortlessly, enabling customized market offerings and optimized exposure management.</p>
        </section>
        
        <section class="conclusion-section">
          <h2 class="text-2xl font-bold mb-4">Conclusion</h2>
          <p class="text-base leading-relaxed mb-4">Lucky Exchange is revolutionizing B2B sports trading by delivering real-time odds, fast settlements, and scalable solutions. 
          Whether you are a bookmaker or an operator, our platform provides everything you need for a seamless and profitable trading experience.</p>
          
          <div class="cta-box bg-primary/10 p-4 rounded-md text-center mt-6">
            <p class="font-bold text-lg">Ready to transform your sports trading business?</p>
            <p class="text-base">Contact us today to learn more about Lucky Exchange.</p>
          </div>
        </section>
      </div>
    `,
    tags: ['B2B Sports Trading', 'Bookmakers', 'Sports Betting API'],
    relatedPosts: ['lucky-exchange-b2b-platform-guide']
  }
};

export class BlogService {
  /**
   * 获取所有博客文章
   */
  static getAllPosts(): BlogPost[] {
    return Object.values(blogPostsData).sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }

  /**
   * 按ID获取博客文章
   */
  static getPostById(id: string): BlogPost | null {
    return blogPostsData[id] || null;
  }

  /**
   * 获取相关文章
   */
  static getRelatedPosts(postId: string): BlogPost[] {
    const post = this.getPostById(postId);
    if (!post) return [];
    
    return post.relatedPosts
      .map(id => this.getPostById(id))
      .filter((post): post is BlogPost => post !== null);
  }

  /**
   * 按标签获取文章
   */
  static getPostsByTag(tag: string): BlogPost[] {
    return this.getAllPosts().filter(post => 
      post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
    );
  }

  /**
   * 按作者获取文章
   */
  static getPostsByAuthor(author: string): BlogPost[] {
    return this.getAllPosts().filter(post => 
      post.author.toLowerCase() === author.toLowerCase()
    );
  }

  /**
   * 按类别获取文章
   */
  static getPostsByCategory(category: string): BlogPost[] {
    return this.getAllPosts().filter(post => 
      post.category.toLowerCase() === category.toLowerCase()
    );
  }

  /**
   * 获取所有标签
   */
  static getAllTags(): string[] {
    const tagsSet = new Set<string>();
    
    this.getAllPosts().forEach(post => {
      post.tags.forEach(tag => tagsSet.add(tag));
    });
    
    return Array.from(tagsSet);
  }

  /**
   * 获取所有类别
   */
  static getAllCategories(): string[] {
    const categoriesSet = new Set<string>();
    
    this.getAllPosts().forEach(post => {
      categoriesSet.add(post.category);
    });
    
    return Array.from(categoriesSet);
  }

  /**
   * 搜索博客文章
   */
  static searchPosts(query: string): BlogPost[] {
    const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
    
    if (searchTerms.length === 0) return [];
    
    return this.getAllPosts().filter(post => {
      const searchableContent = `
        ${post.title.toLowerCase()} 
        ${post.excerpt.toLowerCase()} 
        ${post.content.toLowerCase()}
        ${post.tags.join(' ').toLowerCase()}
        ${post.category.toLowerCase()}
        ${post.author.toLowerCase()}
      `;
      
      return searchTerms.some(term => searchableContent.includes(term));
    });
  }
} 