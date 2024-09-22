import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

const ModalMenu = ({ children, title, texts, callbacks,
        customContainerStyle, customContentStyle, customItemStyle
    }) => {

    const { containerStyle, titleContainer,
            modalContainerStyle, modalContentStyle,
            menuStyle, itemStyle, titleStyle,
            openButtonStyle, buttonText, childContainerStyle } = styles
    
    const [ modalVisible, setModalVisible ] = useState(false)
    
    return <View style={containerStyle}>
        <Modal
            animationType='none' // Opciones: slide, fade, none
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => { setModalVisible(false) }}
        >
            <View style={[modalContainerStyle, customContainerStyle]}>

            <TouchableOpacity onPress={() => {setModalVisible(false)}}>
                <View style={[modalContentStyle, customContentStyle]}>

                    <View style={titleContainer}>
                        <Text style={titleStyle}>{title}</Text>
                        <FontAwesomeIcon icon={faCircleXmark} size={20} color='#000000'/>
                    </View>
                    <View style={menuStyle}>
                        { !texts ? <Text style={itemStyle}>Agregar opciones aquí</Text> :
                            Object.values(texts).map((item, index) => {
                                return <TouchableOpacity key={index}
                                    onPress={() => {
                                        setModalVisible(false) // oculta el menu
                                        callbacks[index]?.()   // ejecuta el callback que corresponde
                                    }}>
                                    <Text style={[itemStyle, customItemStyle]}>{item}</Text>
                                </TouchableOpacity>
                            })
                        }
                    </View>

                </View>
            </TouchableOpacity>
            </View>
        </Modal>

        <TouchableOpacity style={openButtonStyle} onPress={() => { setModalVisible(true) }} >
            { children ? <View style={childContainerStyle}>{children}</View> : <Text style={buttonText}>menu</Text> }
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    containerStyle: {
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    ////////////////////////////////////
    modalContainerStyle: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ADD8E680',
        alignItems: 'flex-end',
        paddingTop: 90,
        paddingRight: 20,
    },
    modalContentStyle: {
        backgroundColor: 'lightblue',
        borderRadius: 10,
        padding: 10,
    },
    ////////////////////////////////////
    titleStyle: {
        fontSize: 20,
        marginBottom: 10,
    },
    menuStyle: {
        borderRadius: 5,
        elevation: 5, // Añade sombra para un efecto de elevación
    },
    itemStyle: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    ////////////////////////////////////
    openButtonStyle: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    childContainerStyle: {
        alignContent: 'center',
        justifyContent: 'center',
        // alignItems: 'center'
    }
    ////////////////////////////////////
})

export default ModalMenu
