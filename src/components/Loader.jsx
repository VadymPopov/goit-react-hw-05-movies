import { Triangle } from  'react-loader-spinner'

 const Loader = ()=>(
    <Triangle
    height="160"
    width="160"
    color="#4fa94d"
    ariaLabel="triangle-loading"

    wrapperStyle={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      margin: '0 auto',
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      zIndex: '9999',
    }}
    visible={true}
    />
);

export default Loader;
