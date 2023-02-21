import { Container } from "./assets/components/Container/Container"
import { Header } from "./assets/components/Header/Header"

export const App = () => {
  
  return (
    <>
          <Header/>
          <main>
            <nav>
              <Container className="navigation__container" />
            </nav>
            <section></section>
          </main>
          <footer></footer>
    </>
  )
}