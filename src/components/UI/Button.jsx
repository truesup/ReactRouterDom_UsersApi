const Button = ({ children, onClick }) => {
  return (
    <button className="defaultButton" onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
