document.addEventListener("DOMContentLoaded", function() {

  /* Your code goes here */
  // step 1 and 2
  const ajaxRequest = document.querySelector('.ajax-button');
  const sec3456 = document.querySelector('.response-button')
  ajaxRequest.addEventListener('click', ()=>{
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      data: {},
      dataType: ''
    });
  });

  // Step 3
  // sec3456.addEventListener('click', ()=>{
  //   $.ajax({
  //     url: 'http://first-ajax-api.herokuapp.com/ping/',
  //     method: 'GET',
  //     data: {},
  //     dataType: ''
  //   }).done(function (responseData) {
  //     console.log(responseData);
  //     sec3456.innerText += `\n` + responseData;
  //   });
  // });

  // Step 4
  // sec3456.addEventListener('click', ()=>{
  //   $.ajax({
  //     url: 'http://first-ajax-api.herokuapp.com/pong/',
  //     method: 'GET',
  //     data: {},
  //     dataType: ''
  //   }).fail(function () {
  //     console.log('Encountered an Error.');
  //     sec3456.innerText += `\n Sorry, we've encountered an error. We'll try harder next time.`;
  //   });
  // });

  // Step 5
  // sec3456.addEventListener('click', ()=>{
  //   $.ajax({
  //     url: 'http://first-ajax-api.herokuapp.com/ping/',
  //     method: 'GET',
  //     data: {},
  //     dataType: ''
  //   }).always(function () {
  //     console.log('Hey the request finished!');
  //     sec3456.innerText += `\n The request finished but we don't know if it was successful or not without inspecting.`;
  //   });
  // });

  // Step 6
  sec3456.addEventListener('click', ()=>{
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/pong/',
      method: 'GET',
      data: {},
      dataType: ''
    }).always(function () {
      console.log('Hey the request finished!');
      sec3456.innerText += `\n The request finished but we don't know if it was successful or not without inspecting.`;
    }).fail(function () {
      console.log('Encountered an Error.');
      sec3456.innerText += `\n Sorry, we've encountered an error. We'll try harder next time.`;
    }).done(function (responseData) {
      console.log(responseData);
      sec3456.innerText += `\n` + responseData;
    });
  });

  // Step 7
  const sec7 = document.querySelector('.count');
  sec7.addEventListener('click', ()=>{
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count/',
      method: 'GET',
      data: {},
      dataType: ''
    }).done((responseData)=>{
      console.log(`${responseData} visits.`);
      sec7.innerText += `\n ${responseData} visits.`
    });
  })

  // Step 8
  const sec8 = document.querySelector('.time');
  const sec8Text = document.querySelector('#step8');
  sec8.addEventListener('click', ()=>{
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time/',
      method: 'GET',
      data: {timezone: 'Asia/Kolkata'},
      dataType: ''
    }).done((responseData)=>{
      // sec8Text.innerText += `\n` + responseData;
      sec8.innerText += `\n ${responseData}`;
    })
  });

  // Step 9
  const sec9 = document.querySelector('.car');
  const step9 = document.querySelector('#step9');
  sec9.addEventListener('click', ()=>{
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/a_car/',
      get: 'GET',
      data: {},
      dataType: 'html'
    }).done((responseData)=>{
      let textData = document.createElement("ul");
      // Creates a new ul element every time
      textData.innerHTML = responseData;
      step9.appendChild(textData);
    })
  })
})
