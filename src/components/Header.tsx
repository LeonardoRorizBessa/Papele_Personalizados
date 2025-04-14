interface Props {
  image: string;
  title: string;
  subTitle?: string;
}

const Header = ({ 
  image, 
  title, 
  subTitle,
}: Props) => {
  return ( 
    <>
      <img 
        className="w-40 rounded-full"
        src={image} 
        alt="Logo da empresa" 
      />
      <h1 className="text-2xl font-bold text-preto pt-6">{title}</h1> 
      <p className="text-base font-semibold text-preto pt-3">{subTitle}</p>
    </>
   );
}
 
export default Header;