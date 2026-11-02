# Staging and deployment

This static prototype can be put in a GitHub repository and deployed to Cloudflare Pages for a review link (no build command; output directory is the repository root). A public preview URL is publicly accessible, so do not put private archive content or real records in it.

The production system should separate the public frontend, private API, database, media storage and board/admin permissions. Use VPN-based administration; do not expose RDP or SMB to the internet. Verify office public IP/CGNAT and ISP hosting terms, TLS, firewall, UPS shutdown, off-site encrypted backups and restore procedures before moving to the Society's Windows server.
