import React from 'react'
import { StatusBar , ScrollView, View , Alert , Text, Image , StyleSheet, Dimensions, TouchableOpacity, } from 'react-native'
import Axios from 'axios';
import LottieView from 'lottie-react-native';
import Loader from './loader.json'
import Trending from './Trending'
import Posts from './Posts'
import Banner from './Banner'


const Home = ()=>{
    const [mainData , setMainData] = React.useState(null);
    const [trending , setTrending] = React.useState(null);
    const [scrollData , setScrollData] = React.useState(null);

    React.useEffect(() => {
        Axios.get('https://dailyshorts.herokuapp.com/news')
        .then(res=>{
            setMainData(res.data.data.slice(15,100));
            setTrending(res.data.data.slice(7,15));
            setScrollData(res.data.data.slice(0,7));

        })
        .catch(err=>{
            Alert(err);
        })
    },[])

    if(mainData||trending||scrollData){
        return(
            <View style={style.container}>
                <ScrollView>
                <StatusBar hidden={true} />
                <Banner banner={scrollData} />
                <Trending  trending={trending}/>
                <Posts mainData={mainData} />
                </ScrollView>
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
       width : Dimensions.get('window').width,
       backgroundColor : "#1b1b1b"
    }
})

export default Home;