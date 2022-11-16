import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { UserImage } from '../../atoms'
import { SeegnalDeleteButton } from '../../atoms/button'

const UserHeader = () =>{

    const styles = StyleSheet.create({
        container:{
            flexDirection:'row',
            justifyContent:'space-between',
        }
    })

    return(
        <View style={styles.container}>
            <UserImage />
            <SeegnalDeleteButton />
        </View>
    )
}

export default UserHeader