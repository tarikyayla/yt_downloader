/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import {name as appName} from './app.json';
import React, {Component} from 'react';
import {AppRegistry,Dimensions,PermissionsAndroid,TextInput,StyleSheet,Button,KeyboardAvoidingView,Image, Text, View} from 'react-native';
import axios from 'axios'
import RNFetchBlob from 'rn-fetch-blob'


async function permissionReq(){
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'Youtube Video Downloader',
        message:'WRITE_EXTERNAL_STORAGE PERMISSION',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    } else {
      alert("")
    }
  } catch (err) {
    console.warn(err);
  }
}

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      text : "Enter your link",
      textStatus : false,
      downloadlink : "",
      progressbarStatus : false
    }
  }

  async componentWillMount(){
    await permissionReq()
  }



  tiklaBakalim = () =>{
    console.log("Button tıklandı");
    axios.get("https://flaskyoutubedownloader.herokuapp.com/?link=" +this.state.text)
    .then((response)=>{
      console.log(response.data)
      this.setState({
        textStatus : true,
        title : response.data.title,
        format : response.data.format,
        quality : response.data.quality,
        filesize : response.data.size,
        downloadlink : response.data.download_link,
        video_img : response.data.video_img
      })
    })
  }
  download = () => {
    const {title,format,downloadlink} = this.state
    var url       = downloadlink
    var filename = title + "." + format
    const { config, fs } = RNFetchBlob
    let PictureDir = fs.dirs.MovieDir
    let options = {
      fileCache: true,
      addAndroidDownloads : {
        useDownloadManager : true,
        notification : true,
        path:  PictureDir + "/" + filename,
        description : 'Video'
      }
    }
    config(options).fetch('GET', url).then((res) => {
      Alert.alert("Success Downloaded");
    });
  }

  render() {
    return (
      <View>
      <KeyboardAvoidingView>
        <TextInput style={{fontSize:25}} value={this.state.text} onChangeText = {(text) => this.setState({text})} />
        <Button onPress={this.tiklaBakalim}
          title="CHECK FIRST" 
          />
      </KeyboardAvoidingView>
        
        {
          this.state.textStatus ? 
       <View>
         <Image resizeMode="contain"
          style={{alignSelf: 'stretch',width:Dimensions.get('window').width,height:Dimensions.get("window").height / 2}} source={{uri:this.state.video_img}} />
          <Text style={styles.text}>Title : {this.state.title}</Text>
          <Text style={styles.text}>File Format : .{this.state.format}</Text>
          <Text style={styles.text}>Quality : {this.state.quality}</Text>
          <Text style={styles.text}>File Size : {this.state.filesize}</Text>
          <Button onPress={this.download} 
          title="Download" />
      </View>

        : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text :{
    fontSize:20
  }
});



AppRegistry.registerComponent(appName, () => App);
