import { Text } from 'react-native'
import { Link } from 'expo-router'
import StyledImage from '../components/StyledImage'


export default function Home(){
    return(
        <>
            <Text>Login com sucesso!</Text>
            <Link href="/">Voltar ao login</Link>
            <StyledImage source={'./assets/eitabixo.jpg'} />
        </>
    )
}