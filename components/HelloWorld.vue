<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
  // import ComponentName from 'path/to/component'
  
  export default {
    // Component name
    name: 'HelloWorld',

    // Middleware
    middleware: '',

    // Mount in view
    layout: '',

    // Dependencies
    components: {},

    // Stuff to do before component creation
    beforeCreate () {},

    // Stuff to do on component created
    created () {},

    // Async data
    asyncData (store) {},

    // Stuff to do on component mounted
    mounted () {},

    // Component properties
    props: {},

    // Page head tag
    head: () => ({}),

    // Reactive data
    data: () => ({
      // Comment data
      message: `Hello world !`,
    }),

    // Conputed properties
    computed: {},

    // Watch reactive data
    watch: {},

    // Component methods
    methods: {},
  }
</script>

<style lang="css" scoped>
</style>
