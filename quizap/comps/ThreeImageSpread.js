import Image from "next/image";

const imageStyle = {
    width: '33.3%',
    padding: '50px',
    textAlign: 'center',
};

const rowStyle = {
    content: "",
    clear: 'both',
    display: 'flex',
    maxWidth: 'fit-content',
    marginLeft: 'auto',
    marginRight: 'auto',
};

const headerStyle = {

    color: '#000',
    fontSize: '48px',

};

const paragraphStyle = {
    color: "#000",
    fontSize: '18px',
};

const ThreeImageSpread = () => {
    return ( 
        <div className="row" style={rowStyle}>
            <div className="column" style={imageStyle}>
                <Image src="/SUB12E.png" width={500} height={400}/>
                <h1 style={headerStyle}>Create Quizzes</h1>
                <p style={paragraphStyle}>Make quizzes with your own custom questions in just a couple clicks</p>
            </div>
            <div className="column" style={imageStyle}>
                <Image src="/SUB25E.png" width={500} height={400}/>
                <h1 style={headerStyle}>Invite Friends</h1>
                <p style={paragraphStyle}>Invite friends via a link to join your quiz</p>
            </div>
            <div className="column" style={imageStyle}>
                <Image src="/SUB26E.png" width={500} height={400}/>
                <h1 style={headerStyle}>Share Results</h1>
                <p style={paragraphStyle}>Share your quiz results and show the rest of the world you're the smartest</p>
            </div>
        </div>
     );
}
 
export default ThreeImageSpread;