import '../styles/banner.css';

function Banner(){
    return(
        <>
        <div class="container-fluid">
        <div class="title" style={{display: "flex", justifyContent: "center"}}>
            <h2 class="text-light" style={{display: "inline"}}>GreenJourney.</h2>
        </div>
        <div class="contenido">
            <div class="main">
                <h2 class="card-text" style={{textAlign: "center"}}>GreenJourney</h2>
                <p class="card-text text-dark" style={{fontSize: "20px", padding: "70px 0"}}>
                <section className='mb-4'>¡Hola explorador, te damos la bienvenida a GreenJourney!

En GreenJourney, nos emociona compartir contigo nuestra visión de reconocer y explorar la increíble diversidad ecológica de Colombia. Creemos que este país es un tesoro que merece ser descubierto y valorado por sus maravillas naturales.

GreenJourney es una aplicación turística comprometida con el medio ambiente, y nos esforzamos por promover un turismo sostenible que tenga un impacto positivo en la conservación de la naturaleza y las comunidades locales. Queremos brindarte una experiencia única y enriquecedora mientras te sumerges en los parques y áreas protegidas de la región de Antioquia.

Imagina adentrarte en una galaxia llena de planetas y estrellas que representan diferentes destinos ecológicos. Cada uno de ellos te ofrecerá aventuras emocionantes y la oportunidad de aprender nuevos conocimientos sobre la flora, fauna y paisajes únicos que encontrarás en tu camino. Prepárate para vivir una experiencia inolvidable mientras exploras las maravillas naturales de Antioquia.</section>

Además, estamos emocionados por anunciar que GreenJourney se encuentra actualmente en su versión beta. Estamos trabajando arduamente para mejorar y expandir nuestra aplicación. En la próxima versión, tendrás la capacidad de participar en un chat de usuarios, donde podrás compartir tus experiencias, hacer preguntas y calificar la calidad y sostenibilidad de los diferentes sitios turísticos ecológicos. Queremos que tu voz sea escuchada y que juntos podamos fomentar un turismo responsable y consciente.

Prepárate para embarcarte en una aventura única en GreenJourney y descubre todo lo que la región de Antioquia tiene para ofrecerte. ¡Empieza tu viaje y déjate sorprender por la belleza natural de Colombia!
                </p>
            </div>
        </div>
        <iframe src="https://storymaps.arcgis.com/stories/c0f275e44de4460fbce3a66e9b1e2a37" className="mt-5 mb-5 iframe_mapa" width="100%" height="700px" frameborder="0" allowfullscreen allow="geolocation"></iframe>
    </div>
    </>

    )

}

export default Banner;