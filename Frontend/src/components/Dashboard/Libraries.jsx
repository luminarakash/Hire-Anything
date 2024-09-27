import React from 'react';
import { Helmet } from 'react-helmet';

export default function Libraries() {
  return (
    <>
      <Helmet>
        {/* Meta Tags for SEO */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="HireAnything Platform - Your one-stop solution for all services." />
        <meta name="keywords" content="HireAnything, Services, Contact, Support, Booking" />
        <meta name="author" content="Your Company Name" />

        {/* Title */}
        <title>HireAnything | Services & Solutions</title>

        {/* External CSS */}
        <link rel="stylesheet" href="css/main.css" />

        {/* Favicon */}
        <link rel="icon" type="image/png" href="favicon.png" sizes="16x16" />

        {/* Additional Scripts or Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
      </Helmet>
    </>
  );
}
