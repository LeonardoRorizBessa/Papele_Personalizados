import { IconType } from "react-icons";

interface Props {
  title: string;
  link: string;
  icon: IconType;
}

const BtnLinks = ({  
  title, 
  link, 
  icon: Icon,
}: Props) => {
  return ( 
    <>
      <button 
        className="flex justify-center items-center w-140 h-16 rounded-lg bg-cinza text-branco cursor-pointer hover:bg-azul hover:text-cinza transition duration-300 ease-in-out"
        onClick={() => window.open(link, "_blank")}
      >
        <Icon 
          className="mr-4"
          size={20}
        />
        <h3 className="text-base font-bold">{title}</h3>
      </button>
    </>
   );
}
 
export default BtnLinks;