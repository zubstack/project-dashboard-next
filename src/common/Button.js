function Button({ children, color, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium transition-opacity text-white background-${color} focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-black/60`}
    >
      {children}
    </button>
  );
}

export default Button;
