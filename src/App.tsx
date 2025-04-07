import Header from "./components/Header"
import BtnLinks from "./components/BtnLinks"
import { 
  FaFacebook, 
  FaInstagram, 
  FaTiktok, 
  FaWhatsapp,
} from "react-icons/fa6";

function App() {
  return (
    <>
      <div className="flex flex-col justify-start items-center py-16 px-8 bg-preto min-h-screen">
        <Header 
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs7jp8So34X9gzuuG1uVySZdWWZtj3Rbq7dQ&s"
          title="Nome da empresa"
          subTitle="SubTitulo da empresa"
        />
        <div className="flex flex-col justify-center items-center gap-4 mt-8">
          <BtnLinks 
            title="WhatsApp" 
            link="https://www.whatsapp.com"
            icon={FaWhatsapp}
          />
          <BtnLinks 
            title="Facebook" 
            link="https://www.facebook.com"
            icon={FaFacebook}
          />
          <BtnLinks 
            title="Instagram" 
            link="https://www.instagram.com"
            icon={FaInstagram}
          />
          <BtnLinks 
            title="TikTok" 
            link="https://www.tiktok.com"
            icon={FaTiktok}
          />
        </div>
      </div>
    </>
  )
}

export default App