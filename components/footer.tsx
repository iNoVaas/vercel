import { APP_NAME } from "@/lib/constants";

const CLOTHING_SIZES = ["S", "M", "L", "XL", "XXL"];
const SHOE_SIZES = ["39", "40", "41", "42", "43", "44", "45"];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-dark text-white pt-12 pb-24 px-6 border-t border-white/5">
      <div className="max-w-screen-xl mx-auto space-y-10">
        {/* Logo / Brand */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1 opacity-80">
            <h2 className="text-primary text-md font-extrabold leading-tight tracking-widest uppercase">
              Mounir 16
            </h2>
          </div>
          <p className="text-[8px] text-primary/70 tracking-[0.2em] font-bold uppercase">
            Officiel
          </p>
        </div>

        {/* Newsletter / Join Club */}
        <div className="space-y-4">
          <h3 className="text-sm font-black uppercase tracking-widest text-center">
            Rejoindre le club
          </h3>
          <p className="text-xs text-gray-400 text-center">
            Inscrivez-vous pour recevoir nos offres exclusives.
          </p>
          <form className="flex gap-2 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 bg-matte-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-primary"
            />
            <button
              type="submit"
              className="bg-primary text-background-dark px-4 py-3 rounded-lg flex items-center justify-center"
            >
              <span className="material-symbols-outlined text-xl">send</span>
            </button>
          </form>
        </div>

        {/* Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
          <div className="space-y-4">
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-primary">
              Aide
            </h4>
            <ul className="space-y-2 text-sm text-gray-400 font-medium">
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="https://linktr.ee/mounir16.dz"
                >
                  Contact
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Livraison
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Retours
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-primary">
              Légal
            </h4>
            <ul className="space-y-2 text-sm text-gray-400 font-medium">
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Mentions Légales
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  CGV
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Confidentialité
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 pt-4">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/people/Mounir16/61586028332735/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:scale-110 transition-transform"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/mounir____.16"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:scale-110 transition-transform"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919z" />
            </svg>
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@mounir_.16"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:scale-110 transition-transform"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12.525 0h3.084c.207 1.77 1.003 3.193 2.354 4.19 1.2.9 2.62 1.39 4.037 1.463v3.115c-1.46.096-2.9-.24-4.153-.95-.51-.29-.98-.64-1.43-1.04v7.3c0 3.69-3.01 6.67-6.72 6.67-3.7 0-6.7-2.98-6.7-6.67 0-3.6 2.82-6.52 6.39-6.67v3.25c-.38-.12-.78-.18-1.19-.17-1.93 0-3.49 1.56-3.49 3.48 0 1.92 1.56 3.48 3.49 3.48 2.08 0 3.7-1.68 3.7-3.75V0z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-[10px] text-gray-600 pt-4 font-bold uppercase tracking-widest">
          © {currentYear} MOUNIR 16 OFFICIEL. TOUS DROITS RÉSERVÉS.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
