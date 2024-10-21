interface IProps {
    imageUrl: string;
    alt: string;
    className?: string;
}

const Image = ({imageUrl,alt,className}:IProps) => {
  return (
    <div>
        <img className={className} src={imageUrl} alt={alt}  />
    </div>
  )
}

export default Image