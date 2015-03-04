
<script id="cover" type="text/x-handlebars-template">
	<section id="pizzazero">
		<div class="row">
			<div class="logo small-12 large-3 large-centered columns">
				<h1>pizza</h1>
				<h1>zer<img src="img/pizza.png" class="zero"></h1>

				<div class="startLocation">
					<paper-input class="custom" floatingLabel="true" label="address, city, state"></paper-input>
				</div>

				<br>

				<div class="hunger">
					I want <span id="hungerLabel">4</span> pizza slices
					<paper-slider id="hunger" pin snaps min="1" max="8" step="1" value="4"></paper-slider>
				</div>

				<br>

				<paper-button raised>zero in</paper-button>
			</div>
		</div>
	</section>
</script>