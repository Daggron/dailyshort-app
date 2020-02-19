import React from 'react'
import { StatusBar , View , Alert , Text, Image , WebView,  ScrollView, FlatList, StyleSheet, Dimensions, TouchableOpacity, Linking } from 'react-native'
import Axios from 'axios';
import LottieView from 'lottie-react-native';
import Loader from './loader.json'

const Home = ()=>{
    const [mainData , setMainData] = React.useState(null);
    const [scrollData , setScrollData] = React.useState(null);
    React.useEffect(() => {
        Axios.get('https://dailyshorts.herokuapp.com/news')
        .then(res=>{
            setMainData(res.data.data.slice(4,100));
        })
        .catch(err=>{
            Alert(err);
        })
    },[])

    if(mainData){
        return(
            <View style={style.container}>
                <StatusBar hidden={true} />
                   <FlatList
                        keyExtractor={(item)=>{item.id}}
                        data={mainData}
                        renderItem={({item})=>{
                                return(
                                    <View>
                                    <TouchableOpacity onPress={()=>Linking.openURL(item.url)}>
                                        <WebView source={{uri : item.image}} />
                                        <Text style={{margin : 10}}>
                                            {
                                                item.title
                                            }
                                        </Text>
                                    </TouchableOpacity>
                                    </View>
                                )
                            }
                        }
                    />
            </View>
        )
    }else{
        return(
              <LottieView
                source={Loader}
                autoPlay
                loop
              />
        )
    }
}

const style= StyleSheet.create({
    container:{
       flex : 1,
       justifyContent : "center",
       alignContent : "center",
       width : Dimensions.get('window').width
    }
})

export default Home;