
function Button({ children, color = 'primary', onClick }) {
  return (
    <button
      type="button"
      className={`btn btn-${color}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
