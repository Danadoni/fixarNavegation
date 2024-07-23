import { StyleSheet } from "react-native";


const styles= StyleSheet.create({
 
    viewContainer:{
        flex:1,

        backgroundColor: '#141a29',   
    },
    imageBanner:{
        width:'100%',
        height:400,
        borderBottomLeftRadius: 70,
        borderBottomRightRadius:70,
        borderTopLeftRadius:12,
        borderTopRightRadius:12,
        
        
    },
    textBanner:{
        fontSize:30,
        color:"white",
        marginTop: 15,
        marginLeft:-180,
        fontWeight:'Bold',
        
    },
    backButton:{
        width:50,
        height:50,
        backgroundColor:'rgba(25,26,48,0.8)',
         borderRadius:27,
         marginTop:-380,
         alignItems:'center',
         justifyContent:"center",
         marginLeft:20
        
    }
})

export default styles;