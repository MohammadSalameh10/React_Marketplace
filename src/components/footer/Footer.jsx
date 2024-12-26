import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
  <footer className="footer animation bg-dark text-white">
  <div className="container">
    <div className="row">
      <div className="footer-item col-lg-2 col-6 d-flex flex-column">
        <h2 className="fs-4">Home</h2>
        <nav className="d-flex flex-column">
          <a href="#categories">Categories</a>
          <a href="#devices">Devices</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </nav>
      </div>
      <div className="footer-item col-lg-2 col-6 d-flex flex-column">
        <h2 className="fs-4">Movies</h2>
        <nav className="d-flex flex-column">
          <a href="movies&shows.html#movies_genres" className="d-sm-block d-none">Genres</a>
          <a href="movies&shows.html#movies_genres_mobile" className="d-block d-sm-none">Genres</a>
          <a href="movies&shows.html#movies_trending" className="d-sm-block d-none">Trending</a>
          <a href="movies&shows.html#movies_trending_mobile" className="d-block d-sm-none">Trending</a>
          <a href="movies&shows.html#movies_new_releases" className="d-sm-block d-none">New Release</a>
          <a href="movies&shows.html#movies_new_releases_mobile" className="d-block d-sm-none">New Release</a>
          <a href="movies&shows.html#movies_popular" className="d-sm-block d-none">Popular</a>
          <a href="movies&shows.html#movies_popular_mobile" className="d-block d-sm-none">Popular</a>
        </nav>
      </div>
      <div className="footer-item col-lg-2 col-6 d-flex flex-column mt-lg-0 mt-3">
        <h2 className="fs-4">Shows</h2>
        <nav className="d-flex flex-column">
          <a href="movies&shows.html#shows_genres" className="d-sm-block d-none">Genres</a>
          <a href="movies&shows.html#shows_genres_mobile" className="d-block d-sm-none">Genres</a>
          <a href="movies&shows.html#shows_trending" className="d-sm-block d-none">Trending</a>
          <a href="movies&shows.html#shows_trending_mobile" className="d-block d-sm-none">Trending</a>
          <a href="movies&shows.html#shows_new_releases" className="d-sm-block d-none">New Release</a>
          <a href="movies&shows.html#shows_new_releases_mobile" className="d-block d-sm-none">New Release</a>
          <a href="movies&shows.html#shows_popular" className="d-sm-block d-none">Popular</a>
          <a href="movies&shows.html#shows_popular_mobile" className="d-block d-sm-none">Popular</a>
        </nav>
      </div>
      <div className="footer-item col-lg-2 col-6 d-flex flex-column mt-lg-0 mt-3">
        <h2 className="fs-4">Support</h2>
        <nav className="d-flex flex-column">
          <a href="support.html#support">Contact Us</a>
        </nav>
      </div>
      <div className="footer-item col-lg-2 col-6 d-flex flex-column mt-lg-0 mt-3">
        <h2 className="fs-4">Subscription</h2>
        <nav className="d-flex flex-column">
          <a href="subscription.html#plans">Plans</a>
          <a href="subscription.html#features">Features</a>
        </nav>
      </div>
      <div className="footer-item col-lg-2 col-6 d-flex flex-column mt-lg-0 mt-3">
        <h2 className="fs-4">Connect Us</h2>
        <nav className="d-flex flex-column">
          <a href="#">Facebook</a>
          <a href="#">Instgram</a>
        </nav>
      </div>
    </div>
    <div className="footer-conclusion d-flex justify-content-between">
      <div className="footer-conclusion-start">
        <span>@2024 streamvib, All Rights Reserved</span>
      </div>
      <div className="footer-conclusion-end">
        <nav className="d-flex gap-3">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
        </nav>
      </div>
    </div>
  </div>
</footer>

  )
}
