# Node-Tunnel
Make a tunnel for your device which stays in private LAN (behind NAT). The `tunnel.js` will help you to expose your application with the help of `localtunnel.me` as the domain. Keywords:
* Reverse-proxy
* Tunnel

## Getting Started
1. Install nodejs and npm
2. Clone this repository
3. Execute:
```bash
npm install
```
4. Run:
```bash
node tunnel.js --port [PORT] --subdomain [subdomain]
```
5. Access with browser: `https://[subdomain].localtunnel.me`

## Fun fact
This is **mock** wrapper for [localtunnel](https://github.com/localtunnel/localtunnel).