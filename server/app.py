import requests 
from bs4 import BeautifulSoup
from flask import Flask,request,Response,jsonify
import json 


app = Flask(__name__)

@app.route("/",methods=['GET','POST'])
def index():
	if(request.args.get("link") == None):
		return jsonify({"error":"link param null"})
	else:
		i = 0
		response = requests.get("https://qdownloader.net/download?video={}".format(request.args.get("link")))
		soup = BeautifulSoup(response.text,'html.parser')
		title = soup.find("span",{"class":"largeMargin title"}).text
		video_img = soup.find("div",{"class":"info col-md-4"}).find("img")['src']
		while(soup.find("tbody").find_all("tr")[i].find_all("a")[0].text != "Download"):
			i += 1
		download_link = soup.find("tbody").find_all("tr")[i].find_all("a")[0]['href']
		quality = soup.find("tbody").find_all("tr")[i].find_all("td")[0].text
		format  = soup.find("tbody").find_all("tr")[i].find_all("td")[1].text
		size = soup.find("tbody").find_all("tr")[i].find_all("td")[2].text
	return json.dumps({"title":title,"video_img":video_img,"download_link":download_link,"quality":quality,"format":format,"size":size},ensure_ascii=False)

if __name__ == "__main__":
	app.config['JSON_AS_ASCII'] = False
	app.run("localhost",port=5000,debug=True)


