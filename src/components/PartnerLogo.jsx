export default function PartnerLogo({ icon, title }) {
  return (
    <div className="col-lg-3 col-md-6 mb-4 text-center slide-in-right">
      <div className="partner-logo">
        <i className={`fas ${icon} fa-4x mb-3`}></i>
        <h5>{title}</h5>
      </div>
    </div>
  );
}


