import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className="App">
			<div className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Laranjinha <br/> da liga</p>
			</div>
			<div className="Sub-header">
				<p>Fomente o empreendedorismo uberlandense, enquanto saboreia a melhor laranjinha do triângulo mineiro.</p>
			</div>
			<div className="Main-panel panel">
				<p>Nossa meta é alcançar 3000,00 R$ para que todos os integrantes possam participar das atividades que desenvolveremos em São Paulo. No laranjômetro pode checar nosso progresso:</p>
				<div>
					<h2>Laranjômetro</h2>
					<div> barra *</div>
					<p>10,00 R$ / 3000,00 R$</p>
				</div>
				<ul>
					<il>Garrafa de água</il>
					<il>Laranjinha 1</il>
					<il>Laranjinha 2</il>
				</ul>
			</div>
			<div className="Sub-panels">
				<div className="panel">
					<p>Água</p>
					<img src="" alt="" />
				</div>
				<div className="panel">
					<p>Laranjinha</p>
					<img src="" alt="" />
				</div>
			</div>
		</div>
	);
}

export default App;
