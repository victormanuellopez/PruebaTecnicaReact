import ClimaInfo from './components/ClimaInfo';
import ClimaForm from './components/ClimaForm';
import { Component } from 'react';
import "./App.css";
import 'weather-icons/css/weather-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

  constructor(){
    super();
    this.state = {
      ciudad:undefined,
      pais:undefined,
      icono:undefined,
      temperatura:undefined,
      tempmax:undefined,
      tempmin:undefined,
      descripcion:"",
      error:false
    };
    this.iconclima = {
      tormenta:"wi-thunderstom",
      llovizna:"wi-sleet",
      lluvia:"wi-storm-showers",
      nieve:"wi-snow",
      atmósfera:"wi-fog",
      claro:"wi-day-sunny",
      nubes:"wi-day-fog"
    };
  }

  conversionCelsius(temp){
    let cels = Math.floor(temp - 273.15);
    return cels;

  }

  obtenerclima = async(e) => {
    e.preventDefault();
    const ciudad = e.target.elements.ciudad.value;

    if(ciudad){
      const climaUrl = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=6eee4a38fa835c11fec271ba5ca255c6&lang=es`);
      const response = await climaUrl.json();
      console.log(response);
  
      this.setState({
        ciudad:response.name,
        pais:response.sys.country,
        temperatura:this.conversionCelsius(response.main.temp),
        tempmin:this.conversionCelsius(response.main.temp_min),
        tempmax:this.conversionCelsius(response.main.temp_max),
        descripcion:response.weather[0].description,
        error:false
      });
        this.iconosclima(this.tormenta, response.weather[0].id);
    }else{
      this.setState({error: true});
    }
  }

  iconosclima(icono,randeId){
    switch(true){
      case randeId >= 200 && randeId <= 232:
        this.setState({icono:this.iconclima.tormenta})
        break;
      case randeId >= 300 && randeId <= 321:
        this.setState({icono:this.iconclima.llovizna})
        break;
      case randeId >= 500 && randeId <= 531:
        this.setState({icono:this.iconclima.lluvia})
        break;
      case randeId >=600 && randeId <= 622:
        this.setState({icono:this.iconclima.nieve})
        break;
      case randeId >=700 && randeId <= 781:
        this.setState({icono:this.iconclima.atmósfera})
        break;
      case randeId === 800:
        this.setState({icono:this.iconclima.claro})
        break;
      case randeId >=801 && randeId <= 804:
        this.setState({icono:this.iconclima.nubes})
        break;
      default:
        this.setState({icono:this.iconclima.nubes})
    }
  }


  render(){
    return(
      <div className="App">
        <ClimaForm cargarclima={this.obtenerclima} error={this.state.error} />
        <ClimaInfo ciudad={this.state.ciudad} 
        pais={this.state.pais}
        icono={this.state.icono} 
        temperatura={this.state.temperatura} 
        tempmin={this.state.tempmin} 
        tempmax={this.state.tempmax} 
        descripcion={this.state.descripcion}/>
      </div>
    )
  }
}

export default App;
