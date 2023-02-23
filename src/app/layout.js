import './globals.css'
import { HeaderNav } from './headerNav'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
      <HeaderNav/>
      <main>{children}</main>
      <footer>
        <h2>Este es un Footer y se encontrara en todas las secciones de la paginas</h2>
      </footer>
      </body>
    </html>
  )
}
