import backgroundImage from "../res/images/background_image.jpg";


const styles = {
    appBody: {
      minHeight: "100vh",
      backgroundColor: "rgba(255, 255, 255,0.5)",
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: "top",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      boxShadow: "inset 0 0 0 1000px rgba(0,0,0,.5)",
    },
  };


const Home = ()=>{
    return (
        <div style={styles.appBody}></div>
    );
}

export default Home;