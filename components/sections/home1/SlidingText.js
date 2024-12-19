export default function SlidingText() {
  return (
    <>
      {/* Sliding Text Start */}
      <section className="sliding-text-one" style={{ maginTop: "100px" }}>
        <div className="sliding-text-one__wrap">
          <ul className="sliding-text__list marquee_mode">
            <li>
              <h2
                data-hover="Dive Into Adventure"
                className="sliding-text__title"
              >
                Dive Into Adventure
                <img src="/assets/images/icon/star-icon.png" alt="Star Icon" />
              </h2>
            </li>
            <li>
              <h2 data-hover="Explore the Deep" className="sliding-text__title">
                Explore the Deep
                <img src="/assets/images/icon/star-icon.png" alt="Star Icon" />
              </h2>
            </li>
            <li>
              <h2
                data-hover="Discover the Ocean"
                className="sliding-text__title"
              >
                Discover the Ocean
                <img src="/assets/images/icon/star-icon.png" alt="Star Icon" />
              </h2>
            </li>
            <li>
              <h2
                data-hover="Breathe Underwater"
                className="sliding-text__title"
              >
                Breathe Underwater
                <img src="/assets/images/icon/star-icon.png" alt="Star Icon" />
              </h2>
            </li>
            <li>
              <h2
                data-hover="Dive Into Adventure"
                className="sliding-text__title"
              >
                Dive Into Adventure
                <img src="/assets/images/icon/star-icon.png" alt="Star Icon" />
              </h2>
            </li>
            <li>
              <h2 data-hover="Explore the Deep" className="sliding-text__title">
                Explore the Deep
                <img src="/assets/images/icon/star-icon.png" alt="Star Icon" />
              </h2>
            </li>
          </ul>
        </div>
      </section>
      {/* Sliding Text End */}
    </>
  );
}
