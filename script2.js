// Ruta al archivo JSON
let enlaces=[]
const rutaArchivoJSON = 'channelVideos.json';
// Usar la función fetch para obtener el JSON
fetch(rutaArchivoJSON)
  .then(response => response.json())
  .then(data => {
    // Aquí puedes trabajar con los datos JSON
    console.log(data)
    for (let i = 0; i < 24; i++) {
        let url=data['contents'][i]['video']['videoId']
        enlaces[i]=url
        console.log(enlaces)
    }
    const addFirstContent = async () => {
        let domElement = document.querySelector('.row')
        let a=0
        domElement.insertAdjacentHTML('beforeend', /* html */`
        <div class="play-video">
            <div id="mainVideo" class="video-iframe">
                
            </div>
            <div class="tags">
                <a href="">#Coding</a>
                <a href="">#HTML</a>
                <a href="">#CSS</a>
                <a href="">#Javascript</a>
            </div>
            <h3>Best Youtube Channel To Learn Web Development</h3>
            <div class="play-video-info">
                <p>1225 Views &bull; 2 days ago</p>
                <div>
                    <a href=""><img src="images/like.png" alt="">125</a>
                    <a href=""><img src="images/dislike.png" alt="">2</a>
                    <a href=""><img src="images/share.png" alt="">Share</a>
                    <a href=""><img src="images/save.png" alt="">Save</a>
                </div>
            </div>
            <hr>
            <div class="plublisher">
                <img src="images/Jack.png" alt="">
                <div>
                    <p>Easy Tutorials</p>
                    <span>500k Suscribers</span>
                </div>
                <button type="button">Suscribe</button>
            </div>
            <div class="vid-description">
                <p>Channel that make learning easy</p>
                <p>Suscribe Easy Tutorials to watch more tutorials on wev development</p>
                <hr>
                <br>
                <p style="text-align: center;">Los comentarios estan desactivados. <strong style="color: cadetblue">Más información</strong></p>
            </div>
        </div>
        <div class="right-sidebar">

        </div> 
        `)
    }
    
    addFirstContent()
    const addVideosSecond = async () => {
        let domElement = document.querySelector('.right-sidebar')
        let a=0
        for (let i = 0; i < 12; i++) {
            a>=8 ? a=0 :
            domElement.insertAdjacentHTML('beforeend', /* html */`
            <div class="side-video-list" id="${data['contents'][i]['video']['videoId']}">
                <a href="second.html" class="small-thumbnail"><img src="${data['contents'][i]['video']['thumbnails'][0]['url']}"></a>
                <div class="vid-info">
                    <a href="second.html">${data['contents'][i]['video']['title']}</a>
                    <p>${data['channelInfo']['title']}</p>
                    <p>${data['contents'][i]['video']['stats']['views']} Views &bull; ${data['contents'][i]['video']['publishedTimeText']}</p>
                </div>
            </div>
            `)
        }
    }
    addVideosSecond()

    const selectedVids = document.querySelectorAll(".side-video-list")

    selectedVids.forEach(vid => {
        vid.addEventListener('click', () => {
            let vidId = vid.getAttribute('id')
            localStorage.setItem('ID', vidId)
        })
    })

    function playVideo(parameter) {
        let iframe = document.querySelector('#mainVideo');
        iframe.insertAdjacentHTML('afterbegin', `
        <iframe class="rounded-2xl" width="100%" height="615" src="https://www.youtube.com/embed/${parameter}?si=czx-JXcyfxDxe0lv&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `)
    }

    let storageItem = localStorage.getItem('ID')
    playVideo(storageItem)
})
.catch(error => {
    console.error('Error al cargar el archivo JSON:', error);
});  



    