import "normalize.css"
import "../assets/css/main.css"

const Gallery = () => {
    return (
        <section className="gallery-body">
            <img className="galley-image" src="https://images.unsplash.com/photo-1615497001839-b0a0eac3274c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y3V0ZSUyMGNhdHN8ZW58MHx8MHx8&w=1000&q=80" alt="img1" />
            <img className="galley-image" src="https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img2t" />
            <img className="galley-image" src="https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img3" />
            <img className="galley-image" src="https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img4" />
            <img className="galley-image" src="https://images.pexels.com/photos/982865/pexels-photo-982865.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img5" />
        </section>
    )
}

export default Gallery
