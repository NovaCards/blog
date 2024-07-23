import ContentfulImage from "./contentful-image";

const Avatar = ({ name, picture }) => {
    return (
        <div className="flex items-center">
            <div className="w-12 h-12 relative rounded-full">
                <ContentfulImage
                    src={picture.fields.file.url}
                    layout='fill'
                    alt={name}
                    className="m-0 rounded-full"
                />
            </div>
            <div className="font-semibold">{name}</div>
        </div>

    )
}

export default Avatar;