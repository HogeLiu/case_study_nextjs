import styles from '../../styles/Hogeliu.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { hogeusers: data }
  }
}

const Hogeliu = ({ hogeusers }) => {
  //console.log(hogeusers)

  return (
    <div>
      <h1>All Hogeuser</h1>
      {hogeusers.map(hogeusers => (
        <Link href={'/hogeliu/' + hogeusers.id} key={hogeusers.id}>
          <a className={styles.single}>
            <h3>{ hogeusers.name }</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}
 
export default Hogeliu;