const Button = ({ children, variant = 'primary', onClick, style }) => {
  const variantStyles = {
    primary: {
      backgroundColor: '#4caf50',
      color: '#ffffff',
      border: 'none',
    },
    outline: {
      backgroundColor: 'transparent',
      color: '#4caf50',
      border: '1px solid #4caf50',
    },
    secondary: {
      backgroundColor: '#1e3a5f',
      color: '#ffffff',
      border: 'none',
    },
  };

  return (
    <button
      onClick={onClick}
      style={{
        ...styles.base,
        ...variantStyles[variant],
        ...style,
      }}
    >
      {children}
    </button>
  );
};

const styles = {
  base: {
    padding: '8px 18px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '13px',
    fontWeight: '600',
    transition: 'opacity 0.2s',
  },
};

export default Button;
