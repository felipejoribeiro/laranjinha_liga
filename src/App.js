import logo from './logo.svg';
import qr_450 from './laranja_qr_450.jpeg';
import qr_20 from './laranja_qr_20.jpeg';
import './App.css';

function App() {
	return (
		<div className="App">
			<div className="Central_container">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>Laranjinha <br/> da liga</p>
				</div>
				<div className="Sub-header">
					<p>Fomente o empreendedorismo uberlandense, enquanto saboreia a melhor laranjinha do triângulo mineiro.</p>
				</div>
				<div className="Main-panel panel">
					<p style={{"textAlign":"left"}}> <span style={{"fontSize": "20px"}}> Nossa meta é alcançar </span> <span className="textHighlight">3000,00 R$</span></p>
					<p style={{"textAlign":"left", "fontSize": "14px"}}> para que todos os integrantes possam participar das atividades que desenvolveremos em São Paulo. No laranjômetro pode checar nosso progresso:</p>
					<div style={{"display":"flex", "flexDirection":"column", "marginBottom":"15px"}}>
						<h2 style={{"fontFamily": "Comfortaa", "alignSelf":"start", "color": "#FEBD59", "marginTop":"20px"}}>Laranjômetro</h2>
						<div> barra *</div>
						<p style={{"fontSize":"15px"}}>10,00 R$ <span style={{"color": "#FEBD59", "fontSize":"20px"}}>\</span> 3000,00 R$</p>
					</div>
					<div className="productList">
						<p> <span>-</span> Brigadeiro </p>
						<p> <span>-</span> Morango com chocolate </p>
						<p> <span>-</span> Morango </p>
						<p> <span>-</span> Doce de leite </p>
						<p> <span>-</span> Mousse de maracujá </p>
						<p> <span>-</span> Coco </p>
					</div>
				</div>
				<div className="Sub-panels">
					<div style={{"padding":"0px", "height":"120px", "paddingTop":"5px"}} className="panel">
						<p style={{"fontSize":"15px"}}>20,00 R$ </p>
						<img style={{"width": "90px"}} src={qr_20} alt="20" />
					</div>
					<div style={{"padding":"0px", "height":"120px", "paddingTop":"5px"}} className="panel">
						<p>4,50 R$</p>
						<img style={{"width": "90px"}} src={qr_450} alt="20" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
