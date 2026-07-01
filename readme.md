# La Bunica - Restaurant Tradițional Românesc

Website pentru restaurantul "La Bunica" din Timișoara, România.

## Tehnologii

- React 18 + TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Lucide React (iconițe)
- Strapi CMS (backend)

## Instalare

```bash
npm install
```

## Configurare Strapi

Copiază `.env.example` în `.env` și configurează:

```env
VITE_STRAPI_API_URL=http://localhost:1337
VITE_STRAPI_TOKEN=your_api_token_here
```

## Dezvoltare

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Pagini

- **Acasă** (`/`) - Hero banner, secțiuni descriptive, articole
- **Despre Noi** (`/about`) - Povestea restaurantului (din Strapi)
- **Articole** (`/articles`) - Grid de articole (din Strapi)
- **Contact** (`/contact`) - Formular de contact, informații, hartă

## API Strapi

- `GET /api/articles?populate=*` - Lista articole
- `GET /api/about?populate=*` - Informații despre (Single Type)

## Contact Restaurant

- **Adresă:** Str. Mihai Eminescu nr. 12, Timișoara
- **Telefon:** +40 256 123 456
- **Email:** contact@labunica.ro
- **Program:** Luni-Duminică: 11:00 - 23:00

## Funcționalități

- Design responsive (mobile, tablet, desktop)
- Dark/Light mode
- Navbar sticky cu meniu hamburger pentru mobil
- Fonturi Google: Playfair Display, Lato, Merriweather
- Tema Solar Dusk (tonuri calde portocalii/maronii)
