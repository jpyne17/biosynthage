/*
 DescriptionPage.jsx
 --------------------
 PAGE
 --------------------
 Components used:

 */

import React from 'react';
import ImageArray from '../ImageArray.jsx'

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    overviewText: {
        fontSize: '500%',
        padding: '4vh 0 0 0',
        fontFamily: 'Raleway',
        borderBottom: 'solid 3px black',
    }
};

const imageArrayData = {
    imageData1: [
        {image1: "https://i.ytimg.com/vi/LhoeoTTjMLs/maxresdefault.jpg", text: "This is some text."},
        {image1: "https://static.pexels.com/photos/9051/pexels-photo.jpg", text: "This is some more text."},
    ],
    imageData2: [
        {
            image1: "https://upload.wikimedia.org/wikipedia/commons/b/be/Google_Glass_with_frame.jpg",
            text: "This is some more text."
        },
        {image1: "https://static.pexels.com/photos/9352/glass-time-watch-business.jpg", text: "This is some more text."}
    ]
};

export default class DescriptionPage extends React.Component {

    componentDidMount(){
        // Dispatch menu event.
        this.menuDispatch();
    }

    menuDispatch() {
        let menuEvent = new CustomEvent('menu', {activeRoute: this.props.location.pathname});
        document.dispatchEvent(menuEvent);
    }

    render() {

        console.log(this.props.location.pathname);

        return (
            <div>
                <div className="description-background" style={styles.container}>
                    <h1 className="display-1" style={styles.overviewText}>Overview</h1>

                    <div>
                        <ImageArray imageArrayData={imageArrayData.imageData1}/>
                        <ImageArray imageArrayData={imageArrayData.imageData2}/>
                    </div>
                </div>
            </div>
        )
    }
}
