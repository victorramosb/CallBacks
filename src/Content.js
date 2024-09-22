import { View, Text, StyleSheet } from 'react-native'

const Content = () => {
    const { body, subtitle } = styles
    
    return (<View style={body}>
        <Text style={subtitle}>
            En este ejemplo el componente CornerMenu
            es utilizado para parametrizar el componente ModalMenu
        </Text>
        <Text style={subtitle}>
            ModalMenu es un componente customizable
            que recibe las opciones de texto y su correspondiente comportamiento
            en forma de callbacks
        </Text>
        <Text style={subtitle}>
            Esto permite flexibilidad al momento de programar las opciones
            dentro del componente CornerMenu
        </Text>
        <Text style={subtitle}>
            En este ejemplo las funciones del menu son sencillas
            y se limitan a la navegacion de las screen, sin embargo pueden agregarse
            otras sin problema
        </Text>
    </View>)
}

const styles = StyleSheet.create({
    body: {
        flex: 3
    },
    subtitle: {
        flex: 1,
        padding: 10,
    },
})

export default Content
