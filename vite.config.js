import { VitePWA } from 'vite-plugin-pwa'

export default {
  plugins: [
    VitePWA({
      injectRegister: 'none',
      manifest: {
        "short_name": "Telnet",
        "name": "Telnet",
        "icons": [
          {
            "src": "icons-vector.svg",
            "sizes": "48x48 72x72 96x96 128x128 256x256 512x512 1024x1024",
            "type": "image/svg+xml",
            "purpose": "any maskable"
          },
          {
            "src": "icons-192.png",
            "type": "image/png",
            "sizes": "192x192",
            "purpose": "any maskable"
          },
          {
            "src": "icons-512.png",
            "type": "image/png",
            "sizes": "512x512",
            "purpose": "any maskable"
          }
        ],
        "id": "",
        "start_url": "./?source=pwa",
        "display": "standalone",
        "scope": "./",
        "isolated_storage": true,
        "permissions_policy": {
          "direct-sockets": [ "self"]
        }
      }
    })
  ]
}
