import { StyleSheet } from 'react-native'
import ModalMenu from './ModalMenu'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'

const CornerMenu = ({ navigation }) => {
    const goToA = () => { navigation.navigate('ChildA') }
    
    const goToB = () => { navigation.navigate('ChildB') }

    const goToC = () => { navigation.navigate('ChildC') }

    let texts = []
    texts.push('Componente A')
    texts.push('Componente B')
    texts.push('Componente C')
    
    let callbacks = []
    callbacks.push(goToA)
    callbacks.push(goToB)
    callbacks.push(goToC)

    return (
        <ModalMenu
            title={'Menu'}
            texts={texts}
            callbacks={callbacks}
            customContainerStyle={{/* podemos darle estilo al modal aquí */}}
            customContentStyle={{/* podemos darle estilo al menu aquí */}}
            customItemStyle={{
                /* podemos darle estilo a las opciones aquí */}}
        >
            {/* incluso le otorgamos un icono para su visualizacion */}
            <FontAwesomeIcon icon={faGear} size={15} color='white'/>
        </ModalMenu>
    )
}

export default CornerMenu
