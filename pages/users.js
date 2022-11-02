import Link from 'next/link';
import MainContainer from '../components/mainContainer';


function Users({users}) {

  return (
    <MainContainer keywords={"ключевые слова"} title={"Пользователи"}>
      <div>Список пользователей</div>
      <ul>

        {users.map(user =>
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              {user.name}
            </Link>
          </li>
        )}

      </ul>
    </MainContainer>
  )

}
export async function getStaticProps(context) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()

  return {
    props: { users }
  }
}


export default Users;