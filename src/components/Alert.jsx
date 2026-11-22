
function Alert({ children, onClose }) {
  return (
    <div
      className="alert alert-primary alert-dismissible"
      role="alert"
    >
      {children}

      <button
        type="button"
        className="btn-close"
        aria-label="Close"
        onClick={onClose}
      />
    </div>
  );
}

export default Alert;
