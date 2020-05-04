const s = require('sanitize-html');
console.log(s('<h4>test</h4><script>evil</script>'));

