import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState(

    //     {
    //         color: "black",
    //         backgroundColor: "white",
    //         padding: "20px"
    //     }
    // )
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? 'black' : 'white',
        padding:'20px'

    }
    return (
        <div className="container" style={myStyle} >
            <h1 className='mb-4'> About Us</h1>
            <div className="accordion" id="accordionExample" style={{ color: props.mode === 'light' ? 'black' : 'white'}}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils gives you a way to analyze your text quickly and efficiently.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils is a Free character counter tool that provides instant charcters count and word count statistics for a given text.TextUtils reports the number of words and characters.Thus it is sutaible for writting text with word/character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong> Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This words counter software words in any web browser such as Chrome, fireFox, Internet Explorer, Safari,Opera. It suits to count characters in faceBook, blog, books, excel document, pdf document, essays, etc.
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};
