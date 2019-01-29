#  Youtube Video Downloader

### Installation 
`$ git clone http://github.com/tarikyayla/yt_downloader`

###### Server-side 

```shell
cd yt_downloader
cd server
virtualenv myenv
source myenv/bin/activate
pip install -r requirements.txt
python app.py
```





###### Native Application

[React-Native Installation](https://facebook.github.io/react-native/docs/getting-started "React-Native Installation")

```shell
Remove App.js and Index.js
Move Index.js and package.json files to your own react-native application directory
Install packages from packages.json file
react-native run-android

```
### Screenshots
<img src="https://github.com/tarikyayla/yt_downloader/blob/master/images/Screenshot_1548781651.png" width="156"> <img src="https://github.com/tarikyayla/yt_downloader/blob/master/images/Screenshot_1548781660.png" width="156">


### Api Usage 
###### Request
`localhost:5000/?link=YOUTUBE_LINK`

`Example : http://flaskyoutubedownloader.herokuapp.com/?link=https://www.youtube.com/watch?v=gdGLkQ1768M`

###### Response
```json
{
	"title": "XXXX",
	"video_img": "XXX.jpg",
	"download_link": "Link",
	"quality": "720p",
	"format": "mp4",
	"size": " size MB "
}
```
