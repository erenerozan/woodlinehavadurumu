import React, { Component } from 'react';
import Axios from 'axios';
import map from './map.png';
import dolar from './dolar.png';
import euro from './euro.png';
import './App.css';
import request from 'request';
class App extends Component {
  constructor(){
    super();
    this.state={
      havaDurumuJson: false
    }
    this._havadurumugetir = this._havadurumugetir.bind(this);
  }
  _havadurumugetir(){
    let that = this;
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
   
    /*var options = { method: 'GET',
    url: proxyurl+'https://weather-ydn-yql.media.yahoo.com/forecastrss',
    qs: 
    { 'X-Yahoo-App-Id': 'n6kKRq30',
      location: 'kemer,antalya,tr',
      format: 'json',
      u: 'c',
      oauth_consumer_key: 'dj0yJmk9RmlvMFZ0bEhJdWxqJmQ9WVdrOWJqWnJTMUp4TXpBbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTMy',
      oauth_signature_method: 'HMAC-SHA1',
      oauth_timestamp: '1562496539',
      oauth_nonce: 's5Zo4sUcPKA',
      oauth_version: '1.0',
      oauth_signature: 'kBX22t5cEqo3Bw9vsDPycFu0dW4=' },
  headers: 
   { "Access-Control-Allow-Origin": "*",
     'cache-control': 'no-cache',
     Connection: 'keep-alive',
     'accept-encoding': 'gzip, deflate',
     Host: 'weather-ydn-yql.media.yahoo.com',
     'Postman-Token': 'ebf5867e-c495-465f-9a46-7686698fd8e7,6dc7ad57-bc24-4f18-9533-ca4e581d4285',
     'Cache-Control': 'no-cache',
     
     'User-Agent': 'PostmanRuntime/7.15.0' } };
    let params = {
      lat: '36.612732',
      lon: '30.565261'
    }
    request(options, function (error, response, body) {
      if (error){
        console.log(error)
      }else{
        //console.log(body);
        let deger = JSON.parse(body);
        console.log(deger.current_observation.condition.temperature);
        that.setState({
          havaDurumuJson:deger.current_observation
        })
        
      }
    
      
    });
      /*Axios(settings)
        .then(function (response) {
          console.log(response)
        });*/
    /*Axios.get('https://api.weather.yandex.ru/v1/forecast?lat=36.612732&lon=30.565261',{headers: {'X-Yandex-API-Key': '2a72fdc2-118d-4b4f-a16c-fc5ef0457db5','Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',"Access-Control-Allow-Origin": "*",'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',}})
    //Axios.get('https://servis.mgm.gov.tr/api/sondurumlar?il=antalya&ilce=kemer')
    .then(function (response) {
      // handle success
      console.log(response.data[0]);
      that.setState({
        havaDurumuJson:response.data[0]
      })
    }).catch((error) => {
      console.log('error 3 ' + error);
    });*/
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://weather-ydn-yql.media.yahoo.com/forecastrss?X-Yahoo-App-Id=gwaqf632&location=kemer,antalya,tr&format=json&u=c&oauth_consumer_key=dj0yJmk9UTg4dk1maHpvbmhDJmQ9WVdrOVozZGhjV1kyTXpJbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTE0&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1563309543&oauth_nonce=TGqxLiCzym2&oauth_version=1.0&oauth_signature=ueLM2tWyaWYUMs/BIzkgSxsUIlg=",
      "method": "GET",
      "headers": {
        "User-Agent": "PostmanRuntime/7.15.0",
        "Accept": "*/*",
        "Cache-Control": "no-cache",
        "Postman-Token": "d9a673b5-d2e6-40ce-b181-baad3bd85a9d,a5ec6da4-6df6-4a2c-a875-52c27cba5ce5",
        "Host": "weather-ydn-yql.media.yahoo.com",
        "accept-encoding": "gzip, deflate",
        "Connection": "keep-alive",
        "cache-control": "no-cache"
      }
    }
    fetch(proxyurl+"https://weather-ydn-yql.media.yahoo.com/forecastrss?X-Yahoo-App-Id=gwaqf632&location=kemer,antalya,tr&format=json&u=c&oauth_consumer_key=dj0yJmk9UTg4dk1maHpvbmhDJmQ9WVdrOVozZGhjV1kyTXpJbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTE0&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1563309543&oauth_nonce=TGqxLiCzym2&oauth_version=1.0&oauth_signature=ueLM2tWyaWYUMs/BIzkgSxsUIlg=",settings)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
         // let deger = JSON.parse(result);
          console.log(result.current_observation.condition.temperature);
          that.setState({
            havaDurumuJson:result.current_observation
          })
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log("hata");
          console.log(error);
        }
      )
  }
  componentDidMount(){
    this._havadurumugetir();
    setInterval(()=>this._havadurumugetir(),600000);

  }
  render() {
    const { speed } =this.state.havaDurumuJson.wind || false;
    const { temperature } =this.state.havaDurumuJson.condition || false;
    const { humidity } =this.state.havaDurumuJson.atmosphere || false;
    const ruzgarHiz = speed;
    const sicaklik = temperature;
    const nem = humidity;
    //const {ruzgarHiz,sicaklik,nem} = this.state.havaDurumuJson;
    console.log(this.state.havaDurumuJson);
    return (
      <div className="App">
        <div className="dereceWrapper">
          <div className="dereceSeperator">
            <div className="dereceSpanWrapper">
              <span>{sicaklik}º </span>
              <br/>
              <span>temperature</span>
            </div>
            <div className="dereceDetailWrapper">
              <span>Wind </span>
              <br/>
              <span>{ruzgarHiz?ruzgarHiz.toFixed(2):"Loading..."} km/h </span>
            </div>
              <br/>
            <div className="dereceDetailWrapper">
              <span>Humidity  </span>
              <br/>
              <span>{nem?nem:"Loading..."}% </span>
            </div>
          </div>
          <br/>
          <div className="dereceSeperator">
            <div className="dovizWrapper">
            
              <span><img src={dolar}/><input type="textbox"/></span>
              <br/>

            </div>
          </div>

          <div className="dereceSeperator">
            <div className="dovizWrapper">

              <span><img src={euro}/><input type="textbox"/></span>
              <br/>

            </div>
          </div>
        </div>
        <img src={map} alt="map"/>

      </div>
    );
  }
}

export default App;
