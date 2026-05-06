export default function Product() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1 className="page-hero__title">Product</h1>
          <p className="page-hero__lead">
            Specifications and details for The Riser. Replace placeholder values
            with your final manufacturing data when ready.
          </p>
        </div>
      </div>
      <div className="page-body">
        <div className="container prose">
          <h2>Overview</h2>
          <p>
            The Riser is a compact lifting aid engineered to improve posture and
            leverage during repetitive picks and controlled lifts. Use this page
            for dimensions, materials, compatibility, and warranty copy tailored
            to your launch.
          </p>
          <h2>Specifications</h2>
          <table className="spec-table">
            <tbody>
              <tr>
                <th scope="row">Weight</th>
                <td>TBD (e.g. 2.4 lb / 1.1 kg)</td>
              </tr>
              <tr>
                <th scope="row">Dimensions (L × W × H)</th>
                <td>TBD</td>
              </tr>
              <tr>
                <th scope="row">Primary materials</th>
                <td>TBD (e.g. steel, polymer grip)</td>
              </tr>
              <tr>
                <th scope="row">Load rating</th>
                <td>TBD — always cite tested limits</td>
              </tr>
              <tr>
                <th scope="row">Finish</th>
                <td>TBD</td>
              </tr>
              <tr>
                <th scope="row">Included</th>
                <td>TBD (e.g. storage hook, quick-start card)</td>
              </tr>
            </tbody>
          </table>
          <h2>Compatibility &amp; safety</h2>
          <ul>
            <li>Document intended use cases and clear limits.</li>
            <li>List surfaces or accessories the product is validated with.</li>
            <li>Link to any required safety or regulatory notices.</li>
          </ul>
          <h2>Warranty</h2>
          <p>
            Placeholder: describe warranty period, what is covered, and how to
            make a claim.
          </p>
        </div>
      </div>
    </>
  );
}
