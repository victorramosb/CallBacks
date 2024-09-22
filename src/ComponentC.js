import { View, Text, StyleSheet } from 'react-native'
import Content from './Content'
import CornerMenu from './CornerMenu'

const ComponentC = ({ navigation }) => {
    const { container, header, footer, title } = styles
    
    return (
        <View style={container}>
            <View style={header}>
                <Text style={title}>Componente C</Text>
                
                <CornerMenu navigation={navigation} />
            </View>

            <Content />
            
            <View style={footer} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    footer: {
        flex: 1,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    title: {
        fontSize: 30
    },
})

export default ComponentC
