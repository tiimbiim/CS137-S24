import Image from "next/image";

const imageStyle = {
    width: '33.3%',
    maxWidth: '50vw',
    height: 'auto',
    textAlign: 'center',
    objectFit: 'cover',
};

const rowStyle = {
    content: "",
    clear: 'both',
    display: 'flex',
    maxWidth: 'fit-content',
    marginLeft: 'auto',
    marginRight: 'auto',
    overflow: 'auto',
};

const textStyle = {
    color:'#000',
    fontSize: '6px',
}

const headerStyle = {

    color: '#000',
    fontSize: '8em',

};

const paragraphStyle = {
    color: "#000",
    fontSize: '3em',
};

const ThreeImageSpread = () => {
    return ( 
        <div className="row" style={rowStyle}>
            <div className="column" style={imageStyle}>
                <Image src="/SUB12E.png" width={500} height={400}/>
                <div style={textStyle}>
                    <h1 style={headerStyle}>Create Quizzes</h1>
                    <p style={paragraphStyle}>Make quizzes with your own custom questions in just a couple clicks</p>
                </div>
            </div>
            <div className="column" style={imageStyle}>
                <Image src="/SUB25E.png" width={500} height={400}/>
                <div style={textStyle}>
                    <h1 style={headerStyle}>Invite Friends</h1>
                    <p style={paragraphStyle}>Invite friends via a link to join your quiz</p>
                </div>
            </div>
            <div className="column" style={imageStyle}>
                <Image src="/SUB26E.png" width={500} height={400}/>
                <div style={textStyle}>
                    <h1 style={headerStyle}>Share Results</h1>
                    <p style={paragraphStyle}>Share your quiz results and show the rest of the world you're the smartest</p>
                </div>
            </div>
        </div>
     );
}
 
export default ThreeImageSpread;