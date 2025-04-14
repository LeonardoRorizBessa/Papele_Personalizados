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
        className="flex justify-center items-center w-90 md:w-140 h-14 md:h-16 rounded-lg bg-transparent border-2 border-preto text-preto cursor-pointer hover:bg-branco-opaco transition duration-300 ease-in-out"
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