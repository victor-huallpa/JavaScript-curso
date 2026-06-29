export const Button = ({buttonText}) =>{
    const deafaultStyle = {
        backgroundColor: "#007BFF",
        color: "white",
        border: "none",
        borderRadius: "4px",
        padding: "10px 20px",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
    };
    return <button style={deafaultStyle}> {buttonText}</button>
}

//apsar estilos directamente en el tag usando camel case
export function Button2({ buttonText }) {
  return (
    <button
      style={{
        backgroundColor: "#59be2a",
        color: "white",
      }}
    >
      {buttonText}
    </button>
  );
}

export const DynamicButton = ({isActive})=>{
    const buttonStyle = {
        backgroundColor: isActive ? "green": "red",
        color: "white",
        padding: "10px 15px",
        border: "none",
        cursor: "pointer",
    };
    return <button style={buttonStyle}> Login </button>
}