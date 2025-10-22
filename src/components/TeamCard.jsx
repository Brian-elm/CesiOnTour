export default function TeamCard({ name, role, img, desc }) {
  return (
    <div className="col-lg-3 col-md-6 mb-4 fade-in-section">
      <div className="card team-card h-100">
        <div className="card-img-top team-photo">
          <img src={img} alt={role} className="img-fluid" />
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">{name}</h5>
          <p className="card-text text-primary">{role}</p>
          <p className="card-text small">{desc}</p>
        </div>
      </div>
    </div>
  );
}


