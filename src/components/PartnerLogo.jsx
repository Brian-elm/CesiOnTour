export default function PartnerLogo({ logo, title }) {
  return (
    <div className="col-lg-3 col-md-6 mb-4 text-center slide-in-right">
      <div className="partner-logo">
        {/* <i className={`fas ${icon} fa-4x mb-3`}></i> */}
        <img src={logo} alt={title} className="img-fluid mb-3" style={{maxHeight: '100px', width: 'auto', objectFit: 'contain'}} />
        <h5>{title}</h5>
      </div>
    </div>
  );
}


