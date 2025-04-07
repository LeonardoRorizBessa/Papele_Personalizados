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
        className="w-30 rounded-full"
        src={image} 
        alt="Logo da empresa" 
      />
      <h1 className="text-xl font-bold text-branco pt-6">{title}</h1> 
      <p className="text-sm text-branco pt-3">{subTitle}</p>
    </>
   );
}
 
export default Header;