function BackgroundImage(){

    const styles = {
        container: {
            height: '100vh',
            width: '100%',
            position: 'fixed',
            zIndex: '-1',
            backgroundImage: 'url(/bg.png)',
            backgroundRepeat: 'no-repeat', // Prevents the background image from repeating
            backgroundSize: 'cover'       // Ensures the image covers the entire container
        }
    };
    return(
        <div style={styles.container}></div>
    )
}

export default BackgroundImage