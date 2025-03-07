import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Image
              src="/img/logo-footer.svg"
              alt="Elgin Logo"
              width={100}
              height={40}
              className="object-contain"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-sm">
            <Link href="#" className="hover:text-elgin-blue transition-colors">
              Elgin
            </Link>
            <Link href="#" className="hover:text-elgin-blue transition-colors">
              Regras
            </Link>
            <Link href="#" className="hover:text-elgin-blue transition-colors">
              Campanhas
            </Link>
            <Link href="#" className="hover:text-elgin-blue transition-colors">
              Suporte
            </Link>
            <Link href="#" className="hover:text-elgin-blue transition-colors">
              Enviar Nota
            </Link>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 pt-6 border-t border-gray-200">
          <p>© {new Date().getFullYear()} Elgin. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

