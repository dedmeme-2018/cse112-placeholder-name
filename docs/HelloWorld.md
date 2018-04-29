# Hello World

A Hello World example in Vue.
<vuep template="#example"></vuep>

<script v-pre type="text/x-template" id="example">
  <template>
    <div>Hello {{ name }}!</div>
  </template>

  <script>
    module.exports = {
      data: function () {
        return { name: 'World' }
      }
    }
  </script>
</script>