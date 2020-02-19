import React from 'react';
import { ScrollView , View , Image , Text , StyleSheet , Dimensions} from 'react-native';

const Banner= ({banner})=>{
    if(banner){
    return(
        <React.Fragment>
            <Text style={{color : "#fff" , padding : 10 , paddingHorizontal : 20 , fontSize : 30}}>
                Latest
            </Text>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                tvParallaxShiftDistanceX={Dimensions.get('window').width}
                pagingEnabled
            >
                {
                    banner.map((eachbanner)=>{
                        return(
                            <View key={eachbanner.id} style={style.container}>
                                <View>
                                    <Image resizeMode="stretch" source={{uri : eachbanner.image}} style={{height : 200 , width : Dimensions.get('window').width-20 }}/>
                                </View>
                                <View style={{width : Dimensions.get('window').width-20 , textAlign : "center" }}>
                                    <Text style={{color : "#fff" , fontSize : 15 , paddingVertical : 10}}>
                                        {eachbanner.title}
                                    </Text>
                                </View>
                                <View>
                                    <Text>
                                        {
                                            eachbanner.views
                                        }
                                    </Text>
                                </View>
                            </View>
                        )
                    })
                }

            </ScrollView>
        </React.Fragment>
    )
    }else{
        return <React.Fragment />
    }
}

const style = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#1b1b1b",
        justifyContent : "center",
        alignItems : "center",
        flexDirection : "column",
        padding : 10,
        elevation : 7,
        borderRadius : 20,
        marginVertical : 10
    }
})

export default Banner;