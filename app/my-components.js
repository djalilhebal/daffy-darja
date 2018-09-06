// my-components

Vue.component('darja', {
  props: ['info'],
  data: function() {
	  return {reacted: null}
  },
  template: `
	<v-container class="darja">
	{{info.text}} <span class="wilaya">({{info.wilaya}})</span><br>
	<v-flex>
		<v-chip color="purple" text-color="white">
		  <v-avatar>
			<v-icon>account_circle</v-icon>
		  </v-avatar>
		  {{info.user}}
		</v-chip>
		
		<v-btn-toggle class="right" v-model="reacted">
		  <v-btn depressed>
		  <span>:v</span>
		  </v-btn>
		  <v-btn depressed>
		  <span>:-|</span>
		  </v-btn>
		  <v-btn depressed>
		  <span>-_-</span>
		  </v-btn>
		</v-btn-toggle>
	</v-flex>
</v-container>`
})
	
Vue.component('english', {
  props: ['info'],
  template: `
  <v-container class="english">
  <b>{{info.text}}</b><br>
   <i>Tags: {{info.tags.join(', ')}}</i>
   
  <darja
	v-for="darja in info.darjas"
	v-bind:info="darja"
	v-bind:key="darja.id">
  </darja>
  </v-container>
  `
})
