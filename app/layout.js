import BootstrapClient from './BootstrapClient'

import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'

export const metadata = {
  title: 'MyEvent',
  description: 'Event site built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <BootstrapClient />
      <body>
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#3b5af6b9' }}>
          <div className="container-fluid">
            {/* Left-side logo */}
            <a className="navbar-brand" href="/">
              <img
                src="/logo.png"
                alt="Logo"
                style={{ width: '50px', height: '50px' }}
              />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item mx-3">
                  <a className="nav-link fw-bold text-white" href="/">Home</a>
                </li>
                <li className="nav-item mx-3">
                  <a className="nav-link fw-bold text-white" href="/about">About</a>
                </li>
                <li className="nav-item mx-3">
                  <a className="nav-link fw-bold text-white" href="/events">Events</a>
                </li>
                <li className="nav-item mx-3">
                  <a className="nav-link fw-bold text-white" href="/sponsors">Sponsors</a>
                </li>
                <li className="nav-item mx-3">
                  <a className="nav-link fw-bold text-white" href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <main className="p-4 max-w-5xl mx-auto">{children}</main>
      </body>
    </html>
  )
}
