export function DashboardVisual() {
  return (
    <div className="dash" aria-hidden="true">
      <div className="dash-side">
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className="dash-main">
        <div className="dash-metrics">
          <span />
          <span />
          <span />
        </div>
        <div className="dash-chart">
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="dash-rows">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

export function MobileVisual() {
  return (
    <div className="phone" aria-hidden="true">
      <div className="phone-screen">
        <span className="phone-notch" />
        <span className="phone-block" />
        <span className="phone-line" />
        <span className="phone-line short" />
        <span className="phone-card" />
        <span className="phone-card dim" />
        <span className="phone-tabs">
          <i />
          <i />
          <i />
        </span>
      </div>
    </div>
  );
}

export function FilmVisual() {
  return (
    <div className="film" aria-hidden="true">
      <span className="film-letter top" />
      <div className="film-scene">
        <span className="film-orb" />
        <span className="film-slash" />
        <span className="film-block" />
      </div>
      <span className="film-letter bottom" />
      <span className="film-progress">
        <i />
      </span>
    </div>
  );
}

export function WebsiteVisual() {
  return (
    <div className="browser" aria-hidden="true">
      <div className="browser-top">
        <i />
        <i />
        <i />
      </div>
      <div className="browser-body">
        <b />
        <span />
        <span className="short" />
        <div className="browser-cards">
          <em />
          <em />
        </div>
      </div>
    </div>
  );
}

export function DuoVisual() {
  return (
    <div className="duo" aria-hidden="true">
      <DashboardVisual />
      <FilmVisual />
    </div>
  );
}
