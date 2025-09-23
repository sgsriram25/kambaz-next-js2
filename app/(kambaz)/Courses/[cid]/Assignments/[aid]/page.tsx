export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
      
      <label htmlFor="wd-description">Description</label>
      <textarea id="wd-description">
        The assignment is available online. Submit a link to the landing page of
      </textarea>
      <br />
      
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} type="number" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due Date</label>
            </td>
            <td>
              <input id="wd-due-date" type="date" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-start-date">Start Date</label>
            </td>
            <td>
              <input id="wd-start-date" type="date" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-max-attempts">Max Attempts</label>
            </td>
            <td>
              <input id="wd-max-attempts" defaultValue={3} type="number" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-grading-scale">Grading Scale</label>
            </td>
            <td>
              <select id="wd-grading-scale">
                <option value="letter">Letter Grade</option>
                <option value="percentage">Percentage</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-feedback">Feedback Option</label>
            </td>
            <td>
              <input type="checkbox" id="wd-feedback" />
              <label htmlFor="wd-feedback">Enable Feedback</label>
            </td>
          </tr>
        </tbody>
      </table>

      <br />
      <button type="submit">Save Assignment</button>
    </div>
  );
}
