interface Props {
    icon: React.ReactNode
    isMobile?: boolean
}

export const CustomIcon = ({ icon, isMobile }: Props) => {
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: isMobile ? '35px' : '40px',
        height: isMobile ? '35px' :'40px',
        borderRadius: '50%',
        marginRight: '10px',
        overflow: 'hidden',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
      }}
    >
      {icon}
      <div
        style={{
          content: "''",
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: 'linear-gradient(45deg, #7B2CBF, #D442F5)',
        }}
      ></div>
      <div
        style={{
          content: "''",
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: 'radial-gradient(rgba(255, 255, 255, 0.8), transparent)',
          borderRadius: '50%',
          opacity: '0.5',
          transform: 'scale(1.1)',
          animation: 'shine 1.5s linear infinite',
        }}
      ></div>
    </div>
  );
}
