export default function ProgressBar() {
  return (
    <div className="progress-container">
      <div className="progress mb-3" style={{ height: '30px' }}>
        <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin={0} aria-valuemax={100}>
          <span className="progress-text">0%</span>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h4 className="text-success">€&nbsp;0</h4>
          <p className="text-muted">€ Récoltés</p>
        </div>
        <div className="col-md-6">
          <h4 className="text-primary">€&nbsp;10 000</h4>
          <p className="text-muted">€ Objectif</p>
        </div>
      </div>
    </div>
  );
}


