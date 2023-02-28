import { Catalog } from "./assets/components/Catalog/Catalog"
import { Header } from "./assets/components/Header/Header"
import { Navigation } from "./assets/components/Navigation/Navigation"

export const App = () => {
  
  return (
    <>
          <Header/>
          <main>
            <Navigation />
            <Catalog />
          </main>
          <footer></footer>
    </>
  )
}