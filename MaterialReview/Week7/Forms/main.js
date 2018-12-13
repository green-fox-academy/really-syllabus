
function validate() {
  let form = document.forms.MRForm;

  let isValid = form.name.value.length === 3;
  if ( !isValid ) {
    alert('Invalid name, its length must be 3.');
  }
  // return value determines form submission
  // true: form will be submitted
  // false: form won't be submitted
  return isValid;
}

function logFormValues() {
  let form = document.forms.MRForm;
  let resultTable = document.querySelector('#result_table');
  resultTable.innerText = '';

  let trHeader = document.createElement('tr');

  let thAttribute = document.createElement('th');
  thAttribute.innerText = 'attribute';
  trHeader.appendChild( thAttribute );

  let thValue = document.createElement('th');
  thValue.innerText = 'value';
  trHeader.appendChild( thValue );

  let thChecked = document.createElement('th');
  thChecked.innerText = 'checked';
  trHeader.appendChild( thChecked );

  resultTable.appendChild( trHeader );

  Object.keys( form ).forEach( i => {
    if ( !isNaN(parseInt(i)) ) {
      let tr = document.createElement('tr');

      let tdAttribute = document.createElement('td');
      tdAttribute.innerText = form[ i ].name;
      tr.appendChild( tdAttribute );

      let tdValue = document.createElement('td');
      tdValue.innerText = form[ i ].value;
      tr.appendChild( tdValue );

      let tdChecked = document.createElement('td');
      tdChecked.innerText = ( ['checkbox','radio'].includes(form[i].type) ) ? form[ i ].checked : '';
      tr.appendChild( tdChecked );

      resultTable.appendChild( tr );
    }
  } );
}
