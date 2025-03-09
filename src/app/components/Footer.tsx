import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-grayLight py-4">
      <div className="container mx-auto px-5 flex flex-col md:flex-row justify-around items-center">
        <div className="flex items-center  md:mb-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-footer-1UaqzpR6NZjnz3Qg8txIhFiR3ZtcdJ.png"
            alt="Elgin"
            width={120}
            height={50}
            className="mr-2 mt-2"
          />
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="5" width="14" height="4" fill="black" />
            <rect x="5" y="14" width="14" height="4" transform="rotate(-90 5 14)" fill="black" />
          </svg>
        </div>
        <nav className="flex flex-wrap justify-center gap-4">
          <Link href="https://www.elgin.com.br/" target="_blank" className="text-grayDark">
            Elgin
          </Link>
          <Link href="#" className="text-grayDark">
            Regras
          </Link>
          <Link href="#" className="text-grayDark">
            Campanhas
          </Link>
          <Link href="#" className="text-grayDark">
            Suporte
          </Link>
          <Link href="#" className="text-grayDark">
            Enviar Nota
          </Link>
          <Link href="#" className="text-grayDark">
            Meu Perfil
          </Link>
        </nav>
      </div>
    </footer>
  );
}