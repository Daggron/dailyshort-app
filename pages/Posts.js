import React from 'react'
import { View , Text ,  Dimensions , FlatList , Linking , Image , StyleSheet , TouchableOpacity , SafeAreaView} from 'react-native'


const Posts = ({mainData})=>{
    if(mainData){
        return(
            <React.Fragment>
                <View>
                    <Text style={{fontSize : 30 , color : "#fcfcfc" , padding : 20}}>
                        Others
                    </Text>
                </View>
                 <FlatList
                        keyExtractor={(item)=>{item.id}}
                        data={mainData}
                        renderItem={({item})=>{
                                return(
                                    <SafeAreaView>
                                        <TouchableOpacity onPress={()=>Linking.openURL(item.url)}>
                                            <View style={style.innerView}>
                                                    <View>
                                                        <Image source={{uri : item.image}} resizeMode="stretch" style={{height : 200 , width : Dimensions.get('window').width-20 , margin : 10 , borderRadius : 10 , padding : 20}}/>
                                                    </View>
                                                    <View style={{width : Dimensions.get('window').width-20   , textAlign : "center"}}>
                                                        <SafeAreaView>
                                                            <Text style={{ color : "#fff", fontSize : 15 , paddingHorizontal : 30 , paddingBottom : 10}}>
                                                                {
                                                                    item.title
                                                                }
                                                            </Text>
                                                        </SafeAreaView>
                                                    </View>
                                            </View>
                                        </TouchableOpacity>
                                    </SafeAreaView>
                                )
                            }
                        }
                    />
            </React.Fragment>
        )
    }else{
        return <React.Fragment />
    }
}

const style= StyleSheet.create({
    innerView:{
        width : Dimensions.get('window').width-20,
        justifyContent : "center",
        alignSelf : "center",
        alignContent : "center",
        alignItems : "center",
        paddingHorizontal : 20,
        backgroundColor : "#1b1b1b",
        elevation : 7,
        borderRadius : 10,
        margin : 10
    }
})

export default Posts;