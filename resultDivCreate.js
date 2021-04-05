

function createResultDiv(params) {
    let result_sample_div = ```
    <div id="result" class="alert alert-success">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th>Code</th>
              <th>Subject Name</th>
              <th>Subject Credits</th>
              <th>Grade</th>
              <th>Points Earned</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>EE8888</td>
              <td>Control Systems</td>
              <td>3</td>
              <td>A+</td>
              <td>27</td>
            </tr>
            
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <th>Total Credits</th>
              <td>12</td>
              <td></td>
              <td>188</td>
            </tr>
            <tr>
              <td></td>
              <th>GPA</th>
              <td></td>
              <td></td>
              <th>8.778</th>
            </tr>
          </tfoot>
        </table>
      </div>
```;
}

function createSubjectRow(subject) {
    let subRow = `<tr>
        <td>${subject.code}EE8888</td>
        <td>${subject.name}Control Systems</td>
        <td>${subject.credit}3</td>
        <td>${subject.grade}A+</td>
        <td>${subject.pointsGained}27</td>
    </tr>`;
    return subRow;
}