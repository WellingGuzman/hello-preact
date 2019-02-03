const { h, render, Component } = preact;

class HelloPreact extends Component {
	render() {
		return <div>Hello Preact</div>
	}
}

render(<HelloPreact />, document.getElementById('root'));
