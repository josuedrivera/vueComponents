console.log("connected");

// VUE COMPONENT
// names for components should not be camelCased; use hyphens or all one word without camelCasing; no spaces
// inside the object(second object in the component) when creating a string -- use back ticks (``) instead of single quote ('') or double quote ("")
// creating a component basic template: 
	// Vue.component('name-of-component', { template: ``})

Vue.component('my-component', {
	template: `
		<div class="col-4">
			<p>This is my component.</p>
			<img class="img-fluid" src="img/vueJosue.jpg" alt="josue">
		</div>
			`
//limitation, only one element containing children element can be used; only 1st element will render if multiple same level elements are used
});

// MASTER VUE INSTANCE
new Vue({
	el: '#app',
	data: {
		message: 'Hello world! This is a message!'
	},
	methods: {

	}
})



