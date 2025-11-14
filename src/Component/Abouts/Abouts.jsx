import './About.css'
const Abouts = () => {
  return (
    <div className='developer'>
        <div>
          <img className='stack'  src='https://www.infomazeelite.com/wp-content/uploads/2022/02/Hire-Full-Stack-Developer-from-us.png' alt='developer'/>
        </div>

        <div className='content'>
            <h1 className="java text-2xl font-bold">JAVA FullStack Development</h1><br></br>
            <p>Java full stack refers to the development of both the front-end and
          back-end of a web application using Java as the primary language for
          the server-side and compatible technologies for the client-side. A
          full stack developer handles the entire application lifecycle, from
          the user interface (HTML, CSS, JavaScript, and front-end frameworks
          like React or Angular) to the server-side logic (Java, Spring) and
          database management.</p>
        </div>
    </div>
  );
};
export default Abouts;
