import Image from "next/image";

const containerStyle = {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '150px',
};

const imageStyle = {
    width: '100vw',
    height: '650px',  

};

const textStyle = {
    position: 'absolute',
    top: '0%',
    transform: 'translate(1%, 90%)',
    color: '#fff',
    textAlign: 'left',
    fontSize: '24px',
    fontWeight: 'bold',
};

const paragraphStyle = {

    color: '#abeed7',
    width: '60%',

};

const ImageComp = () => {
    return ( 
        <div style={containerStyle}>
            <Image src="/1125678.png" width={1280} height={1080} style={imageStyle}/>
            <div style={textStyle}>
                <h1>THE DAWN OF A NEW WAY TO STUDY</h1>
                <p style={paragraphStyle}>QuiZap is the newest innovative studying platform, where learning meets engagement. 
                With our user-friendly interface and diverse study tools, learners can tailor their educational journey, 
                whether it’s through lively quiz competitions or focused flashcard review sessions. Join us in revolutionizing 
                the way students study and succeed!</p>
                <button type="button">Sign Up Now</button>
            </div>
        </div>
     );
}
 
export default ImageComp;