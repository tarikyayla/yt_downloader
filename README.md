#  Youtube Video Downloader

### Installation 
`$ git clone http://github.com/tarikyayla/yt_download`

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



### Api Usage 
###### Request
`localhost:5000/?link=YOUTUBE_LINK`
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
