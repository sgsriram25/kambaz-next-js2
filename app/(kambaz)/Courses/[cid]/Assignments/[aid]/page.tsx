export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <form>
        {/* Assignment Name */}
        <div className="mb-3">
          <label htmlFor="wd-name" className="form-label fw-bold">Assignment Name</label>
          <input
            id="wd-name"
            defaultValue="A1 - ENV + HTML"
            className="form-control"
            type="text"
          />
        </div>

        {/* Description */}
        <div className="mb-3">
          <label htmlFor="wd-description" className="form-label fw-bold">Description</label>
          <textarea
            id="wd-description"
            defaultValue="The assignment is available online. Submit a link to the landing page of"
            className="form-control"
            rows={5}
          />
        </div>

        {/* Assignment Details Table */}
        <div className="mb-3">
          <table className="table">
            <tbody>
              <tr>
                <td className="text-end align-middle">
                  <label htmlFor="wd-points" className="form-label">Points</label>
                </td>
                <td>
                  <input
                    id="wd-points"
                    defaultValue={100}
                    type="number"
                    className="form-control"
                  />
                </td>
              </tr>
              <tr>
                <td className="text-end align-middle">
                  <label htmlFor="wd-due-date" className="form-label">Due Date</label>
                </td>
                <td>
                  <input
                    id="wd-due-date"
                    type="date"
                    className="form-control"
                  />
                </td>
              </tr>
              <tr>
                <td className="text-end align-middle">
                  <label htmlFor="wd-start-date" className="form-label">Start Date</label>
                </td>
                <td>
                  <input
                    id="wd-start-date"
                    type="date"
                    className="form-control"
                  />
                </td>
              </tr>
              <tr>
                <td className="text-end align-middle">
                  <label htmlFor="wd-max-attempts" className="form-label">Max Attempts</label>
                </td>
                <td>
                  <input
                    id="wd-max-attempts"
                    defaultValue={3}
                    type="number"
                    className="form-control"
                  />
                </td>
              </tr>
              <tr>
                <td className="text-end align-middle">
                  <label htmlFor="wd-grading-scale" className="form-label">Grading Scale</label>
                </td>
                <td>
                  <select id="wd-grading-scale" className="form-select">
                    <option value="letter">Letter Grade</option>
                    <option value="percentage">Percentage</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td className="text-end align-middle">
                  <label htmlFor="wd-feedback" className="form-label">Feedback Option</label>
                </td>
                <td>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      id="wd-feedback"
                      className="form-check-input"
                    />
                    <label htmlFor="wd-feedback" className="form-check-label">Enable Feedback</label>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        
        <div className="text-end">
          <button type="submit" className="btn btn-success">Save Assignment</button>
        </div>
      </form>
    </div>
  );
}
