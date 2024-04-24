import Image from "next/image";

const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100vh', // Assuming full viewport height
};

const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Ensure the image covers the container
    border: '1px solid #fff',
};

const textStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Optional: add text shadow for better contrast
};

const ImageComp = () => {
    return ( 
        <div style={containerStyle}>
            <Image src="/1125678.png" width={1280} height={1080} style={imageStyle}/>
            <div style={textStyle}>
                THE DAWN OF A NEW WAY TO STUDY
            </div>
        </div>
     );
}
 
export default ImageComp;