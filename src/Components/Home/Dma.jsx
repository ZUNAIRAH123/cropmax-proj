import React from "react";
function Dma() {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "50vh",
      background: "#76B74E", 
      color: "white",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      fontSize: "40px",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    buttonContainer: {
      display: "flex",
      gap: "30px",
    },
    button: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px 30px",
      borderRadius: "12px",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      color: "white",
      fontSize: "18px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      textDecoration: "none", 
      boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
    },
    icon: {
      fontSize: "50px",
      marginBottom: "10px",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Download Our Mobile App</h1>

      <div style={styles.buttonContainer}>
    
        <a
          href="https://example.com/download"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.button}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)")
          }
        >
          <span style={styles.icon}>📥</span>
          Download
        </a>

        {/* Mobile App Option */}
        <a
          href="https://play.google.com/store" // <-- apna PlayStore ya AppStore link daalo
          target="_blank"
          rel="noopener noreferrer"
          style={styles.button}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)")
          }
        >
          <span style={styles.icon}>📱</span>
          Mobile App
        </a>
      </div>
    </div>
  );
}

export default Dma;
