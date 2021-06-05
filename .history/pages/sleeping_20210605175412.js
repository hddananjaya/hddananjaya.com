import Layout from '../components/Layout/Layout';

const Sleeping = () => {
    return (
      <>
          <div style={{position:'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
              <div style={{display:"flex", justifyContent:'center'}}>
              <img src="/images/hi.gif" style={{borderRadius:'50%'}}></img>
              </div>
            <h1>404 Not Found. Read my <a href="https://hddananjaya.wordpress.com">blog</a> instead.</h1>
          </div>
    </>
    )
  }
  
  export default Sleeping;
