export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.map(hogeusers => {
      return {
        params: { id: hogeusers.id.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }
  
  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();
  
    return {
      props: { hogeusers: data }
    }
  }
  
  const Details = ({ hogeusers }) => {
    return (
      <div>
        <h1>{ hogeusers.name }</h1>
        <p>{ hogeusers.email }</p>
        <p>{ hogeusers.website }</p>
        <p>{ hogeusers.address.city }</p>
      </div>
    );
  }
  
  export default Details;