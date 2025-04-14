import Header from "./components/Header"
import BtnLinks from "./components/BtnLinks"
import { 
  FaInstagram, 
  FaTiktok, 
  FaWhatsapp,
} from "react-icons/fa6"
import { BiLogoGmail } from "react-icons/bi"
import logo from "./assets/papele-logo.png"
import bgImage from "./assets/bg.jpg" 

function App() {
  return (
    <>
      <div className="flex flex-col justify-start items-center py-16 md:py-10 lg:py-12 px-12 md:px-12 lg:px-8 min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
        <Header 
          image={logo}
          title="Papelê"
          subTitle="Faça sua encomenda"
        />
        <div className="flex flex-col justify-center items-center gap-4 mt-8">
          <BtnLinks 
            title="Instagram" 
            link="https://www.instagram.com/personalizados_papele"
            icon={FaInstagram}
          />
          <BtnLinks 
            title="TikTok" 
            link="https://www.tiktok.com/@personalizados_papele"
            icon={FaTiktok}
          />
          <BtnLinks 
            title="WhatsApp" 
            link="https://wa.me/5585986471925"
            icon={FaWhatsapp}
          />
          <BtnLinks 
            title="E-mail" 
            link="mailto:personalizado.papele@gmail.com"
            icon={BiLogoGmail}
          />
        </div>
      </div>
    </>
  )
}

export default App