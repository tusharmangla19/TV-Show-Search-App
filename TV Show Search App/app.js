const form = document.querySelector('#SearchForm')
form.addEventListener('submit',async function(e){
    e.preventDefault();
    const searchTerm = form.elements.Query.value;
  const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`)
   makeImg(res.data)
  form.elements.Query.value = '';
  deleteImages();
})

const makeImg = async function (shows) {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
          img.src = await(result.show.image.medium);
            document.body.append(img);
        }
    }
}
const deleteImages = function(){
    const del = document.querySelectorAll("IMG")
    for (let imgs of del){
        imgs.remove();
    }
    }
