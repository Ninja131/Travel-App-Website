import Image from "next/image";

type ButtonProps= {
    type: 'button'| 'submit';
    title: string;
    icon?:string;
    variant : string
}

const Button = ({type,title,icon,variant}:ButtonProps) => {
  return (
    <button
    className={`flexCenter gap-1 rounded-full    ${variant} `}
    type={type}
    >
        {icon && <Image src={icon} alt={title}
        width={24} height={24}/>}
        {title}
    </button>
  )
}

export default Button