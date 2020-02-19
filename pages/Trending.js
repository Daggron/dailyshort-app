import React from 'react'
import { View , Text , FlatList , Linking , Image , StyleSheet , TouchableOpacity , SafeAreaView} from 'react-native'

const Trending = ({trending})=>{

    if(trending){
        return (
            <React.Fragment>
                <View>
                    <Text style={{fontSize : 30 , color : "#fcfcfc" , padding : 20}}>
                        Trending 
                    </Text>
                </View>
                 <FlatList
                        horizontal={true}
                        keyExtractor={(item)=>{item.id}}
                        data={trending}
                        renderItem={({item})=>{
                                return(
                                    <SafeAreaView>
                                        <TouchableOpacity onPress={()=>Linking.openURL(item.url)}>
                                            <View style={style.innerView}>
                                                    <View>
                                                        <Image source={{uri : item.image}} resizeMode="stretch" style={{height : 200 , width : 150 , margin : 10 , borderRadius : 10 , padding : 20}}/>
                                                    </View>
                                                    <View style={{width : 200 , textAlign : "center"}}>
                                                        <SafeAreaView>
                                                            <Text style={{ color : "#fff", fontSize : 15 , paddingHorizontal : 30}}>
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
        return(
           <React.Fragment />
        )
    }
    

}

const style= StyleSheet.create({
    innerView:{
        width : 200,
        height : 350,
        justifyContent : "center",
        alignSelf : "center",
        alignContent : "center",
        alignItems : "center",
        paddingHorizontal : 20,
        backgroundColor : "#1b1b1b",
        elevation : 7,
        borderRadius : 10,
        margin : 10,
        overflow : "scroll"

    }
})

export default Trending;