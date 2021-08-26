<template>
	<div class="d-flex justify-content-center">
		<div class="card w-50">
			<div class="card-body">
				<h4 class="text-center">Create Bookable</h4>
				<br />
				<div v-if="message">
					<div
						class="alert alert-success alert-dismissible fade show"
						role="alert"
					>
						<strong>{{ message }}</strong>
						<button
							type="button"
							class="close"
							data-dismiss="alert"
							aria-label="Close"
						>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
				</div>
				<form method="post" @submit.prevent="onSubmit">
					<div class="form-group">
						<label for="title">Title</label>
						<input
							type="text"
							id="title"
							class="form-control"
							:class="{ 'is-invalid': error('title') }"
							v-model="title"
						/>
						<span
							v-if="error('title')"
							v-text="error('title')"
							class="text-danger"
						></span>
					</div>
					<div class="form-group">
						<label for="content">Content</label>
						<input
							type="text"
							id="content"
							class="form-control"
							:class="{ 'is-invalid': error('content') }"
							v-model="content"
						/>
						<span
							v-if="error('content')"
							v-text="error('content')"
							class="text-danger"
						></span>
					</div>
					<div class="form-group">
						<label for="price">Price</label>
						<input
							type="text"
							id="price"
							class="form-control"
							:class="{ 'is-invalid': error('price') }"
							v-model="price"
						/>
						<span
							v-if="error('price')"
							v-text="error('price')"
							class="text-danger"
						></span>
					</div>
					<button type="submit" class="btn btn-primary">Create</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: "",
				content: "",
				price: "",
				errors: {},
				message: ""
			};
		},

		methods: {
			error(field) {
				if (this.errors[field]) return this.errors[field][0];
				else return null;
			},
			onSubmit() {
				axios
					.post("/api/bookable/create", this.$data)
					.then(() => {
						Object.assign(this.$data, this.$options.data());
						this.message = "Created Successfully.";
						//   this.$router.push('bookable')
					})
					.catch(errors => (this.errors = errors.response.data.errors));
			}
		}
	};
</script>
