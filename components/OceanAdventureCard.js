import Image from 'next/image';
import Link from 'next/link';

const OceanAdventureCard = () => {
  return (
    <div
      style={{
        background: "#2563eb",
        color: "#ffffff",
        padding: "2rem",
        borderRadius: "1rem",
        textAlign: "center",
        boxShadow: "0 6px 10px rgba(0, 0, 0, 0.6)",
        maxWidth: "400px", // Restricts the card width
        width: "100%",
      }}
    >
      <Image
        src={"/assets/images/team/drive-png.png"}
        alt="Diving Adventure"
        width={200}
        height={300}
        layout="responsive"
        style={{ marginBottom: "1rem", borderRadius: "50%" }}
      />
      <h3
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        Your Ocean Adventure Awaits
      </h3>
      <p style={{ marginBottom: "1.5rem", fontSize: "1rem" }}>
        Dive into crystal-clear waters and uncover the secrets of the ocean. Book your adventure today!
      </p>
      <div>
        <div className="schedule-one__btn-box">
          <Link href="/contact" className="schedule-one__btn thm-btn">
            Book Swimming<span className="icon-arrow-right"></span>
          </Link>
        </div>
        <div
          className="schedule-one__btn-box"
          style={{ marginTop: "1rem" }}
        >
          <Link href="/contact" className="schedule-one__btn thm-btn">
            Book Diving<span className="icon-arrow-right"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OceanAdventureCard;
