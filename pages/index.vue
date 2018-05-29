<template>
  <div>
    <HelloWorld />
  </div>
</template>

<script>
  import HelloWorld from '@@/components/HelloWorld'

  export default {
    // Component name
    name: '',

    // Middleware
    middleware: '',

    // Mount in view
    layout: '',

    // Dependencies
    components: { HelloWorld },

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
