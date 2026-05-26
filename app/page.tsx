'use client'
import Script from 'next/script'

type WindowFunction = (...args: unknown[]) => unknown

type WindowFunctionMap = Record<string, WindowFunction | undefined>

/* Helper: call a window-attached function by name */
const c = (fn: string, ...args: unknown[]) => () => {
  if (typeof window !== 'undefined') {
    const target = window as unknown as WindowFunctionMap
    const callback = target[fn]
    callback?.(...args)
  }
}
/* Helper: pass the native event */
const ce = (fn: string) => (e: React.SyntheticEvent) => {
  if (typeof window !== 'undefined') {
    const target = window as unknown as WindowFunctionMap
    const callback = target[fn]
    callback?.(e.nativeEvent)
  }
}

export default function Home() {
  return (
    <>
      {/* ── LOADER ── */}
      <div id="loader">
        <div className="loader-ring"></div>
        <div className="loader-ring2"></div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="img/LOGO.png" alt="AMPO Realty" className="loader-logo" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
        <div className="loader-text">
          <span>A</span><span>M</span><span>P</span><span>O</span>
          <span>&nbsp;</span>
          <span>R</span><span>E</span><span>A</span><span>L</span><span>T</span><span>Y</span>
        </div>
      </div>

      {/* ── FAVORITES DRAWER OVERLAY ── */}
      <div className="fav-drawer-overlay" id="favDrawerOverlay" onClick={c('closeFavDrawer')}></div>

      {/* ── FAVORITES DRAWER ── */}
      <div id="favDrawer">
        <div className="fav-drawer-header">
          <div className="fav-drawer-title">
            <span className="heart">♥</span> My Favorites
          </div>
          <button className="fav-drawer-close" onClick={c('closeFavDrawer')}>✕</button>
        </div>
        <div className="fav-drawer-actions">
          <div className="fav-drawer-count"><span id="favDrawerCount">0</span> saved properties</div>
          <button className="btn-sm btn-ghost" style={{fontSize:'12px',padding:'5px 12px'}} onClick={c('clearAllFavs')}>Clear All</button>
        </div>
        <div className="fav-drawer-body" id="favDrawerBody"></div>
      </div>

      {/* ── NAVBAR ── */}
      <nav id="navbar">
        <button className="nav-brand" onClick={c('showPage','home')}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="img/LOGO.png" alt="AMPO Realty" className="nav-logo" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
          <span className="nav-name">AMPO <span>REALTY</span></span>
        </button>
        <div className="nav-links" id="navLinks">
          <button className="nav-link active" data-page="home" onClick={c('showPage','home')}>Home</button>
          <button className="nav-link" data-page="properties" onClick={c('showPage','properties')}>Properties</button>
          <button className="nav-link" data-page="about" onClick={c('showPage','about')}>About</button>
          <button className="nav-link" data-page="contact" onClick={c('showPage','contact')}>Contact</button>
          <button className="nav-cta" onClick={c('showPage','agent')}>Agent Portal</button>
        </div>
        <div className="nav-right">
          <button className="nav-theme-btn" id="themeToggle" onClick={c('toggleTheme')} title="Toggle theme">🌙</button>
          <button className="nav-fav-btn" id="navFavBtn" onClick={c('openFavDrawer')} title="My Favorites">
            ♥
            <span className="nav-fav-count" id="navFavCount">0</span>
          </button>
          <div style={{position:'relative'}}>
            <button className="nav-user-btn" id="navUserBtn" onClick={c('toggleUserDropdown')}>
              <span id="navUserAvatar" className="nav-user-avatar" style={{display:'none'}}>?</span>
              <span id="navUserLabel">👤 Login</span>
            </button>
            <div className="user-dropdown" id="userDropdown">
              <div className="user-dd-header">
                <div className="user-dd-name" id="ddUserName">—</div>
                <div className="user-dd-email" id="ddUserEmail">—</div>
              </div>
              <button className="user-dd-item" onClick={c('openFavDrawerFromDD')}>
                ♥ My Favorites <span id="ddFavCount" style={{marginLeft:'auto',background:'rgba(255,77,106,.15)',color:'#FF4D6A',borderRadius:'10px',padding:'1px 7px',fontSize:'11px'}}>0</span>
              </button>
              <div className="user-dd-sep"></div>
              <button className="user-dd-item danger" onClick={c('logoutUser')}>⇠ Sign Out</button>
            </div>
          </div>
          <button className="nav-hamburger" id="hamburger" onClick={c('toggleMenu')}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* ════ PAGE: HOME ════ */}
      <div id="page-home" className="page active">

        {/* HERO */}
        <section id="hero">
          <video autoPlay muted loop playsInline id="hero-video">
            <source src="img/new-bg.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
          <div className="hero-grain"></div>
          <div className="hero-content">
            <div className="hero-badge fade-up">
              <span className="hero-badge-dot"></span>
              Premium Real Estate · Philippines
            </div>
            <h1 className="hero-title fade-up fade-up-1">
              <span className="line1">Your Partner in Property.</span>
              <span className="line2">Your Guide for Life.</span>
            </h1>
            <p className="hero-sub fade-up fade-up-2">
              AMPO Realty connects buyers, sellers, and renters with exceptional properties across Cebu and beyond. Discover your perfect space with confidence.
            </p>
            <div className="hero-btns fade-up fade-up-3">
              <button className="btn-primary" onClick={c('showPage','properties')}>Browse Properties</button>
              <button className="btn-outline" onClick={c('showPage','contact')}>Talk to an Agent</button>
            </div>
            <div className="hero-stats fade-up fade-up-4" id="heroStats">
              <div>
                <span className="stat-num" data-target="500" data-suffix="+">500+</span>
                <div className="stat-lbl">Properties Listed</div>
              </div>
              <div>
                <span className="stat-num" data-target="200" data-suffix="+">200+</span>
                <div className="stat-lbl">Happy Clients</div>
              </div>
              <div>
                <span className="stat-num" data-target="10" data-suffix="+">10+</span>
                <div className="stat-lbl">Years Experience</div>
              </div>
              <div>
                <span className="stat-num" data-target="98" data-suffix="%">98%</span>
                <div className="stat-lbl">Client Satisfaction</div>
              </div>
            </div>
          </div>
          <div className="hero-scroll">
            <span>Scroll</span>
            <div className="hero-scroll-line"></div>
          </div>
        </section>

        {/* MARQUEE BAND */}
        <div className="marquee-band">
          <div className="marquee-track" id="marqueeTrack"></div>
        </div>

        {/* FEATURED */}
        <div className="section">
          <div style={{textAlign:'center',marginBottom:'36px'}}>
            <div className="section-badge">✦ Featured Listings</div>
            <h2 className="section-title">Hand-picked <span>Properties</span></h2>
            <p className="section-sub">Our agents&apos; most-loved, carefully curated selections</p>
          </div>
          <div className="slider-wrapper">
            <button className="slider-btn" id="sliderPrev" onClick={c('slideFeatured',-1)}>&#8249;</button>
            <div className="slider-track-outer">
              <div className="slider-track" id="featuredGrid"></div>
            </div>
            <button className="slider-btn" id="sliderNext" onClick={c('slideFeatured',1)}>&#8250;</button>
          </div>
          <div className="slider-dots" id="sliderDots"></div>
          <div className="view-all-wrap">
            <button className="btn-view-all" onClick={c('showPage','properties')}>View All Properties &rarr;</button>
          </div>
        </div>

        {/* CATEGORIES */}
        <div className="cat-section">
          <div style={{maxWidth:'1240px',margin:'0 auto',padding:'0 1.5rem'}}>
            <div className="section-badge">✦ Browse by Type</div>
            <h2 className="section-title">Find Your <span>Property Type</span></h2>
          </div>
          <div className="cat-grid" id="catGrid"></div>
        </div>

        {/* MARKET STATISTICS */}
        <div className="stats-section">
          <div className="stats-inner">
            <div className="section-badge">✦ Market Pulse</div>
            <h2 className="section-title">Real Estate <span>Market Insights</span></h2>
            <p className="section-sub">Live data from Cebu&apos;s property market</p>
            <div className="stats-grid" id="marketStatsGrid"></div>
          </div>
        </div>

        {/* TESTIMONIALS */}
        <div className="testi-section">
          <div className="testi-inner">
            <div style={{textAlign:'center',marginBottom:'8px'}}>
              <div className="section-badge">✦ Client Stories</div>
              <h2 className="section-title">What Our <span>Clients Say</span></h2>
            </div>
            <div className="testi-grid" id="testiGrid"></div>
          </div>
        </div>

        {/* AWARDS */}
        <div className="awards-band">
          <div className="awards-inner">
            <div style={{textAlign:'center',marginBottom:'8px'}}>
              <div className="section-badge">✦ Recognition</div>
              <h2 className="section-title">Awards &amp; <span>Achievements</span></h2>
            </div>
            <div className="awards-grid" id="awardsGrid"></div>
          </div>
        </div>

        {/* PROPERTY ALERT CTA */}
        <div style={{maxWidth:'1240px',margin:'0 auto',padding:'3rem 1.5rem'}}>
          <div className="alert-cta">
            <div className="alert-cta-text">
              <h3>🔔 Get Property Alerts</h3>
              <p>Be the first to know when new listings match your criteria. Never miss out on your dream property.</p>
            </div>
            <div className="alert-cta-form">
              <input className="alert-input" id="alertEmail" type="email" placeholder="Your email address" />
              <button className="btn-primary" onClick={c('subscribeAlert')}>Subscribe Free</button>
            </div>
          </div>
        </div>

      </div>{/* end #page-home */}

      {/* ════ PAGE: PROPERTIES ════ */}
      <div id="page-properties" className="page">
        <div className="section">
          <h2 className="section-title">All <span>Properties</span></h2>
          <p className="section-sub" style={{marginBottom:'24px'}}>Browse our complete listing of available properties</p>
          <div className="filter-bar">
            <input className="filter-input" id="searchInput" type="text" placeholder="🔍  Search by name, address..." onInput={c('renderProperties')} />
            <select className="filter-select" id="typeFilter" onChange={c('renderProperties')}>
              <option value="All">All Types</option>
              <option>House &amp; Lot</option>
              <option>Condo</option>
              <option>Villa</option>
              <option>Townhouse</option>
              <option>Commercial</option>
            </select>
            <select className="filter-select" id="statusFilter" onChange={c('renderProperties')}>
              <option value="All">All Status</option>
              <option>For Sale</option>
              <option>For Rent</option>
            </select>
            <select className="filter-select" id="sortFilter" onChange={c('renderProperties')}>
              <option value="default">Sort: Default</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
              <option value="area-desc">Area: Largest First</option>
              <option value="beds-desc">Most Bedrooms</option>
            </select>
          </div>
          <div className="prop-count-bar">
            <div className="prop-count-text" id="propCount"></div>
            <div>
              <button className="btn-sm btn-ghost" id="favFilterBtn" onClick={c('toggleFavFilter')} style={{fontSize:'12px',padding:'6px 14px'}}>♥ Favorites Only</button>
            </div>
          </div>
          <div className="prop-grid" id="allPropsGrid"></div>
        </div>
      </div>

      {/* ════ PAGE: ABOUT ════ */}
      <div id="page-about" className="page">
        <div className="section" style={{maxWidth:'960px'}}>
          <div className="about-hero">
            <div className="section-badge">✦ Our Story</div>
            <h2 className="section-title" style={{marginBottom:'1rem'}}>About <span>AMPO Realty</span></h2>
            <p style={{fontSize:'15.5px',color:'var(--text-muted)',lineHeight:'1.85',maxWidth:'700px'}}>
              AMPO Realty is a premier real estate company dedicated to helping Filipinos find their perfect home. Founded with a passion for connecting people with exceptional properties, we have grown to become one of the most trusted names in Cebu&apos;s real estate landscape.
            </p>
          </div>
          <div className="about-grid">
            <div className="about-card"><div className="about-card-title">🎯 Our Mission</div><div className="about-card-text">To make property ownership accessible, transparent, and joyful for every Filipino family through expert guidance and unwavering integrity.</div></div>
            <div className="about-card"><div className="about-card-title">🔭 Our Vision</div><div className="about-card-text">To be the most trusted real estate brand in the Visayas region by 2030, setting the gold standard for excellence in service.</div></div>
            <div className="about-card"><div className="about-card-title">💎 Our Values</div><div className="about-card-text">Integrity, Excellence, Client-First Service, Innovation, and Community. These pillars guide every transaction we make.</div></div>
            <div className="about-card"><div className="about-card-title">🏆 Our Promise</div><div className="about-card-text">Every client deserves premium service, honest advice, and a seamless path to their dream property. We don&apos;t settle, and neither should you.</div></div>
          </div>
          <div className="mt-text">
            <h3>Meet Our <span style={{color:'var(--gold)'}}>Expert Agents</span></h3>
            <p>Experienced professionals committed to your property journey</p>
          </div>
          <div className="agents-grid">
            <div className="agent-card">
              <div className="agent-img-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="img/Kevin.jpg" alt="Mark Kevin Lana" onError={(e) => { (e.target as HTMLImageElement).src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80' }} />
              </div>
              <div className="agent-body"><div className="agent-name">Mark Kevin Lana</div><div className="agent-role">IT Specialist</div><div className="agent-exp">10 years experience</div></div>
            </div>
            <div className="agent-card">
              <div className="agent-img-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="img/Luvydubs.png" alt="Antoneth Rosales" onError={(e) => { (e.target as HTMLImageElement).src='https://images.unsplash.com/photo-1494790108755-2616b612b80c?w=300&q=80' }} />
              </div>
              <div className="agent-body"><div className="agent-name">Antoneth Rosales</div><div className="agent-role">Property Consultant</div><div className="agent-exp">7 years experience</div></div>
            </div>
            <div className="agent-card">
              <div className="agent-img-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="img/Ampo.png" alt="Ma. Eleonor Paubsanon" onError={(e) => { (e.target as HTMLImageElement).src='https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&q=80' }} />
              </div>
              <div className="agent-body"><div className="agent-name">Ma. Eleonor Paubsanon</div><div className="agent-role">Owner / Founder</div><div className="agent-exp">15 years experience</div></div>
            </div>
          </div>
        </div>
      </div>

      {/* ════ PAGE: CONTACT ════ */}
      <div id="page-contact" className="page">
        <div className="section" style={{maxWidth:'900px'}}>
          <div className="section-badge">✦ Reach Out</div>
          <h2 className="section-title">Get in <span>Touch</span></h2>
          <p className="section-sub" style={{marginBottom:'28px'}}>Our team is ready to help you find your perfect property.</p>
          <div className="contact-box" id="contactForm">
            <div className="form-group"><label className="form-label">Full Name *</label><input className="form-input" id="cName" type="text" placeholder="Your full name" /></div>
            <div className="form-group"><label className="form-label">Email Address *</label><input className="form-input" id="cEmail" type="email" placeholder="your@email.com" /></div>
            <div className="form-group"><label className="form-label">Phone Number</label><input className="form-input" id="cPhone" type="tel" placeholder="09XX XXX XXXX" /></div>
            <div className="form-group"><label className="form-label">Message *</label><textarea className="form-input form-textarea" id="cMsg" placeholder="Tell us what you're looking for..."></textarea></div>
            <button className="btn-primary" style={{width:'100%',fontSize:'15px',padding:'14px'}} onClick={c('submitContact')}>Send Message ✉️</button>
          </div>
          <div className="success-box" id="contactSuccess">
            <div className="success-icon"><i className="fas fa-check"></i></div>
            <div className="success-title" id="successName">Message Sent!</div>
            <p className="success-sub">One of our agents will contact you within 24 hours.</p>
            <button className="btn-outline" style={{marginTop:'20px'}} onClick={c('resetContact')}>Send Another</button>
          </div>
          <div className="contact-info-grid">
            <div className="contact-info-card"><div className="contact-info-icon">📍</div><div className="contact-info-label">Office</div><div className="contact-info-val">F. Ramos St., Cebu City</div></div>
            <div className="contact-info-card"><div className="contact-info-icon">📞</div><div className="contact-info-label">Phone</div><div className="contact-info-val">+63 32 555 0100</div></div>
            <div className="contact-info-card"><div className="contact-info-icon">✉️</div><div className="contact-info-label">Email</div><div className="contact-info-val">info@amporealty.ph</div></div>
            <div className="contact-info-card"><div className="contact-info-icon">🕐</div><div className="contact-info-label">Hours</div><div className="contact-info-val">Mon–Sat, 8AM–6PM</div></div>
          </div>
        </div>
      </div>

      {/* ════ PAGE: AGENT PORTAL ════ */}
      <div id="page-agent" className="page">
        <div className="login-wrap" id="agentLogin">
          <div className="login-box">
            <div style={{textAlign:'center',marginBottom:'28px'}}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="img/LOGO.png" alt="AMPO" style={{width:'60px',height:'60px',objectFit:'contain',marginBottom:'14px'}} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
              <h2 style={{fontFamily:'var(--font-head)',fontWeight:800,fontSize:'1.5rem',color:'var(--text)',marginBottom:'6px'}}>Agent Portal</h2>
              <p style={{color:'var(--text-muted)',fontSize:'14px'}}>AMPO Realty — Staff Access</p>
            </div>
            <div className="err-msg" id="loginErr">Incorrect password. Please try again.</div>
            <div className="form-group"><label className="form-label">Password</label><input className="form-input" id="agentPw" type="password" placeholder="Enter agent password" onKeyDown={(e) => { if(e.key==='Enter') c('doLogin')() }} /></div>
            <button className="btn-primary" style={{width:'100%',padding:'13px',fontSize:'15px'}} onClick={c('doLogin')}>Login →</button>
            <p className="login-hint">Default: <strong style={{color:'var(--gold)'}}>ampo2024</strong></p>
          </div>
        </div>
        <div id="agentDashboard" style={{display:'none'}}>
          <div className="agent-wrap">
            <div className="agent-header">
              <div>
                <h2 className="section-title">Agent <span>Dashboard</span></h2>
                <p style={{fontSize:'14px',color:'var(--text-muted)',marginTop:'4px'}}>Manage your property listings</p>
              </div>
              <div className="agent-actions">
                <button className="btn-sm btn-ghost" onClick={c('viewListings')}>📋 All Listings</button>
                <button className="btn-sm btn-gold" onClick={c('openAddForm')}>+ Add Property</button>
                <button className="btn-sm btn-red" onClick={c('doLogout')}>Logout</button>
              </div>
            </div>
            <div className="dash-stats-grid" id="dashStats"></div>
            <div className="alert-success" id="addAlert">✅ Property added successfully!</div>
            <div className="add-form-box" id="addForm">
              <h3 style={{fontFamily:'var(--font-head)',fontWeight:700,fontSize:'1.2rem',color:'var(--gold)',marginBottom:'20px'}}>📝 New Property Listing</h3>
              <div className="add-form-grid">
                <div><label className="form-label">Property Title *</label><input className="form-input" id="fTitle" type="text" placeholder="e.g. Luxury Penthouse" /></div>
                <div><label className="form-label">Address *</label><input className="form-input" id="fAddr" type="text" placeholder="Full address" /></div>
                <div><label className="form-label">Price (₱) *</label><input className="form-input" id="fPrice" type="number" placeholder="e.g. 8500000" /></div>
                <div><label className="form-label">Agent Name *</label><input className="form-input" id="fAgent" type="text" placeholder="Your name" /></div>
                <div><label className="form-label">Bedrooms</label><input className="form-input" id="fBeds" type="number" placeholder="No. of beds" /></div>
                <div><label className="form-label">Bathrooms</label><input className="form-input" id="fBaths" type="number" placeholder="No. of baths" /></div>
                <div><label className="form-label">Area (m²)</label><input className="form-input" id="fArea" type="number" placeholder="Floor area" /></div>
                <div><label className="form-label">Parking Spots</label><input className="form-input" id="fParking" type="number" placeholder="No. of parking" /></div>
                <div><label className="form-label">Image URL</label><input className="form-input" id="fImg" type="url" placeholder="https://..." /></div>
                <div><label className="form-label">Latitude</label><input className="form-input" id="fLat" type="number" placeholder="e.g. 10.3157" step="any" /></div>
                <div><label className="form-label">Longitude</label><input className="form-input" id="fLng" type="number" placeholder="e.g. 123.8854" step="any" /></div>
                <div><label className="form-label">Year Built</label><input className="form-input" id="fYear" type="number" placeholder="e.g. 2023" /></div>
                <div><label className="form-label">Property Type</label><select className="filter-select form-input" id="fType"><option>House &amp; Lot</option><option>Condo</option><option>Villa</option><option>Townhouse</option><option>Commercial</option></select></div>
                <div><label className="form-label">Status</label><select className="filter-select form-input" id="fStatus"><option>For Sale</option><option>For Rent</option></select></div>
                <div><label className="form-label">Special Badge</label><select className="filter-select form-input" id="fBadge"><option value="">None</option><option value="Premium">Premium</option><option value="Hot Deal">Hot Deal</option><option value="New Launch">New Launch</option></select></div>
                <div><label className="form-label">Furnishing</label><select className="filter-select form-input" id="fFurnished"><option value="">Not Specified</option><option>Fully Furnished</option><option>Semi-Furnished</option><option>Unfurnished</option></select></div>
                <div className="full"><label className="form-label">Description</label><textarea className="form-input form-textarea" id="fDesc" placeholder="Describe the property..."></textarea></div>
                <div className="full">
                  <div style={{display:'flex',gap:'24px',flexWrap:'wrap'}}>
                    <div className="checkbox-row"><input type="checkbox" id="fFeatured" /><label htmlFor="fFeatured">⭐ Mark as Featured</label></div>
                    <div className="checkbox-row"><input type="checkbox" id="fVirtualTour" /><label htmlFor="fVirtualTour">🎥 Virtual Tour Available</label></div>
                  </div>
                </div>
              </div>
              <div className="add-form-actions">
                <button className="btn-primary" style={{padding:'13px 32px',fontSize:'15px'}} onClick={c('submitProperty')}>Publish Listing</button>
                <button className="btn-sm btn-ghost" onClick={c('closeAddForm')}>Cancel</button>
              </div>
            </div>
            <div id="listingsList"></div>
          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer id="siteFooter">
        <div className="footer-inner">
          <div className="footer-grid">
            <div>
              <div className="footer-brand" onClick={c('showPage','home')} style={{cursor:'pointer'}}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="img/LOGO.png" alt="AMPO" style={{width:'36px',height:'36px',objectFit:'contain',borderRadius:'8px'}} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
                <span className="footer-brand-name">AMPO <span>Realty</span></span>
              </div>
              <p className="footer-desc">Your trusted real estate partner in Cebu and beyond. We help you find the perfect property with expertise and care.</p>
              <div className="footer-socials">
                <a className="social-btn" href="#" title="Facebook">📘</a>
                <a className="social-btn" href="#" title="Instagram">📸</a>
                <a className="social-btn" href="#" title="YouTube">▶️</a>
                <a className="social-btn" href="#" title="LinkedIn">💼</a>
              </div>
            </div>
            <div>
              <div className="footer-col-title">Navigate</div>
              <button className="footer-link" onClick={c('showPage','home')}>Home</button>
              <button className="footer-link" onClick={c('showPage','properties')}>Properties</button>
              <button className="footer-link" onClick={c('showPage','about')}>About Us</button>
              <button className="footer-link" onClick={c('showPage','contact')}>Contact</button>
            </div>
            <div>
              <div className="footer-col-title">Property Types</div>
              <button className="footer-link" onClick={c('filterAndGo','House & Lot')}>House &amp; Lot</button>
              <button className="footer-link" onClick={c('filterAndGo','Condo')}>Condominiums</button>
              <button className="footer-link" onClick={c('filterAndGo','Villa')}>Vacation Villas</button>
              <button className="footer-link" onClick={c('filterAndGo','Commercial')}>Commercial</button>
              <button className="footer-link" onClick={c('filterAndGo','Townhouse')}>Townhouses</button>
            </div>
            <div>
              <div className="footer-col-title">Contact</div>
              <div className="footer-contact-item"><span className="footer-contact-icon">📍</span><span className="footer-contact-val">F. Ramos St., Cebu City, Philippines</span></div>
              <div className="footer-contact-item"><span className="footer-contact-icon">📞</span><span className="footer-contact-val">+63 32 555 0100</span></div>
              <div className="footer-contact-item"><span className="footer-contact-icon">✉️</span><span className="footer-contact-val">info@amporealty.ph</span></div>
              <div className="footer-contact-item"><span className="footer-contact-icon">🕐</span><span className="footer-contact-val">Mon–Sat, 8:00 AM – 6:00 PM</span></div>
            </div>
          </div>
          <div className="footer-bottom">
            <span className="footer-copy">© 2025 <span>AMPO Realty</span>. All rights reserved.</span>
            <span className="footer-copy">Professional Real Estate Services · Cebu, Philippines</span>
          </div>
        </div>
      </footer>

      {/* ── PROPERTY MODAL ── */}
      <div className="modal-overlay" id="propModal" onClick={ce('closeModal')}>
        <div className="prop-modal-box">
          <div className="gallery-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="gallery-img" id="mImg" src="" alt="" />
            <div className="gallery-gradient"></div>
            <button className="gallery-close" onClick={c('closeModalDirect')}>✕</button>
            <div className="gallery-nav">
              <button className="gallery-nav-btn" id="galleryPrev" onClick={c('changeGallery',-1)}>&#8249;</button>
              <button className="gallery-nav-btn" id="galleryNext" onClick={c('changeGallery',1)}>&#8250;</button>
            </div>
            <div className="gallery-count" id="galleryCount"></div>
            <div className="gallery-title"><h2 id="mTitle"></h2><p id="mAddr"></p></div>
          </div>
          <div className="modal-tabs">
            <button className="modal-tab active" data-tab="overview" onClick={c('switchTab','overview')}>Overview</button>
            <button className="modal-tab" data-tab="calculator" onClick={c('switchTab','calculator')}>💰 Calculator</button>
            <button className="modal-tab" data-tab="location" onClick={c('switchTab','location')}>📍 Location</button>
          </div>
          <div className="tab-panel active" id="tab-overview">
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',flexWrap:'wrap',gap:'12px',marginBottom:'16px'}}>
              <div>
                <div className="modal-price" id="mPrice"></div>
                <div id="mPriceSqm" style={{fontSize:'12px',color:'var(--text-dim)',marginTop:'4px'}}></div>
              </div>
              <div style={{display:'flex',flexDirection:'column',gap:'8px',alignItems:'flex-end'}}>
                <div className="modal-badges"><span className="modal-badge-gold" id="mStatus"></span><span className="modal-badge-grey" id="mType"></span><span className="modal-badge-grey" id="mFurnished" style={{display:'none'}}></span></div>
                <button className="modal-share-btn" onClick={c('shareProperty')}>🔗 Share</button>
              </div>
            </div>
            <div className="modal-specs">
              <div className="modal-spec"><div className="modal-spec-icon">🛏</div><div className="modal-spec-val" id="mBeds"></div><div className="modal-spec-lbl">Bedrooms</div></div>
              <div className="modal-spec"><div className="modal-spec-icon">🚿</div><div className="modal-spec-val" id="mBaths"></div><div className="modal-spec-lbl">Bathrooms</div></div>
              <div className="modal-spec"><div className="modal-spec-icon">📐</div><div className="modal-spec-val" id="mArea"></div><div className="modal-spec-lbl">Floor Area</div></div>
              <div className="modal-spec"><div className="modal-spec-icon">🚗</div><div className="modal-spec-val" id="mParking"></div><div className="modal-spec-lbl">Parking</div></div>
            </div>
            <div className="modal-desc-label">Description</div>
            <div className="modal-desc-text" id="mDesc"></div>
            <div id="nbhSection"><div className="modal-desc-label">Neighborhood Scores</div><div className="nbh-grid" id="nbhGrid"></div></div>
            <div id="roiSection" style={{display:'none',marginBottom:'18px'}}>
              <div className="modal-desc-label">Investment Overview</div>
              <div style={{background:'rgba(0,214,123,.06)',border:'1px solid rgba(0,214,123,.2)',borderRadius:'12px',padding:'1rem',display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'10px',textAlign:'center'}}>
                <div><div style={{fontFamily:'var(--font-head)',fontWeight:700,fontSize:'15px',color:'var(--green)'}} id="roiMonthly"></div><div style={{fontSize:'11px',color:'var(--text-dim)',marginTop:'3px'}}>Monthly Income</div></div>
                <div><div style={{fontFamily:'var(--font-head)',fontWeight:700,fontSize:'15px',color:'var(--green)'}} id="roiAnnual"></div><div style={{fontSize:'11px',color:'var(--text-dim)',marginTop:'3px'}}>Annual Income</div></div>
                <div><div style={{fontFamily:'var(--font-head)',fontWeight:700,fontSize:'15px',color:'var(--green)'}} id="roiYield"></div><div style={{fontSize:'11px',color:'var(--text-dim)',marginTop:'3px'}}>Est. Gross Yield</div></div>
              </div>
            </div>
            <div className="modal-actions">
              <button className="modal-btn-primary" onClick={c('openInquireModal')}>📩 Inquire Now</button>
              <button className="modal-btn-secondary" onClick={c('openScheduleModal')}>📅 Schedule Visit</button>
            </div>
          </div>
          <div className="tab-panel" id="tab-calculator">
            <h3 style={{fontFamily:'var(--font-head)',fontWeight:700,color:'var(--text)',marginBottom:'4px'}}>Mortgage Calculator</h3>
            <p style={{fontSize:'13px',color:'var(--text-muted)',marginBottom:'20px'}}>Estimate your monthly payments</p>
            <div className="calc-grid">
              <div><div className="calc-label">Down Payment <span id="calcDownPct">20%</span></div><input type="range" className="calc-slider" id="calcDown" min="10" max="50" defaultValue="20" step="5" onInput={c('updateCalc')} /><div style={{fontSize:'12px',color:'var(--text-dim)'}} id="calcDownAmt"></div></div>
              <div><div className="calc-label">Loan Term <span id="calcYearsLbl">20 yrs</span></div><input type="range" className="calc-slider" id="calcYears" min="5" max="30" defaultValue="20" step="5" onInput={c('updateCalc')} /></div>
              <div><div className="calc-label">Interest Rate <span id="calcRateLbl">6.5%</span></div><input type="range" className="calc-slider" id="calcRate" min="4" max="12" defaultValue="6.5" step="0.5" onInput={c('updateCalc')} /></div>
              <div><div className="calc-label">Property Price</div><div style={{fontFamily:'var(--font-head)',fontWeight:700,fontSize:'16px',color:'var(--gold)'}} id="calcPriceLbl"></div></div>
            </div>
            <div className="calc-result">
              <div style={{fontSize:'12px',color:'var(--text-dim)',marginBottom:'6px',textTransform:'uppercase',letterSpacing:'1px',fontFamily:'var(--font-head)'}}>Estimated Monthly Payment</div>
              <div className="calc-monthly" id="calcMonthly"></div>
              <div className="calc-breakdown">
                <div className="calc-bd-item"><div className="calc-bd-val" id="calcPrincipal"></div><div className="calc-bd-lbl">Loan Amount</div></div>
                <div className="calc-bd-item"><div className="calc-bd-val" id="calcTotalPay"></div><div className="calc-bd-lbl">Total Payment</div></div>
                <div className="calc-bd-item"><div className="calc-bd-val" id="calcInterest"></div><div className="calc-bd-lbl">Total Interest</div></div>
              </div>
            </div>
            <p style={{fontSize:'11px',color:'var(--text-dim)',marginTop:'12px',lineHeight:'1.6'}}>* Estimate only. Consult our agents for precise financing options.</p>
          </div>
          <div className="tab-panel" id="tab-location">
            <div className="modal-map-label">📍 Property Location</div>
            <div id="modalMapContainer"></div>
            <a id="mGoogleMaps" href="#" target="_blank" rel="noopener" style={{fontSize:'13px',color:'var(--blue)',textDecoration:'none',display:'inline-flex',alignItems:'center',gap:'5px',marginBottom:'16px',fontFamily:'var(--font-head)',fontWeight:600}}>🗺 Open in Google Maps →</a>
            <div id="mDetails" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'10px',marginTop:'8px'}}></div>
          </div>
        </div>
      </div>

      {/* ── INQUIRE MODAL ── */}
      <div className="modal-overlay" id="inquireModal" onClick={ce('closeInquireOnOverlay')}>
        <div className="sub-modal-box gold-border">
          <button className="modal-x" onClick={c('closeInquireModalDirect')}>✕</button>
          <div className="sub-modal-title">📩 Inquire About Property</div>
          <div className="sub-modal-sub">Fill out the form and an agent will reach you shortly.</div>
          <div className="prop-ref-bar prop-ref-blue" id="inqPropRef">🏠 Loading...</div>
          <div id="inqFormContent">
            <div className="form-group"><label className="form-label">Full Name *</label><input className="form-input" id="inqName" type="text" placeholder="Your full name" /></div>
            <div className="form-group"><label className="form-label">Email Address *</label><input className="form-input" id="inqEmail" type="email" placeholder="your@email.com" /></div>
            <div className="form-group"><label className="form-label">Phone Number *</label><input className="form-input" id="inqPhone" type="tel" placeholder="09XX XXX XXXX" /></div>
            <div className="form-group"><label className="form-label">Message</label><textarea className="form-input form-textarea" id="inqMsg" style={{minHeight:'80px'}} placeholder="I am interested in this property..."></textarea></div>
            <button className="btn-primary" style={{width:'100%',padding:'13px',fontSize:'15px'}} onClick={c('submitInquiry')}>Send Inquiry</button>
          </div>
          <div className="success-panel" id="inqSuccess">
            <div className="success-panel-icon">✅</div>
            <div className="success-panel-title" id="inqSuccessMsg">Inquiry Sent!</div>
            <p className="success-panel-sub">Our agent will contact you within 24 hours.</p>
            <button className="btn-outline" style={{marginTop:'16px'}} onClick={c('closeInquireModalDirect')}>Close</button>
          </div>
        </div>
      </div>

      {/* ── SCHEDULE MODAL ── */}
      <div className="modal-overlay" id="scheduleModal" onClick={ce('closeScheduleOnOverlay')}>
        <div className="sub-modal-box" style={{borderColor:'rgba(0,214,123,.25)'}}>
          <button className="modal-x" onClick={c('closeScheduleModalDirect')}>✕</button>
          <div className="sub-modal-title">📅 Schedule a Property Visit</div>
          <div className="sub-modal-sub">Choose your preferred date and time for a viewing.</div>
          <div className="prop-ref-bar prop-ref-green" id="schPropRef">🏠 Loading...</div>
          <div id="schFormContent">
            <div className="form-group"><label className="form-label">Your Name *</label><input className="form-input" id="schName" type="text" placeholder="Your full name" /></div>
            <div className="form-group"><label className="form-label">Phone Number *</label><input className="form-input" id="schPhone" type="tel" placeholder="09XX XXX XXXX" /></div>
            <div className="form-group"><label className="form-label">Preferred Visit Date *</label><input className="form-input" id="schDate" type="date" /></div>
            <div className="form-group">
              <label className="form-label">Preferred Time Slot *</label>
              <div className="time-grid">
                <div className="time-slot" onClick={c('selectTimeSlotById','9:00 AM')}>9:00 AM</div>
                <div className="time-slot" onClick={c('selectTimeSlotById','10:00 AM')}>10:00 AM</div>
                <div className="time-slot" onClick={c('selectTimeSlotById','11:00 AM')}>11:00 AM</div>
                <div className="time-slot" onClick={c('selectTimeSlotById','1:00 PM')}>1:00 PM</div>
                <div className="time-slot" onClick={c('selectTimeSlotById','2:00 PM')}>2:00 PM</div>
                <div className="time-slot" onClick={c('selectTimeSlotById','3:00 PM')}>3:00 PM</div>
                <div className="time-slot" onClick={c('selectTimeSlotById','4:00 PM')}>4:00 PM</div>
                <div className="time-slot" onClick={c('selectTimeSlotById','5:00 PM')}>5:00 PM</div>
              </div>
            </div>
            <div className="form-group"><label className="form-label">Special Notes</label><input className="form-input" id="schNotes" type="text" placeholder="Accessibility requirements, etc." /></div>
            <button className="btn-primary" style={{width:'100%',padding:'13px',fontSize:'15px',background:'linear-gradient(135deg,var(--green),#00A854)'}} onClick={c('submitSchedule')}>Confirm Visit Booking</button>
          </div>
          <div className="success-panel" id="schSuccess">
            <div className="success-panel-icon">🗓️</div>
            <div className="success-panel-title">Visit Scheduled!</div>
            <p className="success-panel-sub" id="schSuccessMsg"></p>
            <button className="btn-outline" style={{marginTop:'16px'}} onClick={c('closeScheduleModalDirect')}>Close</button>
          </div>
        </div>
      </div>

      {/* ── COMPARE MODAL ── */}
      <div className="modal-overlay" id="compareModal" onClick={ce('closeCompareOnOverlay')}>
        <div className="compare-modal-box">
          <div className="compare-header">
            <h2 style={{fontFamily:'var(--font-head)',fontWeight:800,color:'var(--text)'}}>Property Comparison</h2>
            <button className="modal-x" onClick={c('closeCompareModal')}>✕</button>
          </div>
          <div className="compare-body"><div id="compareTableWrap"></div></div>
        </div>
      </div>

      {/* ── USER AUTH MODAL ── */}
      <div className="modal-overlay" id="authModal" onClick={ce('closeAuthOnOverlay')}>
        <div className="auth-modal-box">
          <button className="modal-x" onClick={c('closeAuthModal')} style={{top:'14px',right:'14px'}}>✕</button>
          <div className="auth-logo-bar">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="img/LOGO.png" alt="AMPO" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
            <h2>Welcome to AMPO Realty</h2>
            <p id="authModalSub">Sign in to save favorites and more</p>
          </div>
          <div className="auth-tab-bar">
            <button className="auth-tab active" id="authTabLogin" onClick={c('switchAuthTab','login')}>Login</button>
            <button className="auth-tab" id="authTabSignup" onClick={c('switchAuthTab','signup')}>Sign Up</button>
          </div>
          <div className="auth-form" id="authLoginForm">
            <div className="auth-err" id="loginAuthErr"></div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input className="form-input" id="loginEmail" type="email" placeholder="your@email.com" />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input className="form-input" id="loginPassword" type="password" placeholder="Your password" onKeyDown={(e) => { if(e.key==='Enter') c('submitLogin')() }} />
            </div>
            <button className="btn-primary" style={{width:'100%',padding:'13px',fontSize:'15px',marginTop:'4px'}} onClick={c('submitLogin')}>Sign In →</button>
            <div className="auth-switch">Don&apos;t have an account? <button onClick={c('switchAuthTab','signup')}>Sign up free</button></div>
          </div>
          <div className="auth-form" id="authSignupForm" style={{display:'none'}}>
            <div className="auth-err" id="signupAuthErr"></div>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input className="form-input" id="signupName" type="text" placeholder="Your full name" />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input className="form-input" id="signupEmail" type="email" placeholder="your@email.com" />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input className="form-input" id="signupPassword" type="password" placeholder="Min. 6 characters" />
            </div>
            <div className="form-group">
              <label className="form-label">Confirm Password</label>
              <input className="form-input" id="signupConfirm" type="password" placeholder="Re-enter password" onKeyDown={(e) => { if(e.key==='Enter') c('submitSignup')() }} />
            </div>
            <button className="btn-primary" style={{width:'100%',padding:'13px',fontSize:'15px',marginTop:'4px'}} onClick={c('submitSignup')}>Create Account →</button>
            <div className="auth-switch">Already have an account? <button onClick={c('switchAuthTab','login')}>Sign in</button></div>
          </div>
        </div>
      </div>

      {/* ── COMPARE BAR ── */}
      <div id="compareBar">
        <div className="compare-bar-slots" id="compareSlots"></div>
        <div className="compare-bar-actions">
          <button className="btn-sm btn-gold" onClick={c('openCompareModal')}>Compare Now</button>
          <button className="btn-sm btn-ghost" onClick={c('clearCompare')}>Clear</button>
        </div>
      </div>

      {/* ── FABs ── */}
      <a id="whatsappFab" href="https://wa.me/63325550100?text=Hi%20AMPO%20Realty!%20I'm%20interested%20in%20your%20properties." target="_blank" rel="noopener" title="Messenger">💬</a>
      <button id="backToTop" onClick={() => window.scrollTo({top:0,behavior:'smooth'})} title="Back to top">↑</button>

      {/* ── TOAST ── */}
      <div className="toast" id="toast"></div>

      {/* ── LEAFLET JS ── */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js"
        strategy="beforeInteractive"
      />

      {/* ── ALL APP LOGIC ── */}
      <Script src="/ampo-script.js" strategy="afterInteractive" />
    </>
  )
}