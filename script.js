/* script.js */
(function(){
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('button').addEventListener('click', function(){
      let text=document.getElementById('text').value;
      alert('Длина текста: ' + text.length);
    });
  });
})();
