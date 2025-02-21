import { Title } from "./"
import { tours } from "../utils/data"

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title={"Featured"} subTitle={"Tours"} />

      <div className="section-center featured-center">
        {tours.map((tour, i) => {
          return (
            <article key={i} className="tour-card">
              <div className="tour-img-container">
                <img src={tour.image} className="tour-img" alt="" />
                <p className="tour-date">{tour.date}</p>
              </div>
              <div className="tour-info">
                <h4>{tour.title}</h4>
                <p>{tour.info}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>
                    {tour.location}
                  </p>
                  <p>{tour.duration}</p>
                  <p>from ${tour.price}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Tours
