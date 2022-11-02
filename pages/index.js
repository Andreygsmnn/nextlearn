import Link from 'next/link';
import MainContainer from '../components/mainContainer';
function index() {
    return (
        <MainContainer keywords={'антенна'} title={'Главная страница'}>
            <h1 className="trata">Главная страница</h1>
        </MainContainer>
    )
}

export default index